import PropTypes from 'prop-types'

function Button({ text, color, toggleShowForm }) {
  const setShowForm = () => toggleShowForm()
  return (
    <button style={ { backgroundColor: color } } className='btn' onClick={ setShowForm }>
      { text }
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.protoType = {
  text: PropTypes.string.isRequired
}

export default Button
