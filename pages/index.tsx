// Home Page component with PageHOC

import PageHOC from "../components/PageHOC";
import { useTheme } from "../lib/ThemeContext";

export default function Home() {
  const themeContext = useTheme();
  return (
    <PageHOC>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-3xl font-bold">Home</div>
      </div>
    </PageHOC>
  );
}
