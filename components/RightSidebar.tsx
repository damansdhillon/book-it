import Image from "next/image";

export const RightSidebar = (props: RightSidebarProps) => {
  return (
    <>
      <div
        className={`${props.classes} sidebar flex h-screen flex-col justify-between`}
      >
        <div className="flex h-[30rem] max-h-[20rem] min-h-[15rem] flex-col items-center justify-center gap-2 bg-gray-700">
          <Image
            className="rounded-full"
            src="/assets/images/avatar.jpeg"
            width={100}
            height={100}
            alt={"Profile Image"}
          />
          <div className="text-md font-bold">John Smith</div>
          <div className="text-xs font-extralight">
            Senior Full Stack Engineer
          </div>
        </div>
        <div className="flex-grow overflow-y-scroll hide-scrollbar"></div>
        <div className="flex justify-evenly">Social Media</div>
      </div>
    </>
  );
};

type RightSidebarProps = {
  classes?: string;
};
