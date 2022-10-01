import classes from './BasicResultBanner2.module.css';
import React, { useState, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import axios from 'axios';

const BasicResultBanner2 = () => {
  const [cdatas, setCdatas] = useState([]);
  const [ddatas, setDdatas] = useState([]);

  useEffect(() => {
    axios
      .post('/api/insurance/basic/', {
        breed: 31,
        animal_name: '이봉봉',
        species: 1,
        animal_birth: 2,
      })
      .then(response => {
        console.log(response.data);
        response.data.splice(1); //응답으로 받은 배열의 전체 또는 특정 인덱스 이후의 모든 원소 삭제
        setCdatas(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.div_flex}>
      {cdatas.map(cdata => (
        <div key={cdata.id}>
          <div>
            <div className={classes.center}>
              <table>
                <tr>
                  <td rowspan="3" className={classes.text_big_yellow}>
                    !
                  </td>
                  <td className={classes.text_bold_middle}>"아이 이름"의 건강 특징은 이래요!</td>
                  <td rowspan="3" className={classes.text_big_yellow}>
                    !
                  </td>
                </tr>
                <tr>
                  <td className={classes.text_bolder_small_grey}>
                    "아이 이름"{cdata.animal_name}은 {cdata.breed_name}입니다{' '}
                  </td>
                  <td />
                </tr>
                {/* {cdata.disease_name.map(item => (
              <div key={item.id}> */}
                <tr key={cdatas.disease_name}>
                  <td className={classes.text_center}>
                    {' '}
                    앞으로 <span className={classes.text_bold_small_yellow}>item.id</span> 를
                    주의해야해요!
                  </td>
                  <td />
                </tr>
                {/* </div>
            ))} */}
              </table>
            </div>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BasicResultBanner2;

// {
//   cdata.cover.map(item => (
//     <div key={item.id} ClassName={classes.maxWidth}>
//       <tr key={cdatas.cover}>
//         <td colspan="2" className={classes.basic_text_bold}>
//           {item.type}
//         </td>
//         <td className={classes.basic_text_bold_right}>
//           {item.type === null ? 'ㅡ' : (item.price * 10000).toLocaleString()}원
//           {/* 존재할 경우로 바꾸기 */}
//         </td>
//       </tr>
//     </div>
//   ));
// }

// import Sheet from '../common/Sheet';
// import React, { useState, useEffect } from 'react';
// import classes from './BasicCard.module.css';
// import Button from '../common/Button';
// import axios from 'axios';
// import { Dispatch } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function BasicCard() {
//   const [cdatas, setCdatas] = useState([]);
//   const [ddatas, setDdatas] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .post('/api/insurance/basic/', {
//         breed: 31,
//         animal_name: '이봉봉',
//         species: 1,
//         animal_birth: 2,
//       })
//       .then(response => {
//         console.log(response.data);
//         response.data.shift(); //응답으로 받은 배열의 0번째 요소 제거
//         setCdatas(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }, []);

//   return cdatas.map(cdata => (
//     <div key={cdata.id} className={classes.basicCard}>
//       {/* {cdata.cover.map(item => ( */}
//       {/* // <div key={item.id}> */}
//       <Sheet size="medium">
//         <div>
//           <table className="classes.align_center table_border">
//             <tr>
//               <td colSpan="2">
//                 <div>
//                   <img className={classes.basicLogo} src={cdata.company_logo} />
//                 </div>
//               </td>
//               <td />
//             </tr>
//             <tr>
//               <td colSpan="2">
//                 <div className={classes.basicInsuName}>{cdata.insurance_name}</div>
//               </td>
//               <td />
//             </tr>
//             {cdata.cover.map(item => (
//               <div key={item.id} ClassName={classes.maxWidth}>
//                 <tr key={cdatas.cover}>
//                   {/* {cdata.cover.map(item => (
//                 <div key={item.id}> */}
//                   <td colspan="2" className={classes.basic_text_bold}>
//                     {item.type}
//                   </td>
//                   <td className={classes.basic_text_bold_right}>
//                     {/* {(item.price * 10000).toLocaleString()} 원 */}
//                     {item.type === null ? 'ㅡ' : (item.price * 10000).toLocaleString()}원
//                   </td>
//                 </tr>
//               </div>
//             ))}
//             <tr>
//               <td className={classes.sure_yellow_text}>슈어지수</td>
//               <td className={classes.sure_yellow_text_right}>상세 검색에서 보실 수 있어요!</td>
//             </tr>
//             <tr>
//               <td colSpan="2">
//                 <hr className={classes.hr_padding} />{' '}
//               </td>

//               <td />
//             </tr>
//             <tr>
//               <td className={classes.basic_text_bold}>납입보험료</td>
//               <td className={classes.sure_yellow_text_right_size}>
//                 월 {cdata.fee.toLocaleString()} 원
//               </td>
//             </tr>

//             <tr>
//               <td colSpan="2">
//                 <div className={classes.basicButton}>
//                   <Button
//                     size="middle"
//                     className={classes.basicButton}
//                     text="가입 페이지로 이동"
//                     onEvent={() => window.open([cdata.company_url], '_blank')}
//                   />
//                 </div>
//               </td>
//               <td />
//             </tr>
//           </table>
//         </div>
//       </Sheet>
//     </div>
//   ));
// }
