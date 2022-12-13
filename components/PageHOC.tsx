// HOC container for pages with Navbar and Footer
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "../hooks/windowDimensions";
import { useAuth } from "../lib/AuthContext";
import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";

export default function PageHOC({ children }: { children: React.ReactNode }) {
  const rightSidebarRef = React.useRef<HTMLDivElement>(null);
  const router = useRouter();
  const auth = useAuth();
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (!auth?.isLogged) {
      router.push("/auth/login");
    }
  }, [auth, router]);

  useEffect(() => {
    if (width > 800) {
      setShowRightSidebar(true);
    } else {
      setShowRightSidebar(false);
    }
  }, [width]);

  return (
    <>
      <div className={`inset-0 flex h-full w-full justify-evenly`}>
        <div className={`grow-4 absolute inset-0 right-auto flex`}>
          <div
            className={`sidebar absolute flex h-screen w-[4rem] cursor-pointer justify-center p-2 ${
              !showRightSidebar ? "z-10" : "z-0"
            }`}
            onClick={() => setShowRightSidebar(true)}
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
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </div>
          {showRightSidebar && (
            <div ref={rightSidebarRef} className="z-10 animate-slide-l-r">
              <RightSidebar
                classes={`w-[15rem]`}
                showCloseButton={width < 800}
                setShowRightSidebar={setShowRightSidebar}
              />
            </div>
          )}
        </div>
        <div className="flex grow-[15]">{children}</div>
        <LeftSidebar />
      </div>
    </>
  );
}
