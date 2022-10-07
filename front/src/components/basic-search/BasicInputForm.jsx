import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RibbonSheet from '../common/RibbonSheet';
import classes from './BasicInputForm.module.css';

import axios from 'axios';

import styled from 'styled-components';

const boxShadow = '0 4px 6px rgb(32 33 36 / 28%)';
const activeBorderRadius = '1rem 1rem 0 0';
const inactiveBorderRadius = '1rem 1rem 1rem 1rem';

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
function BasicInputForm() {
  const navigate = useNavigate();
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

  const onSpeciesHandler = event => {
    setSpecies(Number(event.target.value));
    setBreedName(breed_name => []);
    setInputValue(inputValue => '');
    setIsBreed(isBreed => '');
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
      if (Number(age) >= 0 && Number(age - 1) <= 8) {
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

  const user_data = {
    breed: breed,
    animal_birth: animal_birth,
    species: species,
    animal_name: animal_name,
  };

  const others = {
    breed_name: breed_name,
    birth_date: birth,
  };

  const searchBasic = () => {
    console.log(user_data);
    axios
      .post('api/insurance/basic/', user_data)
      .then(response => {
        localStorage.setItem('user', JSON.stringify(user_data));
        localStorage.setItem('others', JSON.stringify(others));
        navigate('/basicinput/basicresult', { state: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onBreedHandler = event => {
    setBreedName(event.target.value);
    let tmp = breed_list.filter(data => data.name === event.target.value);
    setBreed(tmp[0].id);
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

  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(breed_list);
  const [selected, setSelected] = useState(-1);
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
        handleDropDownClick(options[selected].name);
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
  return (
    <div style={{ padding: '70px' }}>
      <RibbonSheet>
        <div className={classes.ribbonshit}>
          <div>
            <h4 style={{ fontWeight: '600', textAlign: 'center', marginBottom: '20px' }}>
              우리 아이 보험 검색
            </h4>
          </div>
          <br />
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
                    <img src="img/dogbutton.svg" alt="" />
                  </label>
                  <label className={classes.selectimg}>
                    <input
                      className={classes.radio}
                      type="radio"
                      value="2"
                      checked={species === 2}
                      onChange={onSpeciesHandler}
                    />
                    <img src="img/catbutton.svg" alt="" />
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
                <p style={{ fontSize: '12px', marginLeft: '20px', marginTop: '3px', color: 'red' }}>
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
            <div>
              <button
                className={classes.btn}
                onClick={searchBasic}
                disabled={!(isName && isBreed && isBirth)}
              >
                검색하기
              </button>
            </div>
          </div>
        </div>
      </RibbonSheet>
    </div>
  );
}

export default BasicInputForm;

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
