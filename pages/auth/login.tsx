import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../../lib/AuthContext";

const Login = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth?.isLogged) {
      router.push("/");
    }
  }, [auth?.isLogged, router]);

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <button
          className="button font-bold"
          onClick={() => auth?.signIn("test@test.ca", "password")}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
