/**
 * 라디오 버튼 & 그룹 컴포넌트
 *
 * label {string}: 라디오 버튼 그룹 레이블 (생략할 경우 렌더링하지 않음)
 * name {string}: 라디오 버튼 그룹을 구분하는 이름
 * items {array}: 라디오 버튼의 정보를 담는 객체 리스트
 * items[].name {string}: 라디오 버튼 텍스트
 * items[].value {string}: 라디오 버튼 클릭 시 받는 값
 * vertical {boolean}: 아이템 세로 정렬 여부 (기본값은 false)
 * selected {string}: 선택된 아이템의 value 값
 * handleChange {function}: 라디오 박스 이벤트 핸들러
 */

import classes from './RadioBtnGroup.module.css';
import PropTypes from 'prop-types';

function RadioBtn({ id, name, children, selectedValue, handleChange }) {
  return (
    <label htmlFor={id} className={classes.radioBtn}>
      <input
        type="radio"
        name={name}
        id={id}
        value={id}
        checked={selectedValue === id}
        onChange={handleChange}
        className={classes.invisibleRadio}
      />
      <div className={classes.visibleRadio}>
        <div className={classes.outer}>
          <div className={classes.inner} />
        </div>
      </div>
      {children}
    </label>
  );
}

export default function RadioBtnGroup({ label, name, items, vertical, selected, handleChange }) {
  return (
    <div className={classes.groupContainer}>
      <div className={classes.label}>{label}</div>
      <div className={`${classes.radioBtnGroup} ${vertical ? classes.vertical : ''}`}>
        {items.map(item => (
          <RadioBtn
            key={item.value}
            id={item.value}
            name={name}
            selectedValue={selected}
            handleChange={handleChange}
          >
            {item.name}
          </RadioBtn>
        ))}
      </div>
    </div>
  );
}

RadioBtn.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  selectedValue: PropTypes.string,
  handleChange: PropTypes.func,
};

RadioBtnGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  vertical: PropTypes.bool,
  selected: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
