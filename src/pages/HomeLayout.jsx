import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="bg-primary p-6 text-center text-4xl font-bold  capitalize text-white">
        navbar
      </div>
      <Outlet />
    </>
  );
};

export default HomeLayout;
