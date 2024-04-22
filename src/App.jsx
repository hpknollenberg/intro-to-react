import { Link } from "react-router-dom"
import { useState } from "react"
import Menu from "./Menu"
import TooMuchClicking from "./TooMuchClicking"



const Counter = ({count}) => {
  count++
  return count
}

const CountDisplay = ({count}) => {
  return (
    <p className = "col-1">Count: {count}</p>
  )
}

const Color = (count) => {
  if (count % 3 === 0) {
    return "green"
  } 
  if (count % 2 === 0) {
    return "red"
  }
}



function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("blue")

  if (count > 10) {
    return (
      <TooMuchClicking count = {count} />
    )
  } else {
    return (
      <div 
        className="h-100 p-5"
        style={{ color: 'black' }}
      >
        <Menu />
        <div className="d-flex justify-content-start vw-100 row">
          <button 
            className = "col-1"
            onClick = { () => {
              setCount(Counter({count}))
              setColor(Color(count + 1))
            }}
            style = {{ backgroundColor: color}}
          >
          COUNTER
          </button>
          <CountDisplay count = {count} />
          
        </div>
        
      </div>
    )
  }
}

export default App
