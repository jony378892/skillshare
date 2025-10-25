import { use } from "react";
import { Link } from "react-router";
import AuthContext from "../context/AuthContext";
import { FaRegCircleUser } from "react-icons/fa6";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, logOutUser } = use(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast("Logout successfully");
      })
      .catch((error) => {
        toast(error.message);
        console.log(error);
      });
  };

  return (
    <header className="shadow-sm py-1">
      <div className="flex items-center py-2 bg-base-100  mx-auto container">
        {/* Logo */}
        <Link to="/" className="navbar-start text-2xl  font-bold">
          SkillShare
        </Link>

        {/* Middle menu */}
        <nav className="navbar-center hidden sm:inline-flex">
          <ul className="flex gap-5">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <div className="navbar-end flex sm:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-36 mt-2 p-2 shadow -ml-24 text-base font-semibold border border-gray-100 space-y-2"
            >
              <li>
                <Link className="text-sm" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-sm" to="/profile">
                  Profile
                </Link>
              </li>
              {user ? (
                <>
                  <Link
                    to={"/profile"}
                    className="tooltip tooltip-bottom"
                    data-tip={user.displayName}
                  >
                    <FaRegCircleUser size={26} />
                  </Link>
                  <Link
                    className="btn btn-outline btn-error text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link className="btn btn-neutral btn-sm" to="/auth/login">
                    Login
                  </Link>
                  <Link className="btn btn-neutral btn-sm" to="/auth/signup">
                    Signup
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="navbar-end hidden sm:flex items-center gap-3 z-10">
          {user ? (
            <>
              <Link
                to={"/profile"}
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <FaRegCircleUser size={26} />
              </Link>
              <Link
                className="btn btn-outline btn-error hover:text-"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link className="btn btn-neutral" to="/auth/login">
                Login
              </Link>
              <Link className="btn btn-neutral" to="/auth/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
