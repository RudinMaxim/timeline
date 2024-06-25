import { IEvent, TimelineData } from "@/shared/constants/timelineData";
import { Button } from "@/ui";
import Image from "next/image";
import { useRef } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../TimelineBlock.module.scss';
import { useEventSlider } from "./useEventSlider";

interface IEventSlider {
    activePeriod: TimelineData;
}

function EventCard({ year, description }: IEvent) {
    return (
        <li className={styles['timeline__block__events__card']}>
            <h3>{year}</h3>

            <p>{description}</p>
        </li>
    )
}


export function EventSlider({ activePeriod }: IEventSlider) {
    const swiperRef = useRef<any>(null);
    const { isBeginning, isEnd, isMobile, handleSlideChange, goNext, goPrev } = useEventSlider({ swiperRef });

    const { events } = activePeriod;

    return (
        <nav className={styles['timeline__block__events']}>
            {
                !isMobile && !isBeginning &&
                <Button onClick={goPrev} disabled={isBeginning}>
                    <Image alt="chevron left" src="/chevron_left.svg" width={20} height={20} />
                </Button>
            }

            <Swiper
                ref={swiperRef}
                slidesPerView={isMobile ? 1.8 : 3.33}
                modules={[Navigation, Pagination]}
                className={styles.event__slider}
                onSlideChange={handleSlideChange}
                onSwiper={handleSlideChange}
                pagination={isMobile ? {
                    clickable: true,
                    el: '.custom__pagination',
                } : false}
                // pagination={isMobile ? { clickable: true } : false}
            >
                {events.map(event => (
                    <SwiperSlide key={`EventSlider__${event.description}`} className={styles['timeline__block__events__event']} >
                        <EventCard {...event} />
                    </SwiperSlide>
                ))}


            </Swiper>

            {isMobile && (
                <div className={`custom__pagination ${styles.custom__pagination}`}></div>
            )}

            {!isMobile && !isEnd &&
                <Button onClick={goNext} disabled={isEnd}>
                    <Image alt="chevron left" src="/chevron_right.svg" width={20} height={20} />
                </Button>
            }
        </nav>
    )

}


