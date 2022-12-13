// Home Page component with PageHOC

import PageHOC from "../components/PageHOC";

export default function Home() {
  return (
    <PageHOC>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-3">
        <div className="text-3xl font-bold">Home</div>
      </div>
    </PageHOC>
  );
}
