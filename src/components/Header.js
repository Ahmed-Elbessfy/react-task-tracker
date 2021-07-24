import { PropTypes } from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'


function Header({ toggleShowForm, showForm }) {
  const location = useLocation().pathname
  console.log(location)
  return (
    <header>
      <h1>Task Tracker</h1>
      { location === "/" && <Button text={ showForm ? "close" : "add" } color={ showForm ? "red" : 'green' } toggleShowForm={ toggleShowForm } /> }
    </header>
  )
}

Header.propTypes = {
  toggleShowForm: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired
}

export default Header

