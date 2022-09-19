import PropTypes from 'prop-types'
import classes from './Checkbox.module.css'

export default function Checkbox({
  id,
  children,
  checked,
  handleChange,
  locked,
}) {
  const handleClick = e => {
    if (locked) e.preventDefault()
  }

  return (
    <label
      htmlFor={id}
      className={`${classes.checkbox} ${locked ? classes.locked : ''}`}
      onClick={handleClick}
    >
      <input
        type="checkbox"
        id={id}
        className={classes.invisibleBox}
        checked={checked}
        onChange={handleChange}
      />
      <div className={classes.visibleBox}>
        <div
          className={`${classes.backgroundBox} ${locked ? classes.locked : ''}`}
        />
        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          xmlns="http://www.w3.org/2000/svg"
          className={`${classes.checkIcon} ${checked ? classes.checked : ''}`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 11.4286L2.33333 6.85714L0 9.14286L7 16L21 2.28571L18.6667 0L7 11.4286Z"
          />
        </svg>
      </div>
      {children}
    </label>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  locked: PropTypes.bool,
}
