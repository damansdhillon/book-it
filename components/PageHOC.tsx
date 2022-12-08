// HOC container for pages with Navbar and Footer
import React, { useState } from "react";
import { useWindowDimensions } from "../hooks/windowDimensions";
import { useTheme } from "../lib/ThemeContext";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function PageHOC({ children }: { children: React.ReactNode }) {
  const themeContext = useTheme();
  const { width, height } = useWindowDimensions();
  const [showRightSidebar, setShowRightSidebar] = useState(true);

  return (
    <>
      <div className="flex justify-evenly">
        <div
          style={themeContext.theme.rightSidebar}
          className="h-screen grow-[2]"
        >
          {width}
          <RightSidebar />
        </div>
        <div className="grow-[15]">
          {/* <Navbar /> */}
          <div style={themeContext.theme.page}>{children}</div>
        </div>
        <div className="h-screen px-4">
          <LeftSidebar />
        </div>
      </div>
    </>
  );
}
