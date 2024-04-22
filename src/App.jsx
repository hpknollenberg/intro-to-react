import { Link } from "react-router-dom"
import { useState } from "react"

const Title = () => {
  return (
    <h1>
      Hello World!
    </h1>
  )
}


const Counter = (count) => {
  count++
  return count
}

const CountDisplay = ({count}) => {
  return (
    <p>Count: {count}</p>
  )
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <div 
      className="bg-primary h-100 p-5"
      style={{ color: 'white' }}
    >
      <Link className="text-light" to='/about'>About</Link>
      <br></br>
      <Link className="text-light" to='/contacts'>Contacts</Link>
      <Title />
      <div>
        <button 
        onClick = { () => setCount(Counter(count))}>
        COUNTER
        </button>
        <CountDisplay count = {count} />
      </div>
      
    </div>
  )
}


export default App
