import React, { useCallback, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import RibbonSheet from '../common/RibbonSheet';
import classes from './BasicInputForm.module.css';

function BasicInputForm() {
  const [species, setSpecies] = useState('');
  const [animal_name, setName] = useState('');
  const [animal_birth, setBirth] = useState('');
  const [breed, setBreed] = useState('');

  const onSpeciesHandler = event => {
    setSpecies(Number(event.target.value));
  };
  const onNameHandler = event => {
    setName(event.target.value);
  };
  const onBirthHandler = event => {
    setBirth(event.target.value);
  };
  const onBreedHandler = event => {
    setBreed(event.target.value);
  };

  // const [basic, setBasic] = useState({
  //   breed: '',
  //   animal_name: '',
  //   species: '',
  //   animal_birth: ''
  // })
  // const [dogcat, setDogcat] = useState([]);
  // const handleClickRadioButton = e => {
  //   console.log(e.target.value);
  //   console.log(typeof e.target.value);
  //   setDogcat(e.target.value);

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
                  value={animal_birth}
                  onChange={onBirthHandler}
                />
              </div>
              <div className={classes.right}>
                <input
                  className={classes.sqaure}
                  type="text"
                  placeholder="반려동물 종류가 어떻게 되나요?"
                  value={breed}
                  onChange={onBreedHandler}
                />
                <select class="form-select" multiple aria-label="multiple select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div>
              <button className={classes.btn}>검색하기</button>
            </div>
          </div>
        </div>
      </RibbonSheet>
    </div>
  );
}

export default BasicInputForm;
