import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classes from './Dropdown.module.css';

//const Dropdown = ({ id, value, items, placeholder, handleChange }) => {
function RenewDropdown({
  id,
  value,
  items,
  placeholder = '',
  onValid,
  onData,
  required, //이건 필수요소라서 빼지말기
  noLabel,
  handleChange,
}) {
  const dropdownRef = useRef();
  const [errorComponent, setErrorComponent] = useState(null);

  let colorInputClass = '';
  let colorLabelClass = '';

  switch (errorComponent) {
    case null:
      colorInputClass = '';
      colorLabelClass = '';
      break;
    case '':
      colorInputClass = classes.validDropdown;
      colorLabelClass = classes.validLabel;
      break;
    default:
      colorInputClass = classes.invalidDropdown;
      colorLabelClass = classes.invalidLabel;
  }

  let checkValid;
  function dropdownValidHandler() {
    clearTimeout(checkValid);
    checkValid = setTimeout(() => {
      let errorComponent = '';
      for (let func in onValid) {
        if (!onValid[func].func(dropdownRef.current.value)) {
          errorComponent = <ErrorComponent text={onValid[func].message} />;
          break;
        }
      }
      console.log('유효성 체크');
      setErrorComponent(errorComponent);
      onData({
        value: dropdownRef.current.value,
        valid: errorComponent === '' ? true : false,
      });
    }, 500);
  }

  return (
    <div className={classes.dropdownContainer}>
      {noLabel || (
        <label className={`${classes.dropdownLabel} ${colorLabelClass}`} htmlFor={id}>
          {id}
          {required && <span className={classes.requiredMark}>*</span>}
        </label>
      )}
      <select
        //name={id} //input은 이러네용?
        id={id}
        //type={type} input은 이러네용?
        value={value}
        className={`${classes.dropdown} ${colorInputClass}`}
        // onKeyUp={dropdownValidHandler}
        ref={dropdownRef}
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
      {/* 에러가 렌더링 되는 창
      {errorComponent && errorComponent} */}
    </div>
  );
}

RenewDropdown.propTypes = {
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  items: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  onValid: PropTypes.object,
  onData: PropTypes.func,
  required: PropTypes.bool,
  noLabel: PropTypes.bool,
};

export default RenewDropdown;

function ErrorComponent({ text }) {
  return <div className={classes.errorComponent}>{text}</div>;
}

ErrorComponent.propTypes = {
  text: PropTypes.string.isRequired,
};
