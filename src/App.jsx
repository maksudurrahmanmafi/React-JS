import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ImportAndExport from "./importAndExport";
import  Counter  from "./Counter";

function App() {


  return (
    <>
     {/*  <Student name="Jodu" edu="5 pass" curStatus = "Single"></Student>
      <Student></Student> */}
      <Counter></Counter>
      <ImportAndExport name= "D"></ImportAndExport>
      <ImportAndExport name= "S"></ImportAndExport>
      <ImportAndExport name= "T"></ImportAndExport>
    </>
  );
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
