// HOC container for pages with Navbar and Footer
import { useTheme } from "next-themes";
import React from "react";

export default function PageHOC({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <>
      <div className={`flex justify-evenly`}>
        <div>{children}</div>
      </div>
    </>
  );
}
