import { ReactNode } from "react";

const SVGIConButton = (props: SVGIConButtonProps) => {
  return (
    <>
      <div className="flex items-center justify-center">{props.icon}</div>
    </>
  );
};

type SVGIConButtonProps = {
  icon: ReactNode;
};

export default SVGIConButton;
