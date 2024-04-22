import { Link } from "react-router-dom"


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
      <Link to='/'>{'<- Back'}</Link>
      <br></br>
      <Link to='/contacts'>Contacts</Link>
      <h1>About Page</h1>
      <Cohort />
    </div>
  )
}


export default About
