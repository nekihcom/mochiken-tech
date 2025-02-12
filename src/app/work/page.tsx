import { getWorks } from "@/lib/hook/useWork";
import SectionTitle from "@/components/SectionTitle";
import WorkList from "@/components/WorkList";

export default async function StaticPage() {
  const { contents }  = await getWorks();
  
  if (!contents) {
    return <h1>No Contents</h1>;
  }
  
  return (
    <>
      <SectionTitle title="work" />
      <WorkList allWorks={contents} />
    </>
  );
}