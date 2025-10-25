import { Link, Navigate } from "react-router";
import { FaEnvelope } from "react-icons/fa6";
import { use, useState } from "react";
import AuthContext from "../context/AuthContext";
import toast from "react-hot-toast";

export default function ForgetPassword() {
  const [loading, setLoading] = useState(false);
  const { loginEmail, setLoginEmail, resetPassword } = use(AuthContext);

  const handleResetPassword = (e) => {
    e.preventDefault();
    setLoading(true);

    resetPassword(loginEmail)
      .then(() => {
        toast("Reset email sent successfully");

        setLoading(false);

        setTimeout(() => {
          window.location.href = "https://mail.google.com/mail/u/0/#inbox";
        }, 1500);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Forgot Password?
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email and we’ll send you a link to reset your password.
        </p>

        <form className="space-y-5" onSubmit={handleResetPassword}>
          <label className="input validator outline-none w-full">
            <FaEnvelope size={18} className="text-gray-600" />

            <input
              className="placeholder:text-gray-400"
              type="email"
              value={loginEmail}
              onChange={handleLoginEmail}
              placeholder="mail@site.com"
              required
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <button type="submit" className="btn btn-primary min-w-full ">
            {loading ? (
              <>
                {" "}
                <span className="loading loading-spinner loading-md"></span>{" "}
                Sending Reset Email
              </>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>

        <div className="mt-3 text-sm text-gray-500">
          <p>
            Remember your password?{" "}
            <Link
              to="/auth/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
