type Theme = {
  name: string;
  colors: {
    primary: string;
    secondary: string;
  };
};

type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};
