import { ITimelineData } from '@/constants/timelineData';
import styles from './TimelineBlock.module.scss';
import { useTimelineBlock } from "./useTimelineBlock";

export interface ITimelineBlock {
  timelineData: ITimelineData[]
}

export function TimelineBlockViwe({ timelineData, ...rest }: ITimelineBlock) {
  const { ...TimelineBlockProps } = useTimelineBlock({ timelineData, ...rest });

  return (
    <section className={styles['timeline__block']} {...TimelineBlockProps}>TimelineBlock</section>
  )
}
