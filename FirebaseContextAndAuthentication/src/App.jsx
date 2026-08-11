import "./App.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./Firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const singInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((err) => {
      console.log(err);
    });
};
function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold underline text-center hover:text-blue-500 hover:cursor-pointer">
          Hello Firebase!
        </h1>

        <button onClick={singInWithGoogle} className="btn btn-primary">
          Sign In with Google
        </button>
      </div>
    </>
  );
}

export default App;
