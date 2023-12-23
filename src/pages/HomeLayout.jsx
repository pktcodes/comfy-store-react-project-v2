import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="bg-primary p-6 text-center text-4xl font-bold  capitalize text-white">
        navbar
      </div>
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
