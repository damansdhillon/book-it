export const SunSVGButton = (props: SubIconButtonProps) => {
  const { onClick } = props;
  const classes = `absolute flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center p-1 rounded-lg hover:bg-slate-700 text-primary`;
  return (
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
  );
};

type SubIconButtonProps = {
  onClick: () => void;
};

export default SunSVGButton;
