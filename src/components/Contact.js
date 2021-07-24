import { NavLink } from 'react-router-dom'
const Contact = () => {
  return (
    <div>
      Contact Page
      <br />
      <NavLink to="/" exact >Main Page</NavLink> | <NavLink to="/about">About</NavLink>

    </div>
  )
}

export default Contact
