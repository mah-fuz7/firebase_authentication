import { signInWithEmailAndPassword } from "firebase/auth";
import MyContainer from "../components/MyContainer";
import MyLink from "../components/MyLink";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Log_in = () => {
  const [showPassword,setShowPassword]=useState(false);
  const handleShowPassword = () =>{
    setShowPassword(!showPassword);
  }

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
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
            Login now!
          </h1>

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
                    type={showPassword?"text":"password"}
                    className="input w-full"
                    placeholder="Password"
                  />
                  
<button type="button" onClick={handleShowPassword} className="absolute ml-[85%] mt-[21%] text-xl z-50">
                   {showPassword?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash> }
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
                  <button className="btn btn-neutral mt-4 w-full">Login</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Log_in;
