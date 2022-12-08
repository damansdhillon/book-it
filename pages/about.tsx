import PageHOC from "../components/PageHOC";

export default function About() {
  return (
    <PageHOC>
      <div className="flex h-screen w-full items-center justify-center">
        <h1 className="text-3xl font-bold">About</h1>
      </div>
    </PageHOC>
  );
}
