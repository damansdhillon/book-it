import { useEffect, useRef, useState } from "react";

const HorizontalProgressBar = ({
  value,
  label,
}: HorizontalProgressBarProps) => {
  const oldValue = useRef(value);
  const interval = useRef(null as any);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    interval.current && clearInterval(interval.current);
    interval.current = setInterval(() => {
      setProgress((val) => {
        if (val >= value) {
          oldValue.current = value;
          clearInterval(interval.current);
          return val;
        }
        return val + 1;
      });
    }, 20);

    return () => clearInterval(interval.current);
  }, [value]);
  return (
    <div className="relative">
      <div className="flex justify-between py-2">
        <div className="text-xs">{label}</div>
        <div className="grayed-out text-xs">{`${progress}%`}</div>
      </div>
      <div className="flex h-1 overflow-hidden rounded bg-gray-500 text-xs">
        <div
          style={{ width: `${progress}%` }}
          className="flex flex-col justify-center whitespace-nowrap bg-primary text-center text-white shadow-none"
        />
      </div>
    </div>
  );
};

type HorizontalProgressBarProps = {
  value: number;
  label: string;
};

export default HorizontalProgressBar;
