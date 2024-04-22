import { Link } from "react-router-dom"
import Menu from "./Menu"

function Contacts() {
  return (
    <div className="p-5">
      <Menu />
      <Link to='/'>{'<- Back'}</Link>
      <h1>Contacts Page</h1>
    </div>
  )
}


export default Contacts
