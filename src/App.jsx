import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Student></Student>
    <Student></Student>
    </>
  )
}

function Student(){
  return(

  <div>
    <h1>This is the sutdent</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, saepe.</p>
  </div>
  )
}

export default App
