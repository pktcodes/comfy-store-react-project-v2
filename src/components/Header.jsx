import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";

const Header = () => {
  const user = useSelector((state) => state.userState.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex items-center gap-x-6 sm:gap-x-8 ">
            <p className="text-xs capitalize sm:text-sm">
              Hello, {user.username}
            </p>
            <button
              className="btn btn-outline btn-primary btn-xs uppercase"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-x-6 text-xs sm:text-sm">
            <Link to="/login" className="link-hover link">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link-hover link">
              Create an account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
