import { useEffect, useRef, useState } from "react";

const CircularProgressBar = ({
  size = 100,
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
        console.log(val);
        if (val >= value) {
          oldValue.current = value;
          clearInterval(interval.current);
          return val;
        }
        return val + 1;
      });
    }, 10);

    return () => clearInterval(interval.current);
  }, [value]);

  return (
    <>
      {/* Circular Progress bar SVG*/}
      <svg
        className={`w-${size} h-${size}`}
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="circle"
          fill="none"
          stroke={backgroundColor ? backgroundColor : "#d2d6dc"}
          strokeWidth="4"
          strokeDasharray="100, 100"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        {/* Path animating stroke from 0 - value */}
        <path
          className="circle"
          fill="none"
          stroke={strokeColor ? strokeColor : "#3c8dbc"}
          strokeWidth="4"
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
          fontSize="0.4em"
        >
          {/* Animate the text value */}
          <tspan className="percentage-value">{progress}%</tspan>
        </text>
      </svg>
    </>
  );
};

type CircularProgressProps = {
  size: number;
  strokeColor?: string;
  backgroundColor?: string;
  value: number;
};

export default CircularProgressBar;
