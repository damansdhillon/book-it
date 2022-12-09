// Home Page component with PageHOC

import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PageHOC from "../components/PageHOC";
import { useAuth } from "../lib/AuthContext";

export default function Home() {
  const theme = useTheme();
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    theme?.setTheme(theme?.theme || "yellow-dark");
  }, []);

  useEffect(() => {
    if (!auth?.isLogged) {
      router.push("/auth/login");
    }
  }, [auth, router]);

  return (
    <PageHOC>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-3">
        <div className="text-3xl font-bold">Home</div>
        <button
          className="button font-bold"
          onClick={() =>
            theme?.setTheme(
              theme?.theme === "yellow-dark" ? "yellow-light" : "yellow-dark"
            )
          }
        >
          Toggle Theme
        </button>
        <div>
          <button className="button font-bold" onClick={() => auth?.signOut()}>
            Sign Out
          </button>
        </div>
      </div>
    </PageHOC>
  );
}
