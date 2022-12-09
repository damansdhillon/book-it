// HOC container for pages with Navbar and Footer
import React from "react";
import { useWindowDimensions } from "../hooks/windowDimensions";
import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";

export default function PageHOC({ children }: { children: React.ReactNode }) {
  const [showRightSidebar, setShowRightSidebar] = React.useState(false);
  const { width, height } = useWindowDimensions();

  // Check the size of the window and show the right sidebar if the width is greater than 768px
  // Transition from mobile to desktop should be smooth
  React.useEffect(() => {
    if (width > 800) {
      setShowRightSidebar(true);
    } else {
      setShowRightSidebar(false);
    }
  }, [width]);

  return (
    <>
      <div className={`he-full inset-0 flex w-full justify-evenly`}>
        <div className="grow-4 shrink-3 absolute inset-0 right-auto flex">
          <RightSidebar
            classes={`w-[15rem] transition-all duration-500 ease-in-out ${
              showRightSidebar ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div className="flex grow-[15]">{children}</div>
        <div className="absolute inset-0 left-auto flex w-[5rem] grow-[2]">
          <LeftSidebar />
        </div>
      </div>
    </>
  );
}
