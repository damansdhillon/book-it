// Home Page component with PageHOC

import PageHOC from "../components/PageHOC";
import { useTheme } from "../lib/ThemeContext";

export default function Home() {
  const themeContext = useTheme();
  return (
    <PageHOC>
      <div
        style={themeContext.theme.page}
        className="flex h-screen w-full items-center justify-center"
      >
        <h1 className="text-3xl font-bold">Home</h1>
      </div>
    </PageHOC>
  );
}
