import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

// Button-Component ///////////////////////
/// ////////////////////////////////////////
/// ////////////////////////////////////////

// props
// size - large, middle, small, inherit(기본값, 부모 컴포넌트 크기 상속) 버튼 크기 조정
// color - error, neutral, success(기본값) 버튼 색 조정
// text - 버튼 이름 설정
// onEvent - 적용된 함수 실행
// closable (모달전용) - 모달이 보일 때 버튼이 안보이도록, 모달이 꺼지면 다시 버튼이 보임

function Button({ size = 'inherit', color = 'success', onEvent, text = '버튼', closable = false }) {
  let className = '';
  switch (size) {
    case 'large':
      className += `${classes.button_large} `;
      break;
    case 'middle':
      className += `${classes.button_middle} `;
      break;
    case 'small':
      className += `${classes.button_small} `;
      break;
    case 'large_height':
      className += `${classes.button_large_height} `;
      break;
    default:
      className += `${classes.button_inherit} `;
      break;
  }

  switch (color) {
    case 'yellow':
      className += `${classes.button_yellow} `;
      break;
    case 'primary':
      className += `${classes.button_primary} `;
      break;
    case 'secondary':
      className += `${classes.button_secondary} `;
      break;
    case 'error':
      className += `${classes.button_error} `;
      break;
    case 'neutral':
      className += `${classes.button_neutral} `;
      break;
    case 'recommend':
      className += `${classes.button_recommend} `;
      break;
    case 'vip':
      className += `${classes.button_vip} `;
      break;
    default:
      className += `${classes.button_success} `;
      break;
  }

  if (closable) className += 'closable ';

  function clickHandler(params) {
    params ? onEvent(params) : onEvent();
  }

  return (
    <button className={className} onClick={clickHandler}>
      {text}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  onEvent: PropTypes.func,
  text: PropTypes.string.isRequired,
  closable: PropTypes.bool,
};

export default Button;
