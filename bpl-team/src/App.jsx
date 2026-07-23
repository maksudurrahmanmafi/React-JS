import { Suspense, useState } from "react";
import "./App.css";
import Available from "./Components/Available/Available";
import Navbar from "./Components/Navbar/Navbar";
import Selected from "./Components/Selected/Selected";

const fetchUsers = async () => {
  const res = await fetch("/player.json");
  return res.json();
};
function App() {
  const playerPromise = fetchUsers();
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        <h2>Available Players</h2>
        <div className="flex">
          <button
            onClick={() => setToggle(true)}
            className={`btn  border-r-0 ${toggle ? "btn-success" : ""}`}
          >
            Available
          </button>

          <button
            onClick={() => setToggle(false)}
            className={`btn rounded-l-none border-l-0 ${
              !toggle ? "btn-success" : ""
            }`}
          >
            Selected
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <span className="loading loading-spinner loading-lg text-error"></span>
            </div>
          }
        >
          <Available playerPromise={playerPromise} />
        </Suspense>
      ) : (
        <Selected ></Selected>
      )}
    </>
  );
}

export default App;
