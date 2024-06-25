import { TimelineBlock } from "@/module";
import { timelineData } from "@/shared/constants/timelineData";

export default function Home() {
  return (
    <main>
      {/* 1 */}
      <TimelineBlock
        title="Исторические даты"
        timelineData={timelineData}
      />
			{/* 2 */}
      <TimelineBlock
        title="Исторические даты"
        timelineData={timelineData}
      />
    </main>
  );
}
