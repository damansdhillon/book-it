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
      <div className="flex justify-between">
        {/* Right Sidebar */}
        <div className="h-screen w-[20rem]">
          <RightSidebar setShowRightSidebar={setShowRightSidebar} />
        </div>
        {/* Main Page Content */}
        <div className="h-screen w-full">{children}</div>
        {/* Left Sidebae */}
        <div className="h-screen">
          <LeftSidebar />
        </div>
      </div>
    </>
  );
}
