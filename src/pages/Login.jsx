import { Link, useLocation, useNavigate } from "react-router";
import { use } from "react";
import AuthContext from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import toast, { ToastBar } from "react-hot-toast";

export default function Login() {
  const { signInUser, setUser, signInWithGoogle, setLoginEmail } =
    use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const currentUser = result.user;
        // console.log(currentUser);
        setUser(currentUser);
        toast("Signin successful");

        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
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

        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };

  const handleLoginEmail = (e) => {
    e.preventDefault();

    setLoginEmail(e.target.value);
  };

  return (
    <div className="hero min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-none sm:shadow-2xl my-10">
        <form className="card-body" onSubmit={handleSignIn}>
          <div className="mb-5 text-center">
            <h2 className="text-3xl font-bold">
              <br />
              Welcome Back
            </h2>
            <small className="text-gray-500">Login now to get started.</small>
          </div>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              onChange={handleLoginEmail}
              type="email"
              className="input outline-none"
              placeholder="Email"
              name="email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input outline-none"
              placeholder="Password"
              name="password"
              required
            />
            <div>
              <Link to="/auth/forget-password" className="link link-hover">
                Forgot password?
              </Link>
            </div>
            <button className="btn btn-neutral mt-4 mr-4">Login</button>
            <p className="font-semibold text-xs">
              Don't have an account?{" "}
              <Link to={"/auth/signup"} className="text-blue-700 underline">
                Signup Now
              </Link>
            </p>
            <div className="divider text-sm mr-4">OR</div>
            <button
              type="button"
              className="btn bg-white text-black border-gray-400 mr-4"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle size={17} />
              Login with Google
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
