import React, { useCallback, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import RibbonSheet from '../common/RibbonSheet';
import Input from '../common/Input';
import Button from '../common/Button';
import classes from './BasicInputForm.module.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import {
  nameValidLengthHandler,
  nameValidOtherLetterHandler,
  nameValidHandler,
} from '../utils/validation/nameValid';
import { dateLengthValidHandler, dateValidHandler } from '../utils/validation/dateValid';

import { inputObj } from '../utils/helper/inputObj';

import { useDispatch } from 'react-redux';
import axios from 'axios';

// 유효성 검사 설정
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
    message: '생년월일을 입력해주세요.',
  },
  func1: {
    func: inputValue => dateValidHandler(inputValue),
    message: '생년월일은 8자리의 숫자만 입력하실 수 있습니다.',
  },
};

// 개 또는 고양이 리스트
const animalList = [
  { name: '강아지', value: '1' },
  { name: '고양이', value: '2' },
];
const dogList = [{ name: '강아지', value: '1' }];
const catList = [{ name: '고양이', value: '2' }];

function BasicInputForm() {
  const [name, setName] = useState(inputObj);
  const [date, setDate] = useState(inputObj);
  const [animal, setAnimal] = useState(animalList[0].value);
  const [cat, setCat] = useState(catList[0].value);
  const [dog, setDog] = useState(dogList[0].value);
  const [itemid, setItemId] = useState(inputObj);

  // const [dogdata, setDogdata] = useState(inputObj);

  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   handleNext({ animal, cat, dog });
  // }, [animal, cat, dog]);

  ///////////////////////////////////////////////////////////////////////
  const [content, setContent] = useState();

  const [petType, setPetType] = useState('dog');

  const petTypeClickHandler = e => {
    setPetType(e.target.value);
  };

  // axios
  const getDogList = async () => {
    const result = await axios('api/doglist');
    setData(result.data);
  };

  const getCatList = async () => {
    const result = await axios('api/catlist');
    setData(result.data);
  };

  useEffect(() => {
    if (petType === 'dog') {
      getDogList();
    } else {
      getCatList();
    }
  }, [petType]);
  ///////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////

  //post basic data TEST/////////////////////
  const postbasicdata = () => {
    axios
      .post('api/insurance/basic/', {
        breed: 31,
        animal_name: '이봉봉',
        species: 1,
        animal_birth: 2,
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    //화면이동
    navigate('/basicinput/basicresult');
  };
  ///////////////////////////////////////
  const basicinputErrorHandler = () => {
    alert('입력하신 정보가 유효하지 않습니다. 다시 작성해주세요');
  };

  //해당 품종의 pk를 받아옴()
  function SendAnimalIdHandler(id, e) {
    console.log(id);
  }

  /////////////////////////////////////////////////////////////////////////////////
  //만나이 계산

  const gettingOriginalAge = birth => {
    //birth가 19900305과 같은 형식
    const today = new Date(); //현재 날짜
    let age = today.getFullYear() - Number(birth.slice(0, 4));
    let mon = today.getMonth() + 1 - Number(birth.slice(4, 6)); //getMonth()는 0-11로 출력되므로 +1
    if (mon < 0 || (mon === 0 && today.getDate() < Number(birth.slice(6, 8)))) {
      return (age = age - 1); //생일이 안지났을 경우 1을 빼줍니다.
    } else {
      console.log(age);
      return age; //이게 나가는 데이터임.
    }
  };

  ////////////////////////////////////////////////////////////////////////////
  // 만드는 부분에 있어서 //input date받고 알아서 만나이 계산해서 이걸 밖으로 보내야함
  // const radios = document.getElementsByName('genderS');

  return (
    <div>
      <RibbonSheet size="large">
        <div
          onSubmit={e => {
            e.preventDefault();
            // basicinputHandler();
          }}
        >
          <div className={classes.basicinput_main}>
            <h2 className={classes.basicinput_title}>우리 아이 보험 검색</h2>
            <table className={classes.basicinput_table_border}>
              <tr>
                <td className={classes.text_table_border}>
                  <Form>
                    {['radio'].map(type => (
                      <div key={`inline-${type}`}>
                        <td className="img_align_top">
                          <img
                            src={`${process.env.PUBLIC_URL}/petsureLogo.png`}
                            width="40"
                            height="40"
                            // className="d-inline-block align-top"
                            alt=""
                          />
                          <Form.Check
                            inline
                            label="Dog"
                            name="radio"
                            items={dogList}
                            selected={dog}
                            type={type}
                            // id="1"
                            onChange={petTypeClickHandler}
                            value="dog"
                            id={`inline-${type}-1`}
                            // handleChange={e => setAnimal(e.target.value)}
                          />
                        </td>
                        <td className={classes.img_align_top}>
                          <img
                            src={`${process.env.PUBLIC_URL}/petsureLogo.png`}
                            width="40"
                            height="40"
                            // className="d-inline-block align-top"
                            alt=""
                          />
                          <Form.Check
                            inline
                            label="Cat"
                            name="radio"
                            items={catList}
                            selected={cat}
                            type={type}
                            id="2"
                            value="cat"
                            onChange={petTypeClickHandler}
                          />
                        </td>
                      </div>
                    ))}
                  </Form>
                </td>
                <td rowSpan="3" className="left_padding">
                  <div>
                    <Form.Label htmlFor="inputanimalname" />
                    <Form.Control type="text" id="inputanimalsp" aria-describedby="Block" />
                  </div>
                  <div className={classes.scroll}>
                    <Card scroll style={{ width: '18rem' }}>
                      {data.map(item => (
                        <button
                          type="button"
                          classes="list-group-item list-group-item-action"
                          key={item.id}
                          //1. onEvent={SendAnimalIdHandler}
                          //2. onData={data => ({ animalId: data.valid ? data.value : undefined })}
                          onClick={e => {
                            SendAnimalIdHandler(item.id, e);
                          }}
                        >
                          <li>
                            <a>{item.name}</a>
                          </li>
                        </button>
                      ))}
                      {/* if({item.species} ===  )  */}
                    </Card>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.table_padding2}>
                    <Input
                      id="name"
                      type="text"
                      placeholder="우리 아이 이름"
                      onValid={nameValidObj}
                      onData={nameData => setName(nameData)}
                    />
                  </div>
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
                      // value={birth}
                    />
                    {/* {dateData.length === 8 ?  (
                      <onEvent
                      <p>참이면 보여줄 HTML</p> : null} */}
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className={classes.basicinput_btns}>
            <div>
              {name.valid && date.valid ? (
                //<Button text="검색하기" onEvent={routerPushHandler} />
                <Button text="검색하기" onEvent={postbasicdata} />
              ) : (
                <Button text="검색하기" color="neutral" onEvent={basicinputErrorHandler} />
              )}
            </div>
          </div>
          {/* 불러온 radio css 관련 입니다 추후 작업예정
          <div>
            <input className="checkbox-tools" type="radio" name="tools" id="tool-1" checked />
            <label className="for-checkbox-tools" for="tool-1">
              <i className="uil uil-line-alt" />
              line
            </label>
            <input className="checkbox-tools" type="radio" name="tools" id="tool-2" />
            <label className="for-checkbox-tools" for="tool-2">
              <i className="uil uil-vector-square" />
              square
            </label>
          </div> */}
        </div>
      </RibbonSheet>
    </div>
  );
}

export default BasicInputForm;
