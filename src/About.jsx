import { Link } from "react-router-dom"
import Menu from "./Menu"


const Cohort = () => {
  return (
    <ul>
      <li>Owen</li>
      <li>Brandon</li>
      <li>Jay</li>
      <li>Caitlyn</li>
      <li>Ryan</li>
      <li>Maddie</li>
      <li>McDonnell</li>
      <li>Duke</li>
      <li>Neal</li>
      <li>Nathan</li>
      <li>Cody</li>
      <li>Jacinta</li>
      <li>Henry</li>
    </ul>
  )
}

function About() {
  return (
    <div className="p-5">
      <Menu />
      <Link to='/'>{'<- Back'}</Link>
      <br></br>
      <h1>About Page</h1>
      <Cohort />
    </div>
  )
}


export default About
