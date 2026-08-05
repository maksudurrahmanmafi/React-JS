import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
const provider = new GoogleAuthProvider();
const Login = () => {
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      // Handle successful sign-in
      console.log(result.user);
    }).catch((error) => {
      // Handle sign-in error
      console.error(error);
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleSignInWithGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;
