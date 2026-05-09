import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import MyContainer from "../components/MyContainer";
import MyLink from "../components/MyLink";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";


const Sign_in = () => {
  // const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // const avatars=["https://i.ibb.co.com/XxZxnWJs/Ricardo-Polo-on-Instagram-The-Weeknd-theweeknd-theweeknd-abelmakkonentesfaye-blindinglight.jpg",
  //   "https://i.ibb.co.com/HD66L5r3/Walter-White-Heisenberg-Breaking-Bad-Stylized-sculpt-Thomas-Le-Marchand-Geosyrup.jpg",
  //   "https://i.ibb.co.com/1tK77VvY/My-Selfie-Character-head-animation-Mark-Gaffud.jpg",
  //   "https://i.ibb.co.com/pjNV2mR9/Gus-Fring-Breaking-Bad-Stylized-sculpt-Thomas-Le-Marchand-Geosyrup.jpg",
  //   "https://i.ibb.co.com/xKbxV056/download-1.jpg",
  //   "https://i.ibb.co.com/tMSJpcqs/Kontorn-Boonyanate.jpg"
  // ]
  // const random = avatars[Math.floor(Math.random() * avatars.length)];

  const handleShowPassword = () => {
    console.log("click it");
    setShowPassword(!showPassword);
  };
  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    // const regEx = /^[a-zA-Z0-9_]{3,16}$/;
    // console.log(regEx.test(password));
    // if (!regEx.test(password)) {
    //   return toast.error(
    //     "password must be 3-16 characters and can only contain letters, numbers, and underscores",
    //   );
    // }
    console.log("form submitt", { email, password, name });

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        // navigate("/");

        // update profile
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: "https://i.ibb.co.com/tMSJpcqs/Kontorn-Boonyanate.jpg",
        });

        toast.success("User created successfully");
      })
      .catch((error) => {
        console.log(error.message);

        toast.error(error.message);
      });
  };
  return (
    <div>
      <MyContainer url="https://i.ibb.co.com/PvycQB3r/Top-free-PC-wallpapers-featuring-aesthetic-cool-and-stylish-designs-Lounge-Aura.jpg">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-5xl text-white font-bold text-center mb-6">
            Sign in now!
          </h1>

          <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignin}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input w-full"
                    placeholder="Name"
                  />

                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input w-full"
                    placeholder="Email"
                  />

                  <label className="label relative">Password</label>

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
                    {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </button>
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <p>
                    already have Account?
                    <span>
                      <MyLink to={"/login"}>
                        <span className="text-orange-500">Log in</span>
                      </MyLink>
                    </span>
                  </p>
                  <button type="submit" className="btn btn-neutral mt-4 w-full">
                    Sign in
                  </button>
                  
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Sign_in;
