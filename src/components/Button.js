import PropTypes from 'prop-types'

export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`btn${props.bgcolor && ' btn-' + props.bgcolor}${
        props.float ? ' float-' + props.float : ''
      }`}
      type={props.submit ? 'submit' : 'button'}
    >
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  bgcolor: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
