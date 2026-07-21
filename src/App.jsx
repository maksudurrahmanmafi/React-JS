
import { Suspense } from "react";
import "./App.css";
/* import ImportAndExport from "./importAndExport";
import  Counter  from "./Counter";
import Baller from "./Baller";
import RunCount from "./RunCount"; */
 import Countries from './API/Component/Countries'

function App() {
    /* Load country from api */
    const countries = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())
    return(
      <Suspense fallback = {<p>waiting for loading data ⌛️ </p>}>
        <Countries countries = {countries}> </Countries>
      </Suspense>   
    )
  //Import and Export component
  // return (
  //   <>
  //    {/*  <Student name="Jodu" edu="5 pass" curStatus = "Single"></Student>
  //     <Student></Student> */}

  //     <RunCount></RunCount>
  //     <Baller></Baller>
  //     <Counter></Counter>
  //     <ImportAndExport name= "D"></ImportAndExport>
  //     <ImportAndExport name= "S"></ImportAndExport>
  //     <ImportAndExport name= "T"></ImportAndExport>
  //   </>
  // );
}
//dynamic value
/* function Student(props) {
  return (
    <>
{      <div
        style={{
          border: "2px solid red",
          borderRadius: "20px",
          marginBottom: "15px",
          padding: "13px",
        }}
      >
        <h1>This is the student: {props.name}</h1>
        <p>Education is: {props.edu}</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>}
    </>
  );
} */

export default App;
