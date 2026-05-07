import { signInWithEmailAndPassword } from "firebase/auth";
import MyContainer from "../components/MyContainer";
import MyLink from "../components/MyLink";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Log_in = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        console.log(auth.currentUser);
        // navigate("/");
        toast.success("Login Successfully");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
    console.log("log in", { email, password });
  };
  return (
    <div>
      <MyContainer url="https://i.ibb.co.com/wFBxNDXV/download-3.jpg">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-5xl text-white font-bold text-center mb-6">
            {auth.currentUser ? "My Profile" : "Log-in now!"}
          </h1>
          {/*  */}
          {auth.currentUser ? (
            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-5 text-center">
              <img
                src={auth.currentUser.photoURL}
                alt={auth.currentUser.displayName}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-gray-200"
              />

              <h2 className="text-xl font-semibold mt-4">
                {auth.currentUser.displayName}
              </h2>

              <p className="text-gray-500">{auth.currentUser.email}</p>
            </div>
          ) : (
            <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="input w-full"
                      placeholder="Email"
                    />

                    <label className="label">Password</label>
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="input w-full"
                      placeholder="Password"
                    />

                    <button
                      type="button"
                      onClick={handleShowPassword}
                      className="absolute ml-[85%] mt-[21%] text-xl z-50"
                    >
                      {showPassword ? (
                        <FaEye></FaEye>
                      ) : (
                        <FaEyeSlash></FaEyeSlash>
                      )}
                    </button>
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <p>
                      Don't have Account?
                      <span>
                        {" "}
                        <MyLink to={"/signin"}>
                          <span className="text-orange-500">sign in</span>
                        </MyLink>
                      </span>
                    </p>
                    <button className="btn btn-neutral mt-4 w-full">
                      Login
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default Log_in;
