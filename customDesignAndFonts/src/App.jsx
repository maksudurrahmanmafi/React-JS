import { Menu } from "lucide-react";
import "./App.css";
import Nav from "./assets/Components/Navbar/Nav";
import Pricing from "./assets/Components/PricingOptions/Pricing";
import { Suspense } from "react";

const pricingData = async () =>{
  const fetchData = await fetch('pricing.json')
  return fetchData.json();
}
        const pricingpromise = pricingData();

function App() {
  return (
    <>
      <div className=" flex justify-between mx-10 my-2 items-center">
        <span className="flex items-center ">
          <Menu className="md:hidden"></Menu>
          <h3 className="text-4xl ml-2">React</h3>
        </span>
        <Nav></Nav>
        <button>Sing up</button>
      </div>

      {/* Main */}
      <main>
        <Suspense fallback = {<span className="loading loading-spinner text-error"></span>}>
        <Pricing pricingpromise = {pricingpromise}></Pricing>

        </Suspense>
      </main>
    </>
  );
}

export default App;
