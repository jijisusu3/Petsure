import React, { useCallback, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Sheet from '../common/Sheet';
import RibbonSheet from '../common/RibbonSheet';
import Input from '../common/Input';
import Button from '../common/Button';
import classes from './BasicInputForm.module.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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

  //post basic data/////////////////////
  const postbasicdata = () => {
    axios
      .post('api/insurance/basic', {
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

  //해당 품종의 pk를 받아오는 친구입니다
  function SendAnimalIdHandler(id, e) {
    //지금 이 안에는 item.id를 읽어올 수 없는데, 그럼 이걸 우짠담...?눈물 광광
    console.log(id);
  }

  /////////////////////////////////////////////////////////////////////////////////
  //만나이 계산
  //만들었는데 활용할 방법 계산중...

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
            <h2 className={classes.basicinput_title}>우리 아이 보험료 확인</h2>
            <table className={classes.basicinput_table_border}>
              <tr>
                <td className={classes.text_table_border}>
                  <Form>
                    {['radio'].map(type => (
                      <div key={`inline-${type}`}>
                        <td className={classes.table_padding}>
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
                        <td className={classes.table_padding}>
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
                <td rowSpan="3">
                  <div>
                    <Form.Label htmlFor="inputanimalname" />
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                    />
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
        </div>
      </RibbonSheet>
    </div>
  );
}

export default BasicInputForm;

/////////////////////////////////////////////////////////////////////////////////////////

// // 상세검색결과
// import Sheet from '../../components/common/Sheet';
// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import { SureScore } from '../../components/common/SureScore';
// import axios from 'axios';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import { CData, SData, PData } from '../../components/detail-result/InsureCard';

// export function DetailResultPage() {
//   const [cdatas, setCdatas] = useState([]);
//   const [pdatas, setPdatas] = useState([]);
//   const [sdatas, setSdatas] = useState([]);
//   useEffect(() => {
//     axios
//       .post('api/insurance/basic', {
//         breed: 31,
//         animal_name: '이봉봉',
//         species: 1,
//         animal_birth: 2,
//       })
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   });
//   return (
//     <Tabs defaultActiveKey="슈어 점수 순" id="uncontrolled-tab-example" className="mb-3">
//       <Tab eventKey="슈어 점수 순" title="슈어 점수 순">
//         <SData />
//       </Tab>
//       <Tab eventKey="낮은 가격 순" title="낮은 가격 순">
//         <PData />
//       </Tab>
//       <Tab eventKey="많은 보장 순" title="많은 보장 순">
//         <CData />
//       </Tab>
//     </Tabs>
//   );
// }
// ----------------------------------------------------------------------------
// import React from "react";
// import axios from "axios";

// class App extends React.Component {
//   state = {
//     isLoading: false,
//     speci: false,
//     name: "",
//     result: "",
//     message: "",
//   };

//   onInputValChange = (e) => {
//     this.setState({ email: e.target.value });
//   };

//   postEmail = async () => {
//     this.setState({ isLoading: true });

//     await axios
//       .post(
//         "https://{post 요청 url}/email",
//         {
//           email: this.state.email,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         }
//       )
//       .then((response) => {
//         this.setState({
//           message: "이메일을 확인해주세요.",
//           error: false,
//         });
//         console.log(response.data);
//       })
//       .catch((response) => {
//         this.setState({
//           message: response.response.data.validation.email,
//           error: true,
//         });
//       });

//     this.setState({ isLoading: false });
//   };

//   componentDidMount() {}

//   render() {
//     const { isLoading, message, error } = this.state;
//     return (
//       <div className="container mx-auto px-4 py-14 sm:px-6 xl:px-12">
//         <div className="flex items-center justify-center text-center">
//           <input
//             type="email"
//             required={true}
//             className="w-2/3 rounded-md border bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
//             placeholder="you@website.com"
//             onChange={this.onInputValChange}
//           />
//           {isLoading ? (
//             <button
//               className="w-1/3 rounded-md border border-blue-500 bg-blue-500 py-2 text-white text-center font-bold"
//               disabled
//             >
//               <svg
//                 aria-hidden="true"
//                 className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 inline-block"
//                 viewBox="0 0 100 101"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                   fill="currentColor"
//                 />
//                 <path
//                   d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                   fill="currentFill"
//                 />
//               </svg>
//             </button>
//           ) : (
//             <button
//               onClick={this.postEmail}
//               className="w-1/3 rounded-md border border-blue-500 bg-blue-500 py-2 px-6 text-white font-bold"
//             >
//               Submit
//             </button>
//           )}
//         </div>
//         {error ? (
//           <span className="ml-2 text-sm text-red-500">{message}</span>
//         ) : (
//           <span className="ml-2 text-sm text-blue-500">{message}</span>
//         )}
//       </div>
//     );
//   }
// }
// export default App;
