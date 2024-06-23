import { ITimelineBlock } from './TimelineBlockViwe';

export type TTimelineBlock = ReturnType<typeof useTimelineBlock>;

export function useTimelineBlock({ timelineData, ...rest }: ITimelineBlock) {
	return {
		timelineData,
		...rest,
	};
}
