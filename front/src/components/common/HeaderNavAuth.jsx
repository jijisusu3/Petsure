import PropTypes from 'prop-types'
import Logo from './Logo'
import classes from './HeaderNavAuth.module.css'

function HeaderNavAuth({ fixed = false, color }) {
  return (
    <nav className={fixed ? classes.HeaderNav_fixed : classes.HeaderNav_nav}>
      <div className={classes.HeaderNav_link_btns}>
        <Logo color={color} withText />
      </div>
    </nav>
  )
}

HeaderNavAuth.propTypes = {
  fixed: PropTypes.bool,
  color: PropTypes.string.isRequired,
}

export default HeaderNavAuth
