import { createContext, useContext, useState } from "react";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

interface Theme {
  name: string;

  colors: {
    primary: string;
    secondary: string;
  };
  navbar: {
    backgroundColor: string;
    textColor: string;
    color: string;
  };
  page: {
    backgroundColor: string;
    textColor: string;
    color: string;
  };
}

const lightTheme: Theme = {
  name: "light",
  colors: {
    primary: "#000",
    secondary: "#fff",
  },
  navbar: {
    backgroundColor: "#fff",
    textColor: "#000",
    color: "#000",
  },
  page: {
    backgroundColor: "#fff",
    textColor: "#000",
    color: "#000",
  },
};

const darkTheme: Theme = {
  name: "dark",
  colors: {
    primary: "#fff",
    secondary: "#000",
  },
  navbar: {
    backgroundColor: "#000",
    textColor: "#fff",
    color: "#fff",
  },
  page: {
    backgroundColor: "#000",
    textColor: "#fff",
    color: "#fff",
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
