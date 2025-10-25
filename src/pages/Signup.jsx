import { Link, useNavigate } from "react-router";
import { use, useState } from "react";
import AuthContext from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaKey, FaRegEye } from "react-icons/fa6";
import toast from "react-hot-toast";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { createUser, updateUser, user, setUser, signInWithGoogle } =
    use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const currentUser = result.user;
        // console.log(currentUser);
        toast("Signup successful");

        updateUser({ displayName: name, photoURL: image })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: image });
            navigate("/");
          })
          .catch((error) => {
            toast(error.message);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;

        toast(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const currentUser = result.user;
        // console.log(currentUser);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form
          className="card-body placeholder:text-gray-500"
          onSubmit={handleRegister}
        >
          <div className="mb-5">
            <h2 className="text-3xl font-bold">
              Holla, <br />
              Create Your Account
            </h2>
            <small className="text-gray-500">
              Hey, Signup now to get started.
            </small>
          </div>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input placeholder:text-gray-500"
              name="name"
              placeholder="name"
              required
            />

            {/* Image */}
            <label className="label">Image URL</label>
            <input
              type="text"
              className="input placeholder:text-gray-500"
              name="image"
              required
              placeholder="ImageURL"
            />

            {/* Email  */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input placeholder:text-gray-500"
              name="email"
              placeholder="Email"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                className="input validator outline-none  valid:border-gray-300"
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Password"
                minlength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
              />
              <p className="validator-hint hidden">
                Must be more than 6 characters, including
                <br />
                At least one number <br />
                At least one lowercase letter <br />
                At least one uppercase letter
              </p>
              <button
                type="button"
                className="absolute right-7 top-3 cursor-pointer"
                onClick={handleShowPassword}
              >
                {!showPassword ? (
                  <FaRegEye size={18} />
                ) : (
                  <FaEyeSlash size={20} />
                )}
              </button>
            </div>

            <button className="btn btn-neutral mt-4 mr-4">Signup</button>
            <p className="font-semibold text-sm mt-3 text-center">
              Already have an account?{" "}
              <Link to={"/auth/login"} className="text-blue-700 underline">
                Login Now
              </Link>
            </p>
          </fieldset>
          <div className="divider mr-4">OR</div>
          <button
            className="btn mr-4 bg-white border-gray-400 text-black"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle size={17} />
            Signup with Google
          </button>
        </form>
      </div>
    </div>
  );
}
