
import { Link } from "react-router";

const SignIn = (event) => {
    event.preventDefault();
    console.log("SignIn called");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email, password);
}
const Login = () => {
    return (
       <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign In now!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={SignIn}>
                <label className="label">Name</label>

                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Name"
                />
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

                <button className="btn btn-neutral mt-4">Sign In</button>
              </fieldset>
            </form>

            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="link link-hover text-blue-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;