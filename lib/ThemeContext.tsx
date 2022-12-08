import { createContext, useContext, useState } from "react";

const lightTheme: Theme = {
  name: "light",
  colors: {
    primary: "#000",
    secondary: "#fff",
  },
  navbar: {
    backgroundColor: "#DADADA",
    textColor: "#F1F1F1",
    color: "#000",
    shadowColor: "shadow-gray-500",
  },
  page: {
    backgroundColor: "#E9E9E9",
    textColor: "#000",
    color: "#000",
  },
  rightSidebar: {
    backgroundColor: "#DADADA",
    textColor: "#F1F1F1",
    color: "#000",
    custom: {
      headerBackgroundColor: "#DADADA",
      fotterBackgroundColor: "#DADADA",
      progressBar: {
        backgroundColor: "#DADADA",
        strokeColor: "#f9c74f",
      },
    },
  },
};

const darkTheme: Theme = {
  name: "dark",
  colors: {
    primary: "#fff",
    secondary: "#000",
  },
  navbar: {
    backgroundColor: "#8A8A8A",
    textColor: "#fff",
    color: "#fff",
    shadowColor: "shadow-gray-400",
  },
  page: {
    backgroundColor: "#404040",
    textColor: "#fff",
    color: "#fff",
  },
  rightSidebar: {
    backgroundColor: "#20202a",
    textColor: "#fff",
    color: "#fff",
    custom: {
      headerBackgroundColor: "#22222d",
      fotterBackgroundColor: "#22222d",
      progressBar: {
        backgroundColor: "#1e1e28",
        strokeColor: "#f9c74f",
      },
    },
  },
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    if (theme.name === "light") {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
