import React, { useCallback, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Sheet from '../common/Sheet';
import RibbonSheet from '../common/RibbonSheet';
import Input from '../common/Input';
import Button from '../common/Button';
import classes from './BasicInputForm.module.css';

import {
  nameValidLengthHandler,
  nameValidOtherLetterHandler,
  nameValidHandler,
} from '../utils/validation/nameValid';
import { dateLengthValidHandler, dateValidHandler } from '../utils/validation/dateValid';

import { inputObj } from '../utils/helper/inputObj';

import { useDispatch } from 'react-redux';

// 유효성 검사 설정
// useRef를 통한 현재 input 값 읽기
// useEffect를 통한 useRef 변경마다, 유효성 체크
// 조건에 따라, 부적합한 값인 경우, 그에 따른 알맞은 에러값 모두 송출
// 마음의 숙제 : 할 수 있다면 비즈니스 로직으로 빼서 처리하자!!

const nameValidObj = {
  func0: {
    func: inputValue => nameValidLengthHandler(inputValue),
    message: '이름을 2자 이상 입력해주세요.',
  },
  func1: {
    func: inputValue => nameValidOtherLetterHandler(inputValue),
    message: '이름은 특수문자를 사용해서는 안됩니다.',
  },
  func2: {
    func: inputValue => nameValidHandler(inputValue),
    message: '이름은 한글 및 영어만 입력이 가능합니다',
  },
};

const dateValidObj = {
  func0: {
    func: inputValue => dateLengthValidHandler(inputValue),
    message: '날짜를 입력해주세요.',
  },
  func1: {
    func: inputValue => dateValidHandler(inputValue),
    message: '날짜는 숫자만 입력하실 수 있습니다.',
  },
};

function BasicInputForm() {
  const [name, setName] = useState(inputObj);
  const [date, setDate] = useState(inputObj);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function routerPushHandler() {
    navigate('/basicinput/basicresult');
  }

  const basicinputHandler = async () => {
    // try {
    //   const userData = {
    //     name: name.value,
    //     date: date.value,
    //   };
    //   // User Data 가져오기
    //   await dispatch(getUserinsuData(payload.data));
    //   if (payload.data) {
    //     navigate('basicinput/basicresult');
    //   }
    // } catch (error) {
    //   alert('검색에 실패했습니다!');
    // }
  };

  const basicinputErrorHandler = () => {
    alert('입력하신 정보가 유효하지 않습니다. 다시 작성해주세요');
  };

  return (
    <div>
      <RibbonSheet size="large">
        <form
          onSubmit={e => {
            e.preventDefault();
            basicinputHandler();
          }}
        >
          <div className={classes.basicinput_main}>
            <h2 className={classes.basicinput_title}>우리 아이 보험료 확인</h2>

            <table className={classes.basicinput_table_border}>
              <tr>
                <td>
                  <div>
                    <Input
                      id="name"
                      type="text"
                      placeholder="우리 아이 이름"
                      onValid={nameValidObj}
                      onData={nameData => setName(nameData)}
                    />
                  </div>{' '}
                </td>
                <td>
                  {' '}
                  <h2>!!!!!!@!@!@</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <Input
                      id="date"
                      type="text"
                      placeholder="생년월일 (ex.20180603)"
                      onValid={dateValidObj}
                      onData={dateData => setDate(dateData)}
                    />
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className={classes.basicinput_btns}>
            <div>
              {name.valid && date.valid ? (
                <Button text="검색하기" onEvent={routerPushHandler} />
              ) : (
                <Button text="검색하기" color="neutral" onEvent={basicinputErrorHandler} />
              )}
            </div>
          </div>
        </form>
      </RibbonSheet>
    </div>
  );
}

export default BasicInputForm;
