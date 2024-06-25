import { useMemo, useState } from 'react';
import { ITimelineBlock } from './TimelineBlock';

export type TTimelineBlock = ReturnType<typeof useTimelineBlock>;

export function useTimelineBlock({ timelineData, ...rest }: ITimelineBlock) {
	const [activePeriodIndex, setActivePeriodIndex] = useState<number>(0);

	const activePeriod = useMemo(
		() => timelineData[activePeriodIndex],
		[timelineData, activePeriodIndex]
	);

	const handlePeriodChange = (index: number) => {
		if (index >= 0 && index < timelineData.length) {
			setActivePeriodIndex(index);
		}
	};

	return {
		activePeriod,
		activePeriodIndex,
		handlePeriodChange,
		timelineData,
		...rest,
	};
}
