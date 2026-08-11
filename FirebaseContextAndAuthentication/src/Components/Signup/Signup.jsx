import { Link } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../Firebase/firebase.config.js";
const SignupWithEmailAndPasswordAuthentication = (event) => {
  event.preventDefault();
  console.log("SignupWithEmailAndPasswordAuthentication called");
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error);
    });
};

const Signup = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={SignupWithEmailAndPasswordAuthentication}>
              <fieldset className="fieldset">
                <label className="label">Email</label>

                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />

                <label className="label">Password</label>

                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <button className="btn btn-neutral mt-4">Sign Up</button>
              </fieldset>
            </form>

            <p>
              Already have an account?{" "}
              <Link to="/login" className="link link-hover text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
