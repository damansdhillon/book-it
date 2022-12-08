// Home Page component with PageHOC

import { useTheme } from "next-themes";
import { useEffect } from "react";
import PageHOC from "../components/PageHOC";

export default function Home() {
  const theme = useTheme();

  useEffect(() => {
    theme?.setTheme("yellow-dark");
  }, []);

  return (
    <PageHOC>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <div className="text-3xl font-bold">Home</div>
        <button
          className="button font-bold"
          onClick={() =>
            theme?.setTheme(
              theme?.theme === "yellow-dark" ? "yellow-light" : "yellow-dark"
            )
          }
        >
          Toggle Theme
        </button>
      </div>
    </PageHOC>
  );
}
