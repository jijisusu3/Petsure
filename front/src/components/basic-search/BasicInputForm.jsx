import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RibbonSheet from '../common/RibbonSheet';
import classes from './BasicInputForm.module.css';

import axios from 'axios';

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
        setBirthMsg('해당 나이의 반려동물이 가입할 수 있는 보험은 아직 없어요 :(');
      }
    } else if (event.target.value.length === 0) {
      setIsBirth(false);
      setBirthMsg('　');
    } else {
      setIsBirth(false);
      setBirthMsg('생년월일 양식이 올바르지 않아요 :(');
    }
  };

  const searchBasic = () => {
    axios
      .post('api/insurance/basic/', {
        breed: breed,
        animal_birth: animal_birth,
        species: species,
        animal_name: animal_name,
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    navigate('/basicinput/basicresult');
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

  return (
    <div style={{ padding: '70px' }}>
      <RibbonSheet>
        <div className={classes.ribbonshit}>
          <div>
            <h4 style={{ fontWeight: '600', textAlign: 'center', marginBottom: '20px' }}>
              우리 아이 보험료 확인
            </h4>
          </div>
          <br />
          <div className={classes.realall}>
            <div className={classes.all}>
              <div className={classes.left}>
                <div className={classes.radioes}>
                  <label>
                    <input
                      className={classes.radio}
                      type="radio"
                      value="1"
                      checked={species === 1}
                      onChange={onSpeciesHandler}
                    />
                    <img src="img/dogbutton.svg" alt="" />
                  </label>
                  <label>
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
                <input
                  className={classes.sqaure}
                  type="text"
                  placeholder="반려동물 종류가 어떻게 되나요?"
                  value={breed_name}
                  onChange={onBreedHandler}
                />
                <div />
                <select
                  className="form-select"
                  value={breed || []}
                  onChange={onBreedHandler}
                  multiple
                  aria-label="multiple select example"
                >
                  {breed_list.map(item => (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  ))}
                  {/* <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option> */}
                </select>
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
