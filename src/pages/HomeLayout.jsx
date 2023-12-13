import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <div className="bg-primary text-white p-6 font-bold text-center  text-4xl capitalize">
        navbar
      </div>
      <Outlet />
    </>
  );
};

export default HomeLayout;
