import { useEffect, useRef, useState } from "react";

const CircularProgressBar = ({
  size,
  value = 0,
  backgroundColor,
  strokeColor,
}: CircularProgressProps) => {
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
    <>
      {/* Circular Progress bar SVG*/}
      <svg className={`h-14 w-14`} viewBox="0 0 36 36">
        <path
          className="text-gray-500"
          stroke="currentColor"
          fill="transparent"
          strokeWidth="3"
          strokeDasharray="100, 100"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        {/* Path animating stroke from 0 - value */}
        <path
          className="text-primary"
          stroke="currentColor"
          fill="transparent"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${progress}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text
          className="percentage"
          x="18"
          y="20.35"
          fill="#666"
          textAnchor="middle"
          // font size is relative to the radius of the circle
          fontSize="0.4rem"
        >
          {/* Animate the text value */}
          <tspan className="percentage-value">{progress}%</tspan>
        </text>
      </svg>
    </>
  );
};

type CircularProgressProps = {
  size: string;
  strokeColor?: string;
  backgroundColor?: string;
  value: number;
};

export default CircularProgressBar;
