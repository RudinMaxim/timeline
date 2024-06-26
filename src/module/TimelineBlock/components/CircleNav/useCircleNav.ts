import { Teg, TimelineData } from '@/shared/constants/timelineData';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { ICircleNav } from './CircleNav';

function getAllUniqueTags(timelineData: TimelineData): Teg[] {
	const tagSet = new Set<Teg>();
	timelineData.events.forEach((event) => tagSet.add(event.teg));
	return Array.from(tagSet);
}

export function useCircleNav({
	activePeriodIndex,
	handlePeriodChange,
	timelineData,
	...rest
}: ICircleNav) {
	const [hoveredTeg, setHoveredTeg] = useState<number | null>(null);
    const [currentStart, setCurrentStart] = useState(timelineData[activePeriodIndex].start);
    const [currentEnd, setCurrentEnd] = useState(timelineData[activePeriodIndex].end);
    
    const startRef = useRef<HTMLSpanElement>(null);
    const endRef = useRef<HTMLSpanElement>(null);

    const uniqueTags: Teg[] = getAllUniqueTags(timelineData[activePeriodIndex]);

    const animateYearChange = (start: number, end: number) => {
        if (startRef.current && endRef.current) {

            gsap.fromTo([startRef.current, endRef.current], 
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
            );

            gsap.to(startRef.current, {
                innerHTML: start,
                duration: 1,
                snap: { innerHTML: 1 },
                ease: "power1.inOut"
            });

            gsap.to(endRef.current, {
				
                innerHTML: end,
                duration: 1,
                snap: { innerHTML: 1 },
                ease: "power1.inOut"
            });
        }
    };

    useEffect(() => {
        setCurrentStart(timelineData[activePeriodIndex].start);
        setCurrentEnd(timelineData[activePeriodIndex].end);
        animateYearChange(timelineData[activePeriodIndex].start, timelineData[activePeriodIndex].end);
    }, [activePeriodIndex, timelineData]);

    const handlePrevPeriod = () => {
        if (activePeriodIndex > 0) {
            handlePeriodChange(activePeriodIndex - 1);
        }
    };

    const handleNextPeriod = () => {
        if (activePeriodIndex < timelineData.length - 1) {
            handlePeriodChange(activePeriodIndex + 1);
        }
    };

    const getPointPosition = (index: number, total: number) => {
        const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
        const radius = 530 / 2;
        const x = radius * Math.cos(angle) + radius;
        const y = radius * Math.sin(angle) + radius;
        return { x, y };
    };

    return {
        hoveredTeg,
        setHoveredTeg,
        currentStart,
        currentEnd,
        startRef,
        endRef,
        length: timelineData.length,
        uniqueTags,
        timelineData: timelineData[activePeriodIndex],
        activePeriodIndex,
        handlePeriodChange,
        handlePrevPeriod,
        handleNextPeriod,
        getPointPosition,
        ...rest,
    };
}
