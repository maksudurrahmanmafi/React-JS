import { useState } from "react"

export default function Baller(){
    const[correct ,setCorrect] = useState(0)
    const correctBall = () =>{
        if(correct<6)
        setCorrect(c =>c+1)
    }
    const[wide,setWide] = useState(0)
    const wideBall =() =>{
        if(correct!=6)
        setWide(w=>w+1)
    }
    const styleDiv = {
        border:'2px solid white',
        margin:'20px',
        padding :'20px'
    }
    const bntStyle = {
        padding :'20px',
        margin:'20px'


    }
    return(
        <div style={styleDiv}>
       
            {
                correct>=6&&<p>Your over is done</p>
            }
            <button onClick={correctBall} style={bntStyle}>Correct Ball</button>
            <button style={bntStyle}>No Ball</button>
            <button onClick = {wideBall} style={bntStyle}>Wide Ball</button>

            <h2>Ball Count: {correct}</h2>
           <h2>Wide: {wide}</h2>
           <h2>Total : {correct+wide}</h2>
           {/* <h2>No Ball: {noBall}</h2> */}
        </div>
    )
}