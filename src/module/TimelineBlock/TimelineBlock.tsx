"use client"
import { TimelineData } from '@/shared/constants/timelineData';
import styles from './TimelineBlock.module.scss';
import { CircleNav, EventSlider, TimelineBlockTitle } from './components';
import { useTimelineBlock } from './useTimelineBlock';

export interface ITimelineBlock {
  timelineData: TimelineData[]
  title: string;
  [key: string]: any;
}

export function TimelineBlock(props: ITimelineBlock) {
  const { title, activePeriod, handlePeriodChange, activePeriodIndex, timelineData, ...rest } = useTimelineBlock(props)

  return (
    <section className={`${styles['timeline__block']} container`} {...rest}>
      <TimelineBlockTitle title={title} />
      <CircleNav handlePeriodChange={handlePeriodChange}
        activePeriodIndex={activePeriodIndex} timelineData={timelineData} />
      <EventSlider
        activePeriod={activePeriod}
      />
    </section>
  )
}