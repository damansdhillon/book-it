import { useTheme } from "next-themes";
import { useRef, useState } from "react";
import { useAuth } from "../lib/AuthContext";
import SVGIConButton from "./SVGIconButton";
import ThemeSwitcher from "./ThemeSwitcher";

export const LeftSidebar = () => {
  const expandedSidebar = useRef<HTMLDivElement>(null);
  const [showCollapsedSidebar, setShowCollapsedSidebar] = useState(true);
  const auth = useAuth();
  const { theme } = useTheme();
  // theme = yellow-light. Extract color and type from theme
  const themeType = theme?.split("-")[1]; // light or dark

  const toggleExpandedSidebar = () => {
    expandedSidebar.current?.classList.toggle("translate-x-full");
    setShowCollapsedSidebar(!showCollapsedSidebar);
  };

  return (
    <>
      <div
        ref={expandedSidebar}
        className="sidebar fixed right-0 top-0 h-full w-[14rem] translate-x-full p-3  transition-all duration-500 ease-in-out"
      >
        <SVGIConButton onClick={toggleExpandedSidebar} iconName="cross" />
      </div>
      {showCollapsedSidebar && (
        <div className="sidebar fixed right-0 top-0 flex h-screen w-[4rem] flex-col justify-between py-2">
          <div className="flex justify-center">
            <SVGIConButton onClick={toggleExpandedSidebar} iconName="menu" />
          </div>
          <div className={`flex flex-col items-center justify-evenly gap-2`}>
            <ThemeSwitcher />
            <SVGIConButton onClick={() => auth?.signOut()} iconName="power" />
          </div>
        </div>
      )}
    </>
  );
};
