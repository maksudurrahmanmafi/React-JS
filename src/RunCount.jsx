import { useState } from "react";

export default function RunCount() {
    const btnStyle ={
        margin:'20px',
        padding:'20px'
    }
    const[runs,setRuns] = useState(0)
    const Runs = () =>{
        setRuns(runs+1)
    }
    const RemoveRuns = () =>{
        setRuns(runs-1)
    }
    const ResetRuns = () =>{
        setRuns(0)
    }
  return (
    <div>
      <h1>Run: {runs} </h1>

      <button onClick={Runs} style={btnStyle}>+1</button>
      <button onClick = {RemoveRuns}style={btnStyle}>-1</button>
      <button onClick={ResetRuns} style={btnStyle}>reset</button>
    </div>
  );
}
