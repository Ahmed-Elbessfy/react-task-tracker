import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <footer>
      Copyright &copy; 2021 <br />
      <NavLink to="/about">About</NavLink> | <NavLink to="/contact">Contact</NavLink>
    </footer>
  )
}

export default Footer
