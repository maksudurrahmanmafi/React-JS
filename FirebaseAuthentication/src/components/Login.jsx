import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
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
  return (
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
  );
};

export default Login;
