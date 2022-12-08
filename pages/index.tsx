// Home Page component with PageHOC

import { useTheme } from "next-themes";
import PageHOC from "../components/PageHOC";

export default function Home() {
  const theme = useTheme();
  return (
    <PageHOC>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <div className="text-3xl font-bold">Home</div>
        <button
          className="rounded bg-primary py-2 px-4 font-bold"
          onClick={() =>
            theme?.setTheme(theme?.theme === "dark" ? "light" : "dark")
          }
        >
          Toggle Theme
        </button>
      </div>
    </PageHOC>
  );
}
