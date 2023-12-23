import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {/* USER */}
        {/* LINK */}
        <div className="flex items-center gap-x-6 text-xs sm:text-sm">
          <Link to="/login" className="link-hover link">
            Sign in / Guest
          </Link>
          <Link to="/register" className="link-hover link">
            Create an account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
