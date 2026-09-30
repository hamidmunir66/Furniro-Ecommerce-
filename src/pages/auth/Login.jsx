import { useForm, useWatch } from "react-hook-form";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useState } from "react";

const Login = () => {
  const [users] = useLocalStorage("users", []);
  const [,setcurrentuser] = useLocalStorage("currentUser", null);
  const [message, setmessage] = useState("");
  const [success, setsuccess] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const password = useWatch({
    control,
    name: "password",
  });
  const onSubmit = (data) => {
    const user = users.find(
      (item) => item.email === data.email && item.password === data.password,
    );
    if (user) {
      setsuccess(true);
      setmessage("Login Succesfull");
      setcurrentuser(user);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setsuccess(false);
      setmessage("Invalid email or password");
    }
    console.log(data);
  };
  return (
    <>
      <div className="min-h-screen bg-[#FFF3E3] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <Link to="/">
            <FaHome className="text-2xl" />
          </Link>
          {message && (
            <p
              className={`text-center text-sm font-medium ${
                success ? "text-green-600" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#B98E2F]">Welcome Back</h1>

            <p className="text-gray-500 mt-2">Login to your Furniro account</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#B98E2F] focus:ring-1 focus:ring-[#B98E2F]"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {" "}
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#B98E2F] focus:ring-1 focus:ring-[#B98E2F]"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#B98E2F] focus:ring-1 focus:ring-[#B98E2F]"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />

              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#B98E2F] text-white py-3 rounded-lg font-semibold hover:bg-[#a17b27] transition cursor-pointer"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-6 text-gray-600">
            <span>Not registered yet? </span>

            <Link
              to="/signup"
              className="text-[#B98E2F] font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
