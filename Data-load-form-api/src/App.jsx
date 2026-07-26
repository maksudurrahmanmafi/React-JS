import { Suspense } from "react";
import "./App.css";

import Products from "./Product/Products";



function App(){
  const productApi = fetch('https://fakestoreapi.com/products').then(res => res.json())
  return(
    <Suspense fallback = "Products are comming ...">
       <Products catsApi = {productApi}>

    </Products>
    </Suspense>
   
  )
}

export default App;
