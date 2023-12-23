import { BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="bg-base-200">
      <div className="align-element navbar">
        <div className="navbar-start">
          {/* LOGO */}
          <NavLink
            to="/"
            className="btn btn-primary hidden items-center bg-primary text-3xl text-white lg:flex"
          >
            C
          </NavLink>
          {/* DROPDOWN TOGGLE */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-200 p-2 shadow">
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME SETUP */}
          {/* CART */}
          <NavLink to="/cart" className="btn btn-circle btn-ghost btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge indicator-item badge-primary badge-sm">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
