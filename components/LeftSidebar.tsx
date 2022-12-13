import { useTheme } from "next-themes";
import { useRef, useState } from "react";
import { useAuth } from "../lib/AuthContext";
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
        <div
          className="absolute flex cursor-pointer items-center justify-end rounded-lg pr-2"
          onClick={toggleExpandedSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      {showCollapsedSidebar && (
        <div className="sidebar fixed right-0 top-0 flex h-screen w-[4rem] flex-col justify-between py-4">
          <div
            className="flex w-full cursor-pointer justify-center"
            onClick={toggleExpandedSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className={`flex flex-col items-center justify-center `}>
            <ThemeSwitcher />
            <div
              className={`cursor-pointer rounded-lg p-1 ${
                themeType === "light"
                  ? "hover:bg-gray-300"
                  : "hover:bg-gray-800"
              }`}
              onClick={() => auth?.signOut()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className={`h-6 w-6 font-bold text-primary`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
