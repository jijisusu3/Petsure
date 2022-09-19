import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import classes from './StepIndicator.module.css'

function StepIndicator({ path, step, max }) {
  const stepRange = new Array(max).fill(0).map((_, idx) => idx + 1)

  return (
    <div className={classes.stepIndicator}>
      <div className={classes.backgroundContainer}>
        {stepRange.slice(0, max - 1).map(s => (
          <div
            key={s}
            className={`${classes.background} ${
              s < step ? classes.passed : ''
            }`}
          ></div>
        ))}
      </div>
      <div className={classes.circleContainer}>
        {stepRange.map(s => (
          <NavLink
            key={s}
            to={`${path}?step=${s}`}
            className={`${classes.stepCircle} ${
              s <= step ? classes.passed : ''
            }`}
          >
            {s}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

StepIndicator.propTypes = {
  path: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
}

export default StepIndicator
