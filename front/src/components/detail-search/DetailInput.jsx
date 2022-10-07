import RibbonSheet1 from '../common/RibbonSheet1';
import classes from './DetailInput.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const boxShadow = '0 4px 6px rgb(32 33 36 / 28%)';

export const InputContainer = styled.div`
  margin-top: 0;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  border-radius: 8px;
  z-index: 3;
  box-shadow: 0;
  width: 293px;
  height: 35px;

  > input {
    flex: 1 0 0;
    background-color: #f0f0f0;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
  }
`;
export const DropDownContainer = styled.ul`
  background-color: #ffffff;
  display: block;
  margin-left: 13px;
  margin-right: 0px;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  box-shadow: ${boxShadow};
  z-index: 3;
  width: 293px;
  height: 220px;
  overflow: scroll;

  > li:hover {
    background-color: lightgray;
  }

  > li {
    padding: 0 1rem;

    &.selected {
      background-color: lightgray;
    }
  }
`;

function DetailInput() {
  const navigate = useNavigate();
  const RadioInput = ({ value, checked, setter }) => {
    return (
      <label className={classes.detail_input}>
        <input
          className={classes.hidden}
          type="radio"
          checked={checked === value}
          onChange={() => setter(value)}
        />
        <span className={classes.detail_label} />
      </label>
    );
  };
  const RadioInputSet = ({ checked, setter }) => {
    return (
      <div id="radios">
        <RadioInput value="1" checked={checked} setter={setter} />
        <RadioInput value="2" checked={checked} setter={setter} />
        <RadioInput value="3" checked={checked} setter={setter} />
        <RadioInput value="4" checked={checked} setter={setter} />
        <RadioInput value="5" checked={checked} setter={setter} />
      </div>
    );
  };

  // let user = localStorage.getItem('user');
  // user = JSON.parse(user);

  // let others = localStorage.getItem('others');
  // others = JSON.parse(others);

  const [page, setPage] = useState('1');

  const [outpatient, setOutpatient] = useState('');
  const [hospitalization, setHospitalization] = useState('');
  const [operation, setOperation] = useState('');
  const [patella, setPatella] = useState('');
  const [skin, setSkin] = useState('');
  const [dental, setDental] = useState('');
  const [urinary, setUrinary] = useState('');
  const [liability, setLiability] = useState('');

  // 3page 반려동물 정보
  const [species, setSpecies] = useState('');
  const [animal_name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [animal_birth, setAge] = useState('');

  const [birth, setBirth] = useState('');
  const [breed_name, setBreedName] = useState('');
  const [breed_list, setBreedList] = useState([]);

  const [isName, setIsName] = useState(false);
  const [isBreed, setIsBreed] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  const [birthMsg, setBirthMsg] = useState('');

  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(breed_list);
  const [selected, setSelected] = useState(-1);

  const onSpeciesHandler = event => {
    setSpecies(Number(event.target.value));
  };

  const onNameHandler = event => {
    setName(event.target.value);
    if (event.target.value) {
      setIsName(true);
    } else {
      setIsName(false);
    }
  };

  const onBirthHandler = event => {
    setBirth(event.target.value);
    if (
      event.target.value.length === 8 &&
      1 <= Number(event.target.value.slice(4, 6)) &&
      Number(event.target.value.slice(4, 6)) <= 12 &&
      1 <= Number(event.target.value.slice(6, 8)) &&
      Number(event.target.value.slice(6, 8)) <= 31
    ) {
      const today = new Date();
      let age = today.getFullYear() - Number(event.target.value.slice(0, 4));
      let mon = today.getMonth() + 1 - Number(event.target.value.slice(4, 6));
      if (mon < 0 || (mon === 0 && today.getDate() < Number(event.target.value.slice(6, 8)))) {
        age = age - 1;
        setAge(Number(age - 1));
      } else {
        setAge(Number(age));
      }
      if (Number(age) >= 0 && Number(age - 1) <= 10) {
        setIsBirth(true);
        setBirthMsg('　');
      } else {
        setIsBirth(false);
        setBirthMsg('해당 나이의 반려동물이 가입할 수 있는 보험은 없습니다');
      }
    } else if (event.target.value.length === 0) {
      setIsBirth(false);
      setBirthMsg('　');
    } else {
      setIsBirth(false);
      setBirthMsg('생년월일 양식이 올바르지 않아요 :(');
    }
  };

  const onBreedHandler = event => {
    setBreed(Number(event.target.value));
    let tmp = breed_list.filter(data => data.id === Number(event.target.value));
    setBreedName(tmp[0].name);
    if (event.target.value) {
      setIsBreed(true);
    } else {
      setIsBreed(false);
    }
  };

  const getDogList = async () => {
    const result = await axios('api/doglist');
    setBreedList(result.data);
  };

  const getCatList = async () => {
    const result = await axios('api/catlist');
    setBreedList(result.data);
  };

  useEffect(() => {
    if (species === 1) {
      getDogList();
    } else if (species === 2) {
      getCatList();
    }
  }, [species]);
  useEffect(() => {
    if (inputValue === '') {
      setHasText(false);
      setOptions([]);
    }

    if (inputValue !== '') {
      setOptions(
        breed_list.filter(el => {
          return el.name.includes(inputValue);
        }),
      );
    }
  }, [inputValue]);
  const handleInputChange = event => {
    setInputValue(event.target.value);
    console.log(inputValue);
    setHasText(true);
    let tmp = breed_list.filter(data => data.name === event.target.value);
    setBreed(tmp[0].id);
    if (event.target.value) {
      setIsBreed(true);
    } else {
      setIsBreed(false);
    }
  };

  const handleDropDownClick = clickedOption => {
    setInputValue(clickedOption.name);
    setHasText(true);
    setBreed(clickedOption.id);
    if (clickedOption) {
      setIsBreed(true);
    } else {
      setIsBreed(false);
    }
  };

  const handleKeyUp = event => {
    if (hasText) {
      if (event.key === 'ArrowDown' && options.length - 1 > selected) {
        setSelected(selected + 1);
      }
      if (event.key === 'ArrowUp' && selected >= 0) {
        setSelected(selected - 1);
      }
      if (event.key === 'Enter' && selected >= 0) {
        setInputValue(options[selected].name);
        setSelected(-1);
        setBreed(options[selected].id);
        if (event.target.value) {
          setIsBreed(true);
        } else {
          setIsBreed(false);
        }
      }
    }
  };
  useEffect(() => {
    let user = localStorage.getItem('user');
    let othersinfo = localStorage.getItem('others');
    user = JSON.parse(user);
    othersinfo = JSON.parse(othersinfo);
    if (user && othersinfo) {
      setBreed(user.breed);
      setAge(user.animal_birth);
      setSpecies(user.species);
      setName(user.animal_name);
      setInputValue(othersinfo.inputValue);
      setBirth(othersinfo.birth_date);
      setBreedName(othersinfo.breed_name);
      setOptions(othersinfo.options);
      setSelected(othersinfo.selected);
      setIsName(true);
      setIsBreed(true);
      setIsBirth(true);
      setHasText(true);
    }
  }, []);
  const onPageHandler = event => {
    setPage(event.target.value);
  };
  // const onInfoHander = event => {
  //   let user = localStorage.getItem('user');
  //   let others = localStorage.getItem('others');
  //   if (user && others) {
  //     setBreed(user.breed);
  //     setAge(user.animal_birth);
  //     setSpecies(user.species);
  //     setName(user.animal_name);
  //     setBirth(others.birth_date);
  //     setBreed(others.breed_name);
  //   }
  // };

  const user_data = {
    breed: breed,
    animal_birth: animal_birth,
    species: species,
    animal_name: animal_name,
    outpatient: Number(outpatient),
    hospitalization: Number(hospitalization),
    operation: Number(operation),
    patella: Number(patella),
    skin_disease: Number(skin),
    dental: Number(dental),
    urinary: Number(urinary),
    liability: Number(liability),
  };

  const others = {
    breed_name: breed_name,
    birth_date: birth,
    inputValue: inputValue,
    options: options,
    selected: selected,
  };

  const searchDetail = () => {
    console.log(user_data);
    axios
      .post('api/insurance/detail/', user_data)
      .then(response => {
        localStorage.setItem('user', JSON.stringify(user_data));
        localStorage.setItem('others', JSON.stringify(others));
        navigate('/allinput/detailresult', { state: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  console.log(inputValue);
  return (
    <div>
      <div className={classes.ribbonshit}>
        <RibbonSheet1>
          <h4
            style={{
              fontWeight: '600',
              textAlign: 'center',
              marginBottom: '20px',
              marginTop: '50px',
            }}
          >
            우리 아이 맞춤형 보험 찾기
          </h4>
          <form action="">
            {page === '1' && (
              <div>
                <div className={classes.qinfo}>
                  <p
                    style={{
                      color: '#353535',
                      fontWeight: '500',
                      textAlign: 'center',
                      fontSize: '15px',
                    }}
                  >
                    ✅ 아래 보장들을 필요 정도에 맞춰 체크해주세요!
                  </p>
                  <p
                    style={{
                      color: '#FA917B',
                      fontWeight: '400',
                      textAlign: 'center',
                      fontSize: '12px',
                    }}
                  >
                    매우 낮을 경우: 1 , 매우 높을 경우: 5
                  </p>
                </div>
                <div className={classes.detailscale}>
                  <div className={classes.detailqnone} />
                  <div className={classes.detailqnums}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                  </div>
                </div>
                <div className={classes.detailcontents}>
                  <div className={classes.deatailqbox}>
                    <div className={classes.detailq}>
                      <div className={classes.detailqtitle}>통원치료비</div>
                      <div>
                        <RadioInputSet checked={outpatient} setter={setOutpatient} />
                      </div>
                    </div>
                    <div className={classes.detailq}>
                      <div className={classes.detailqtitle}>입원치료비</div>
                      <div>
                        <RadioInputSet checked={hospitalization} setter={setHospitalization} />
                      </div>
                    </div>
                    <div className={classes.detailq}>
                      <div className={classes.detailqtitle}>수술치료비</div>
                      <div>
                        <RadioInputSet checked={operation} setter={setOperation} />
                      </div>
                    </div>
                    <div className={classes.detailq}>
                      <div className={classes.detailqtitle}>배상책임</div>
                      <div>
                        <RadioInputSet checked={liability} setter={setLiability} />
                      </div>
                    </div>
                  </div>
                  <button
                    className={classes.detailbtn}
                    type="button"
                    value="2"
                    onClick={onPageHandler}
                  >
                    다음
                  </button>
                </div>
              </div>
            )}
            {page === '2' && (
              <div>
                <div className={classes.qinfo}>
                  <p
                    style={{
                      color: '#353535',
                      fontWeight: '500',
                      textAlign: 'center',
                      fontSize: '15px',
                    }}
                  >
                    🤔 아래 질병들이 얼마나 걱정되시나요?
                  </p>
                  <p
                    style={{
                      color: '#FA917B',
                      fontWeight: '400',
                      textAlign: 'center',
                      fontSize: '12px',
                    }}
                  >
                    걱정 안 될 경우: 1 , 매우 걱정될 경우: 5
                  </p>
                </div>
                <div className={classes.detailscale}>
                  <div className={classes.detailqnone} />
                  <div className={classes.detailqnums}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                  </div>
                </div>

                <div className={classes.detailcontents}>
                  <div className={classes.deatailqbox}>
                    <div className={classes.detailq}>
                      <div className={classes.detailqtitle}>슬관절</div>
                      <div>
                        <RadioInputSet checked={patella} setter={setPatella} />
                      </div>
                    </div>
                    <div className={classes.detailq}>
                      <div className={classes.detailqtitle}>피부병</div>
                      <div>
                        <RadioInputSet checked={skin} setter={setSkin} />
                      </div>
                    </div>
                    <div className={classes.detailq}>
                      <div className={classes.detailqtitle}>구강 질환</div>
                      <div>
                        <RadioInputSet checked={dental} setter={setDental} />
                      </div>
                    </div>
                    <div className={classes.detailq}>
                      <div className={classes.detailqtitle}>비뇨기 질환</div>
                      <div>
                        <RadioInputSet checked={urinary} setter={setUrinary} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className={classes.detailbtn}
                      style={{ marginRight: '10px' }}
                      type="button"
                      value="1"
                      onClick={onPageHandler}
                    >
                      이전
                    </button>
                    <button
                      className={classes.detailbtn}
                      type="button"
                      value="3"
                      onClick={onPageHandler}
                    >
                      다음
                    </button>
                  </div>
                </div>
              </div>
            )}
            {page === '3' && (
              <div>
                <div className={classes.qinfo}>
                  <p
                    style={{
                      color: '#353535',
                      fontWeight: '500',
                      textAlign: 'center',
                      fontSize: '15px',
                    }}
                  >
                    💖 반려동물 정보를 입력해주세요
                  </p>
                  {/* <p
                    style={{
                      color: '#FA917B',
                      fontWeight: '400',
                      textAlign: 'center',
                      fontSize: '12px',
                    }}
                    >
                    매우 낮을 경우: 1 , 매우 높을 경우: 5
                  </p> */}
                </div>
                <div className={classes.realall}>
                  <div className={classes.all}>
                    <div className={classes.left}>
                      <div className={classes.radioes}>
                        <label className={classes.selectimg}>
                          <input
                            className={classes.radio}
                            type="radio"
                            value="1"
                            checked={species === 1}
                            onChange={onSpeciesHandler}
                          />
                          <img src="img/dogbtn.svg" alt="" />
                        </label>
                        <label className={classes.selectimg}>
                          <input
                            className={classes.radio}
                            type="radio"
                            value="2"
                            checked={species === 2}
                            onChange={onSpeciesHandler}
                          />
                          <img src="img/catbtn.svg" alt="" />
                        </label>
                      </div>
                      <input
                        className={classes.sqaure}
                        type="text"
                        placeholder="반려동물 이름을 입력해주세요"
                        value={animal_name}
                        onChange={onNameHandler}
                      />
                      <input
                        className={classes.sqaure}
                        type="text"
                        placeholder="생년월일을 8자리를 입력해주세요"
                        value={birth}
                        onChange={onBirthHandler}
                      />
                      <p
                        style={{
                          fontSize: '12px',
                          marginLeft: '20px',
                          marginTop: '3px',
                          color: 'red',
                        }}
                      >
                        {birthMsg}
                      </p>
                    </div>
                    <div className={classes.right}>
                      <InputContainer>
                        <input
                          type="text"
                          placeholder="반려동물 종류가 어떻게 되나요?"
                          value={inputValue}
                          onChange={handleInputChange}
                          onKeyUp={handleKeyUp}
                        />
                      </InputContainer>

                      {hasText ? (
                        <DropDown
                          options={options}
                          handleComboBox={handleDropDownClick}
                          selected={selected}
                        />
                      ) : (
                        <DropDown
                          options={breed_list}
                          handleComboBox={handleDropDownClick}
                          selected={selected}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className={classes.threebtns}>
                  <button
                    className={classes.lastprevbtn}
                    style={{ marginRight: '10px' }}
                    type="button"
                    value="2"
                    onClick={onPageHandler}
                  >
                    이전
                  </button>
                  <button
                    className={classes.submitbtn}
                    onClick={searchDetail}
                    disabled={
                      !(
                        isName &&
                        isBreed &&
                        isBirth &&
                        outpatient &&
                        hospitalization &&
                        operation &&
                        patella &&
                        skin &&
                        dental &&
                        urinary &&
                        liability
                      )
                    }
                    type="button"
                  >
                    추천받기
                  </button>
                </div>
              </div>
            )}
          </form>
        </RibbonSheet1>
      </div>
    </div>
  );
}
export default DetailInput;

export const DropDown = ({ options, handleComboBox, selected }) => {
  return (
    <DropDownContainer>
      {options.map((option, idx) => {
        return (
          <li
            key={idx}
            onClick={() => handleComboBox(option)}
            className={selected === idx ? 'selected' : ''}
          >
            {option.name}
          </li>
        );
      })}
    </DropDownContainer>
  );
};
