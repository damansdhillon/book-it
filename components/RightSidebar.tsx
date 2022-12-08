const RightSidebar = (props: RightSidebarProps) => {
  const { className } = props;

  return (
    <>
      <div className="">Right sidebar</div>
    </>
  );
};

type RightSidebarProps = {
  className?: string;
};

export default RightSidebar;
