import { GoogleAuthProvider, GithubAuthProvider , createUserWithEmailAndPassword} from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
// import { auth } from "./Firebase/firebase.config";
import { auth } from "../Firebase/firebase.config";
// import { GithubAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
// const githubProvider = new GithubAuthProvider();
const Login = () => {
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Handle successful sign-in
        console.log(result.user);
      })
      .catch((error) => {
        // Handle sign-in error
        console.error(error);
      });
  };

  const loginWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // Handle successful sign-in
        console.log(result.user);
      })
      .catch((error) => {
        // Handle sign-in error
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth,email,password).then( res =>{
      console.log(res.user)
    }).catch(err =>{
      console.log(err.message)
    })
  };
  return (
    <>
      <div>
        <h1>Login</h1>
        <button
          style={{
            backgroundColor: "#4285F4",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginRight: "10px",
            fontSize: "16px",
          }}
          onClick={handleSignInWithGoogle}
        >
          Login with Google
        </button>

        <button
          style={{
            backgroundColor: "#2ccf29",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={loginWithGithub}
        >
          Login with GitHub
        </button>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
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
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
