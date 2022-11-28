// HOC container for pages with Navbar and Footer

import React from "react";
import Navbar from "../components/Navbar";

export default function PageHOC({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Navbar />
        {children}
      </div>
    </>
  );
}
