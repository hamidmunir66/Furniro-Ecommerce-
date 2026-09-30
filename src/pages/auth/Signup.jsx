import { useForm, useWatch } from "react-hook-form";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

const Signup = () => {
  const [user, setuser] = useLocalStorage("users", []);

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
    setuser([...user, data]);
    console.log(data);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <>
      <div className="min-h-screen bg-[#FFF3E3] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <Link to="/">
            <FaHome className="text-2xl" />
          </Link>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#B98E2F]">Welcome</h1>
            <p className="text-gray-500 mt-2">Signup to your Furniro account</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#B98E2F] focus:ring-1 focus:ring-[#B98E2F]"
                {...register("name", {
                  required: "name is required",
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {" "}
                  {errors.name.message}
                </p>
              )}
            </div>
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
              Sign Up
            </button>
          </form>
          <div className="text-center mt-6 text-gray-600">
            <span>Already Have Account? </span>

            <Link
              to="/login"
              className="text-[#B98E2F] font-semibold hover:underline"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
