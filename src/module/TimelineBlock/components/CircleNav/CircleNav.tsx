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
    const { timelineData, uniqueTags, length, getPointPosition, setHoveredTeg, hoveredTeg, handlePeriodChange, handleNextPeriod, activePeriodIndex, handlePrevPeriod } = useCircleNav(props);

    const { start, end, events } = timelineData

    return (
        <nav className={style['timeline__block__circle-nav']}>
            <div className={style['timeline__block__circle-nav__date']}>
                <span className={style.start}>{start}</span>
                <span className={style.end}>{end}</span>
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
                <div>
                    <Button onClick={handlePrevPeriod}>

                        <Image alt="chevron left" src="/chevron_left.svg" width={20} height={20} />
                    </Button>

                    <Button onClick={handleNextPeriod}>
                        <Image alt="chevron right" src="/chevron_right.svg" width={20} height={20} />
                    </Button>
                </div>

            </div>
        </nav>
    );
}
