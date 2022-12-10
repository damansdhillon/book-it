import Image from "next/image";
import { useEffect, useRef } from "react";
import CircularProgressBar from "./CircularProgressBar";
import { HorizontalDivider } from "./HorizontalDivider";
import HorizontalProgressBar from "./HorizontalProgressBar";

export const RightSidebar = (props: RightSidebarProps) => {
  // useRef to store array of numbers between 10-100
  const numberArr = useRef<number[]>([]);

  const userAddress = {
    Residence: "Canada",
    City: "Vancouver",
    Age: "30",
  } as any;

  const circularProgressBarData = [
    {
      value: 80,
      label: "French",
    },
    {
      value: 60,
      label: "English",
    },
    {
      value: 40,
      label: "Spanish",
    },
  ];

  const programmingLanguageData = [
    {
      value: 80,
      label: "JavaScript",
    },
    {
      value: 60,
      label: "TypeScript",
    },
    {
      value: 40,
      label: "Python",
    },
  ];

  useEffect(() => {
    // Generate random numbers between 10-100 on comcomponentDidMount
    for (let i = 0; i < 5; i++) {
      numberArr.current.push(Math.floor(Math.random() * 90) + 10);
    }
  }, []);

  return (
    <>
      <div
        className={`${props.classes} sidebar flex h-screen flex-col justify-between bg-opacity-5`}
      >
        <div className="flex max-h-[20rem] min-h-[15rem] flex-col items-center justify-center gap-2">
          <Image
            className="cursor-pointer rounded-full"
            src="/assets/images/avatar.jpeg"
            width={100}
            height={100}
            alt={"Profile Image"}
          />
          <div className="text-md font-bold">John Smith</div>
          <div className="grayed-out text-xs font-extralight">
            Senior Full Stack Engineer
          </div>
        </div>
        <div className="flex h-full w-full flex-col justify-start gap-6 overflow-y-scroll p-5 hide-scrollbar">
          <div className="flex  flex-col">
            {Object.keys(userAddress).map((key) => (
              <div key={key} className="flex justify-between py-[0.1rem]">
                <div className="text-sm font-bold">{key}:</div>
                <div className="grayed-out text-sm">{userAddress[key]}</div>
              </div>
            ))}
          </div>
          <HorizontalDivider />
          <div className="flex justify-between">
            {circularProgressBarData.map((item) => (
              <div
                key={item.label}
                className="w flex flex-col items-center justify-between gap-4"
              >
                <CircularProgressBar value={item.value} size={"auto"} />
                <div className="text-xs">{item.label}</div>
              </div>
            ))}
          </div>
          <HorizontalDivider />
          <div className="flex flex-col">
            {programmingLanguageData.map((item) => (
              <HorizontalProgressBar
                key={item.label}
                value={item.value}
                label={item.label}
              />
            ))}
          </div>
          <HorizontalDivider />
          <HorizontalDivider />
        </div>
        <div className="flex justify-evenly">Social Media</div>
      </div>
    </>
  );
};

type RightSidebarProps = {
  classes?: string;
};
