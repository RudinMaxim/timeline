import { TimelineBlock } from "@/module";
import { timelineData } from "@/shared/constants/timelineData";

export default function Home() {
  return (
    <main>
      <TimelineBlock
        title="Исторические даты"
        timelineData={timelineData}
      />
    </main>
  );
}
