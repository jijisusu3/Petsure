import PropTypes from 'prop-types'
import classes from './Dropdown.module.css'

const Dropdown = ({ id, value, items, placeholder, handleChange }) => {
  return (
    <div className={classes.dropdownContainer}>
      <label htmlFor={id} className={classes.label}>
        {id}
      </label>
      <select
        id={id}
        value={value}
        className={classes.dropdown}
        onChange={handleChange}
        tabIndex="-1"
      >
        {placeholder && (
          <option value="" className={classes.placeholder} disabled>
            {placeholder}
          </option>
        )}
        {items.map((item, key) => (
          <option key={key} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}

Dropdown.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  items: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Dropdown
