import { Button } from "@/ui";
import Image from "next/image";
import { ITimelineBlock } from "../../TimelineBlock";
import style from '../../TimelineBlock.module.scss';
import { useCircleNav } from "./useCircleNav";

export interface ICircleNav {
    timelineData: ITimelineBlock['timelineData'];
    handlePeriodChange: (el: number) => void;
    activePeriodIndex: number;
}



export function CircleNav(props: ICircleNav) {
    const {
        currentStart,
        currentEnd,
        startRef,
        endRef,
        uniqueTags,
        length,
        getPointPosition,
        setHoveredTeg,
        hoveredTeg,
        handlePeriodChange,
        handleNextPeriod,
        activePeriodIndex,
        handlePrevPeriod
    } = useCircleNav(props);


    return (
        <nav className={style['timeline__block__circle-nav']}>
            <div className={style['timeline__block__circle-nav__date']}>
                <span ref={startRef} className={style.start}>{currentStart}</span>
                <span ref={endRef} className={style.end}>{currentEnd}</span>
            </div>

            <div className={style['timeline__block__circle-nav__circle']}>
                {uniqueTags.map((teg, index) => {
                    const { x, y } = getPointPosition(index, uniqueTags.length);

                    return (
                        <div
                            key={`CircleNav__${index}`}
                            className={style['timeline__block__circle-nav__point']}
                            style={{
                                position: 'absolute',
                                left: `${x}px`,
                                top: `${y}px`,
                                transform: 'translate(-50%, -50%)',
                            }}
                            onMouseEnter={() => setHoveredTeg(index)}
                            onMouseLeave={() => setHoveredTeg(null)}
                        >
                            {hoveredTeg === index && (
                                <Button onClick={() => handlePeriodChange(activePeriodIndex - 1)}>
                                    {teg}
                                </Button>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className={style['timeline__block__circle-nav__button']}>
                <span>
                    {activePeriodIndex + 1}/{length}
                </span>
                <ul>
                    <li>
                        <Button onClick={handlePrevPeriod}>

                            <Image alt="chevron left" src="/chevron_left.svg" width={20} height={20} />
                        </Button>
                    </li>

                    <li>
                        <Button onClick={handleNextPeriod}>
                            <Image alt="chevron right" src="/chevron_right.svg" width={20} height={20} />
                        </Button>
                    </li>
                </ul>

            </div>
        </nav>
    );
}
