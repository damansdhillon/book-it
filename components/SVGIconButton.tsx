import { useTheme } from "next-themes";
import { MouseEventHandler } from "react";

const icons: any = {
  cross: (onClick: MouseEventHandler, classes: string) => (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={classes}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  sun: (onClick: MouseEventHandler, classes: string) => (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={classes}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  menu: (onClick: MouseEventHandler, classes: string) => (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={classes}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  ),
  power: (onClick: MouseEventHandler, classes: string) => (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={classes}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
      />
    </svg>
  ),
};

const SVGIConButton = (props: SVGIConButtonProps) => {
  const { theme } = useTheme();
  const { onClick, iconName } = props;
  let classes =
    "flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-lg p-1 text-primary hover:bg-slate-700";
  classes += theme?.includes("light")
    ? " hover:bg-gray-300"
    : " hover:bg-gray-800";
  return <>{icons[iconName](onClick, classes)}</>;
};

type SVGIConButtonProps = {
  onClick: () => void;
  iconName: any;
};

export default SVGIConButton;
