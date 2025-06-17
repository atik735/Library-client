import Lottie from "lottie-react";
import register from "../../assets/register.json";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../firebase/firebase.init";

const Register = () => {
  const { setUser, createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    // console.log(email, password, name);

    setErrorMessage("");
    setSuccess(false);

    if (!passwordPattern.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must be at least 6 characters, include a number, a lowercase and an uppercase letter!",
        timer: 1500,
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        // console.log(result);
        Swal.fire({
          title: "User create Successfull!",
          icon: "success",
          draggable: true,
          timer: 1000,
        });
        navigate("/");
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {
            setSuccess(true);
            setUser({ ...auth.currentUser });
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      })
      .catch((error) => {
        // console.log(error);
        setErrorMessage(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        // console.log(result.user);

        navigate(location?.state || "/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
<div className="hero bg-base-200 min-h-screen py-6 px-2">
  <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl mx-auto">
        <div className="text-center lg:text-left">
          <Lottie
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            animationData={register}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
          <div className="card-body">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleSignUp} className="space-y-5">
              <div className="space-y-2">
                <div>
                  <label className="block mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Name"
                    className="w-full px-2 sm:px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Photo URL</label>
                  <input
                    type="text"
                    name="photo"
                    id="photo"
                    required
                    placeholder="Photo URL"
                    className="w-full px-2 sm:px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="leroy@jenkins.com"
                    className="w-full px-2 sm:px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="*****"
                      required
                      className="w-full px-2 sm:px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      type="button"
                      className="absolute top-2 right-4 bg-gray-200 p-0.5 px-1"
                    >
                      {" "}
                      {showPassword ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}{" "}
                    </button>
                  </div>
                </div>
              </div>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              {success && <p className="text-green-500">Register Succesfull</p>}
              <div className="space-y-2">
                <div>
                  <button
                    type="submit"
                    className="w-full cursor-pointer px-8 py-3 font-semibold rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    Register
                  </button>
                  <h3 className="text-center font-bold text-lg py-2">Or</h3>
                  {/* Google */}
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn w-full px-8 py-3 cursor-pointer font-semibold rounded-md bg-white text-black border-[#e5e5e5]"
                  >
                    <svg
                      aria-label="Google logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                          fill="#fbbc02"
                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    Login with Google
                  </button>
                </div>
                <p className="px-6 text-sm text-center text-gray-600">
                  Already have an account?
                  <Link to="/signIn" className="underline text-violet-600">
                    SignIn
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
