import { Suspense } from "react";
import "./App.css";
import Ligts from "./Components/Ligts/Ligts";

function App() {
  const jsonData = fetch('/light.json').then(res => res.json())
  return (
    <div>
    
      {/* <Ligts></Ligts> */}
      <Suspense fallback = " Data are loading ... ">
        <Ligts jsonData = {jsonData}></Ligts>
      </Suspense>
    </div>
  );
}

export default App;
