type Theme = {
  name: string;
  colors: {
    primary: string;
    secondary: string;
  };
  navbar: {
    backgroundColor: string;
    textColor: string;
    color: string;
    shadowColor: string;
  };
  page: {
    backgroundColor: string;
    textColor: string;
    color: string;
  };
  rightSidebar: {
    backgroundColor: string;
    textColor: string;
    color: string;
    custom: {
      headerBackgroundColor: string;
      fotterBackgroundColor: string;
      progressBar: {
        backgroundColor: string;
        strokeColor: string;
      };
    };
  };
};

type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

type CircularProgressProps = {
  size: number;
  strokeColor: string;
  backgroundColor: string;
  value: number;
};
