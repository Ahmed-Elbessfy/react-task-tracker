import { NavLink } from 'react-router-dom'
const About = () => {
  return (
    <div>
      About Page
      <br />
      <NavLink to="/" exact>Main</NavLink> | <NavLink to="/contact">Contact</NavLink>

    </div>
  )
}

export default About
