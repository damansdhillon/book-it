import { createContext, useContext, useState } from "react";

const logUserIn = async (email: string, password: string): Promise<User> => {
  return {
    email: email,
    permissions: ["ADMIN"],
    roles: ["USER"],
  } as User;
};

const logUserOut = async () => {
  return;
};

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {
    const user = await logUserIn(email, password);
    setUser(user);
  };

  const signOut = async () => {
    await logUserOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLogged: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
