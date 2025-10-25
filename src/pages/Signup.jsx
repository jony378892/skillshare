import { Link, useNavigate } from "react-router";
import { use, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaRegEye } from "react-icons/fa6";
import toast from "react-hot-toast";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { createUser, updateUser, user, setUser, signInWithGoogle } =
    use(AuthContext);

  // ✅ Set the page title
  useEffect(() => {
    document.title = "Sign Up | SkillSwap";
  }, []);

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
        toast.success("Signup successful");

        updateUser({ displayName: name, photoURL: image })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: image });
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
            setUser(user);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-none sm:shadow-2xl my-10">
        <form
          className="card-body placeholder:text-gray-500"
          onSubmit={handleRegister}
        >
          <div className="mb-5 text-center">
            <h2 className="text-3xl font-bold">Create Your Account</h2>
            <small className="text-gray-500">
              Join SkillSwap and start sharing your skills today.
            </small>
          </div>

          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input input-bordered outline-none"
              name="name"
              placeholder="Your full name"
              required
            />

            {/* Image */}
            <label className="label">Image URL</label>
            <input
              type="text"
              className="input input-bordered outline-none"
              name="image"
              placeholder="Profile image URL"
              required
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input input-bordered outline-none"
              name="email"
              placeholder="Email address"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                className="input input-bordered outline-none"
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must include number, lowercase, uppercase, and be at least 6 characters."
              />
              <button
                type="button"
                className="absolute right-8 top-3 cursor-pointer z-10"
                onClick={handleShowPassword}
              >
                {showPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaRegEye size={18} />
                )}
              </button>
            </div>

            <button className="btn btn-neutral mt-5 w-full">Signup</button>
          </fieldset>

          <p className="font-semibold text-sm mt-4 text-center">
            Already have an account?{" "}
            <Link to={"/auth/login"} className="text-blue-700 underline">
              Login Now
            </Link>
          </p>

          <div className="divider">OR</div>
          <button
            type="button"
            className="btn bg-white border-gray-400 text-black w-full"
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
