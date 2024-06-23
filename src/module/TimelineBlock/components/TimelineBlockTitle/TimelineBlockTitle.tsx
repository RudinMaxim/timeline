import { ITimelineBlock } from "../../TimelineBlock";
import styles from '../../TimelineBlock.module.scss';

export function TimelineBlockTitle({ title }: Pick<ITimelineBlock, 'title'>) {
    return (
        <div className={styles['timeline__block__title']}>
            <h2>{title}</h2>
        </div>
    );
}