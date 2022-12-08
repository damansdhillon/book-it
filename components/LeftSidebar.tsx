import { useTheme } from "../lib/ThemeContext";

const LeftSidebar = () => {
  const themeContext = useTheme();
  return (
    <>
      <div className="flex h-full items-center justify-center ">
        <button
          style={{
            backgroundColor: themeContext.theme.colors.primary,
            color: themeContext.theme.colors.secondary,
          }}
          className={`rounded p-2`}
          onClick={themeContext.toggleTheme}
        >
          {" "}
          Toggle theme{" "}
        </button>
      </div>
    </>
  );
};

export default LeftSidebar;
