import { TimelineData } from "@/constants/timelineData";
import { TimelineBlock } from "@/module";

export default function Home() {
  return (
    <main >
      <TimelineBlock
        timelineData={TimelineData}
      />
    </main>
  );
}
