import PropTypes from 'prop-types';
import Sheet from './Sheet';
import classes from './DropdownMenu.module.css';

function DropdownMenu({ items }) {
  return (
    <div className={`${classes.dropdownMenu} click-blocked`}>
      <Sheet clickBlocked>
        <div className={`${classes.dropdownInner} click-blocked`}>
          {items.map(item => (
            <div
              key={item.text}
              className={`${classes.menuItem} ${item.color ? classes[item.color] : ''}`}
              onClick={item.action}
            >
              {item.text}
            </div>
          ))}
        </div>
      </Sheet>
    </div>
  );
}

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      color: PropTypes.string,
      action: PropTypes.func.isRequired,
    }),
  ),
};

export default DropdownMenu;
