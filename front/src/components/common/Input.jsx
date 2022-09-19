/**
 * 입력 창 컴포넌트
 *
 * id {string}: 입력 창의 ID 값 및 레이블에 표시될 텍스트
 * type {string}: 입력 창의 타입, 기본 값은 text
 * placeholder {string}: 전달 시 입력 창에 플레이스홀더 적용
 * onValid {object}: 유효성 검사에 필요한 객체 (없으면 검사 불가)
 * onData {func}: 유효성 검사에 성공했을 때 호출되는 함수
 * required {bool}: 필수 입력 여부 (우측에 마크 표시), 기본 값은 false
 * noLabel {bool}: 레이블 표시 비활성화 여부, 기본 값은 false
 * meta {any}: 유효성 검사에 사용할 외부 state 값 (ex: 비밀번호 확인)
 * defaultValue {string, number}: 최초로 입력되는 값 (placeholder와 다름)
 * disabled {bool}: 입력 비활성화 여부, 기본 값은 false
 */

import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.css';
function Input({
  id,
  type = 'text',
  placeholder = '',
  onValid,
  onData,
  required,
  noLabel,
  meta,
  defaultValue,
  disabled,
}) {
  const inputRef = useRef();
  const [errorComponent, setErrorComponent] = useState(null);

  let colorInputClass = '';
  let colorLabelClass = '';

  switch (errorComponent) {
    case null:
      colorInputClass = '';
      colorLabelClass = '';
      break;
    case '':
      colorInputClass = classes.validInput;
      colorLabelClass = classes.validLabel;
      break;
    default:
      colorInputClass = classes.invalidInput;
      colorLabelClass = classes.invalidLabel;
  }

  let checkValid;
  function inputValidHandler() {
    clearTimeout(checkValid);
    checkValid = setTimeout(() => {
      let errorComponent = '';
      for (let func in onValid) {
        if (!onValid[func].func(inputRef.current.value, meta)) {
          errorComponent = <ErrorComponent text={onValid[func].message} />;
          break;
        }
      }
      console.log('유효성 체크');
      setErrorComponent(errorComponent);
      onData({
        value: inputRef.current.value,
        valid: errorComponent === '' ? true : false,
      });
    }, 200);
  }

  useEffect(() => {
    inputRef.current.value = defaultValue || '';
    onData && defaultValue && inputValidHandler();
  }, [defaultValue]);

  return (
    <div className={classes.inputContainer}>
      {noLabel || (
        <label className={`${classes.inputLabel} ${colorLabelClass}`} htmlFor={id}>
          {id}
          {required && <span className={classes.requiredMark}>*</span>}
        </label>
      )}
      <input
        className={`${classes.input} ${colorInputClass}`}
        name={id}
        type={type}
        placeholder={placeholder}
        onKeyUp={inputValidHandler}
        ref={inputRef}
        tabIndex="-1"
        disabled={disabled}
      />
      {/* 에러가 렌더링 되는 창 */}
      {errorComponent && errorComponent}
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onValid: PropTypes.object,
  onData: PropTypes.func,
  required: PropTypes.bool,
  noLabel: PropTypes.bool,
  meta: PropTypes.any,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
};

function ErrorComponent({ text }) {
  return <div className={classes.errorComponent}>{text}</div>;
}

ErrorComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Input;
