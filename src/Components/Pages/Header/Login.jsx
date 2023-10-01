import { Link, Navigate } from "react-router-dom";
import useAuth from "../../../🟢AuthProvider/AuthContext";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import "./login.css";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn , resetPassword} = useAuth();
  // state to pop up sigin in tool like google github
  const [isclicked, setIsClicked] = useState(false);
  const email = useRef()

  // handle form here
  const handleForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("signed in");
        e.target.email.value = "";
        e.target.password.value = "";
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };


  // Handle sign in
  const handleSignIn = (media) => {
    media()
      .then(() => {
        toast.success("you have signed In");
      })
      .catch((err) => {
            toast.error(err);
            <Navigate to='/'></Navigate>
      });
  };

  // forgot password? reset here
  const handleResetPassword = () => {
      const userEmail = email.current.value
      
      resetPassword(userEmail)
      .then(()=>{toast.success('Please check your email')})
      .catch(err => toast.error(err))
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-3">Login</h1>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-[100%]">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleForm}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    ref={email}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a
                      onClick={handleResetPassword}
                      href="#"
                      className="label-text-alt text-blue-500 text-[16px] link link-hover">
                      Forgot password?
                    </a>
                    <Link to="/register">Resister</Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <section className="text-center pt-2">
                <button
                  onClick={() => setIsClicked(!isclicked)}
                  className="btn btn-outline w-full z-10 relative">
                  Sign in With
                </button>
                <div
                  className={`${
                    isclicked ? "flex" : "hidden"
                  } items-center justify-center pt-5`}>
                  <button onClick={() => handleSignIn(googleSignIn)}>
                    <img
                      className="w-7"
                      src="https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=204&h=208&c=7&r=0&o=5&pid=1.7"
                    />
                  </button>
                  <button
                    onClick={() => handleSignIn(githubSignIn)}
                    className="ml-4">
                    <img
                      className="w-11"
                      src="https://th.bing.com/th/id/OIP.3GspeQLCpVpgrx4hEivApwAAAA?pid=ImgDet&w=181&h=181&c=7"
                    />
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
