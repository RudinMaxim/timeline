import { Teg, TimelineData } from '@/shared/constants/timelineData';
import { useState } from 'react';
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
	const uniqueTags: Teg[] = getAllUniqueTags(timelineData[activePeriodIndex]);

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
