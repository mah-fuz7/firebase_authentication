import {
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import MyContainer from "../components/MyContainer";
import MyLink from "../components/MyLink";
import auth from "../firebase/firebase.config";

import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { VscGithubAlt } from "react-icons/vsc";

import { useState } from "react";

const Log_in = () => {
  // USER STATE
  const [profile, setProfile] = useState(null);

  // EMAIL STATE FOR FORGOT PASSWORD
  const [email, setEmail] = useState("");

  // SHOW PASSWORD STATE
  const [showPassword, setShowPassword] = useState(false);

  // GOOGLE PROVIDER
  const provider = new GoogleAuthProvider();

  // GITHUB PROVIDER
  const Gitprovider = new GithubAuthProvider();

  // SHOW / HIDE PASSWORD
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // LOGIN
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setProfile(result.user);

        console.log(result.user);

        toast.success("Login Successfully");
      })
      .catch((error) => {
        console.log(error.message);

        toast.error(error.message);
      });
  };

  // GOOGLE LOGIN
  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setProfile(result.user);

        console.log(result.user.photoURL);

        toast.success("Google Signin Successfully");
      })
      .catch((error) => {
        console.log(error.message);

        toast.error(error.message);
      });
  };

  // GITHUB LOGIN
  const handleSigninWithGithub = () => {
    signInWithPopup(auth, Gitprovider)
      .then((result) => {
        setProfile(result.user);

        console.log(result.user);

        toast.success("Github Signin Successfully");
      })
      .catch((error) => {
        console.log(error.message);

        toast.error(error.message);
      });
  };

  // SIGN OUT
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        setProfile(null);

        toast.success("SignOut Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // FORGOT PASSWORD
  const handlePassword = () => {
    if (!email) {
      toast.error("Please enter your email first");

      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent");
      })
      .catch((error) => {
        console.log(error.message);

        toast.error(error.message);
      });
  };

  return (
    <div>
      <MyContainer url="https://i.ibb.co.com/wFBxNDXV/download-3.jpg">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-5xl text-white font-bold text-center mb-6">
            {profile ? "My Profile" : "Log-in now!"}
          </h1>

          {/* PROFILE CARD */}
          {profile ? (
            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-5 text-center">
              <img
                src={
                  profile?.photoURL ||
                  "https://i.ibb.co/4pDNDk1/avatar.png"
                }
                alt={profile.displayName}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-gray-200"
              />

              <h2 className="text-xl font-semibold mt-4">
                {profile.displayName || "No Name"}
              </h2>

              <p className="text-gray-500">{profile.email}</p>

              <button
                className="btn bg-blue-500 text-white mt-4"
                onClick={handleSignout}
              >
                SignOut
              </button>
            </div>
          ) : (
            // LOGIN FORM
            <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <fieldset className="fieldset">
                    {/* EMAIL */}
                    <label className="label">Email</label>

                    <input
                      name="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="input w-full"
                      placeholder="Email"
                      required
                    />

                    {/* PASSWORD */}
                    <label className="label">Password</label>

                    <div className="relative">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="input w-full"
                        placeholder="Password"
                        required
                      />

                      <button
                        type="button"
                        onClick={handleShowPassword}
                        className="absolute right-4 top-3 text-xl"
                      >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </button>
                    </div>

                    {/* FORGOT PASSWORD */}
                    <div className="mt-2">
                      <button
                        type="button"
                        onClick={handlePassword}
                        className="link link-hover"
                      >
                        Forgot password?
                      </button>
                    </div>

                    {/* SIGN UP */}
                    <p>
                      Don't have Account?
                      <span>
                        {" "}
                        <MyLink to={"/signin"}>
                          <span className="text-orange-500">
                            Sign in
                          </span>
                        </MyLink>
                      </span>
                    </p>

                    {/* LOGIN BUTTON */}
                    <button className="btn btn-neutral mt-4 w-full">
                      Login
                    </button>

                    {/* GOOGLE BUTTON */}
                    <button
                      onClick={handleGoogleSignin}
                      type="button"
                      className="btn btn-neutral mt-4 w-full"
                    >
                      <FcGoogle />
                      Sign in with Google
                    </button>

                    {/* GITHUB BUTTON */}
                    <button
                      onClick={handleSigninWithGithub}
                      type="button"
                      className="btn btn-neutral mt-4 w-full"
                    >
                      <VscGithubAlt />
                      Sign in with Github
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