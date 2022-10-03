import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import classes from './DiseaseDict.module.css';
import BannerDict from '../components/common/BannerDict';

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  height: 550,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 8,
  outline: 'none',
  borderRadius: '20px',
};
export function DiseaseDictPage() {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  const images = importAll(require.context('../images/dict', false, /\.(png|jpe?g|svg)$/));

  <img src={images['doggy.png']} />;
  // const [dicts, setDicts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get('/api/disease')
  //     .then(response => {
  //       console.log(response);
  //       setDicts(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // });
  const [a, setShowA] = React.useState(false);
  const [b, setShowB] = React.useState(false);
  const [c, setShowC] = React.useState(false);
  const [d, setShowD] = React.useState(false);
  const [e, setShowE] = React.useState(false);
  const [f, setShowF] = React.useState(false);
  const [g, setShowG] = React.useState(false);
  const [h, setShowH] = React.useState(false);
  const [i, setShowI] = React.useState(false);
  const [j, setShowJ] = React.useState(false);
  const [k, setShowK] = React.useState(false);
  const [l, setShowL] = React.useState(false);
  const handleCloseA = () => setShowA(false);
  const handleCloseB = () => setShowB(false);
  const handleCloseC = () => setShowC(false);
  const handleCloseD = () => setShowD(false);
  const handleCloseE = () => setShowE(false);
  const handleCloseF = () => setShowF(false);
  const handleCloseG = () => setShowG(false);
  const handleCloseH = () => setShowH(false);
  const handleCloseI = () => setShowI(false);
  const handleCloseJ = () => setShowJ(false);
  const handleCloseK = () => setShowK(false);
  const handleCloseL = () => setShowL(false);

  return (
    <div>
      <BannerDict />
      <div className={classes.main}>
        <div>
          <div className={classes.mainBox} onClick={() => setShowA(true)}>
            <div className={classes.card}>
              <p className={classes.cardText}>갑자기 절뚝거려요</p>
              <img className={classes.cardImg} src={images['5.png']} alt="" />
            </div>
          </div>
          <Modal
            open={a}
            onClose={handleCloseA}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className={classes.rowDiv}>
                <img className={classes.inImg} src={images['6.png']} alt="" />
                <div>
                  <p className={classes.dText}>이런 질병이 의심돼요.</p>
                  <p className={classes.info}>
                    슬개골 탈구
                    <br />
                    관절염
                  </p>
                </div>
              </div>
              <div>
                <p className={classes.dText}>이렇게 하는게 좋아요.</p>
                <p className={classes.info}>두발로 서지 못하게 막아주세요.</p>
                <p className={classes.info}>
                  평소 털 관리를 잘 하고, 미끄럼 방지 매트를 깔아주세요.
                </p>
                <p className={classes.info}>적절한 운동을 통한 체중과 근육을 관리해주면 좋아요.</p>
                <p className={classes.info}>슬개골 탈구 관련 배상이 있는 보험을 들어두면 좋아요.</p>
              </div>
            </Box>
          </Modal>
          <div className={classes.mainBox} onClick={() => setShowB(true)}>
            <div className={classes.card}>
              <p className={classes.cardText}>털이 많이 빠지고 자주 긁어요</p>
              <img className={classes.cardImg} src={images['3.png']} alt="" />
            </div>
          </div>
          <Modal
            open={b}
            onClose={handleCloseB}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className={classes.rowDiv}>
                <img className={classes.inImg} src={images['4.png']} alt="" />
                <div>
                  <p className={classes.dText}>이런 질병이 의심돼요.</p>
                  <p className={classes.info}>
                    피부염
                    <br />
                    백선
                    <br />
                    탈모증
                  </p>
                </div>
              </div>
              <div>
                <p className={classes.dText}>이렇게 하는게 좋아요.</p>
                <p className={classes.info}>잦은 목욕은 반려동물의 피부에 자극이 될 수 있어요.</p>
                <p className={classes.info}>반려동물이 좋아하는 장난감을 청결하게 유지해 주세요.</p>
                <p className={classes.info}>
                  적절한 습도와 온도를 유지하며 털 관리에도 신경써주세요.
                </p>
              </div>
            </Box>
          </Modal>
          <div className={classes.mainBox} onClick={() => setShowC(true)}>
            <div className={classes.card}>
              <p className={classes.cardText}>입냄새가 심해졌어요</p>
              <img className={classes.cardImg} src={images['23.png']} alt="" />
            </div>
          </div>
          <Modal
            open={c}
            onClose={handleCloseC}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className={classes.rowDiv}>
                <img className={classes.inImg} src={images['24.png']} alt="" />
                <div>
                  <p className={classes.dText}>이런 질병이 의심돼요.</p>
                  <p className={classes.info}>
                    구내염
                    <br />
                    충치
                  </p>
                </div>
              </div>
              <div>
                <p className={classes.dText}>이렇게 하는게 좋아요.</p>
                <p className={classes.info}>
                  반려동물이 섭취하는 간식이나 사료가 너무 딱딱하지는 않은지 확인해주세요.
                </p>
                <p className={classes.info}>날카로운 장난감을 입에 넣지 않도록 유의해주세요.</p>
              </div>
            </Box>
          </Modal>
          <div className={classes.mainBox} onClick={() => setShowD(true)}>
            <div className={classes.card}>
              <p className={classes.cardText}>
                배뇨가 잦거나
                <br />
                피가 섞여 나와요
              </p>
              <img className={classes.cardImg} src={images['1.png']} alt="" />
            </div>
          </div>
          <Modal
            open={d}
            onClose={handleCloseD}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className={classes.rowDiv}>
                <img className={classes.inImg} src={images['2.png']} alt="" />
                <div>
                  <p className={classes.dText}>이런 질병이 의심돼요.</p>
                  <p className={classes.info}>
                    당뇨
                    <br />
                    방광염
                  </p>
                </div>
              </div>
              <div>
                <p className={classes.dText}>이렇게 하는게 좋아요.</p>
                <p className={classes.info}>적절한 운동을 통한 체중 관리가 중요해요.</p>
                <p className={classes.info}>
                  평소 물을 잘 먹을 수 있도록 깨끗한 물을 주기적으로 급여해주세요.
                </p>
              </div>
            </Box>
          </Modal>
        </div>
        <div>
          <div className={classes.mainBox} onClick={() => setShowE(true)}>
            <div className={classes.card}>
              <p className={classes.cardText}>소극적이고 무기력해요</p>
              <img className={classes.cardImg} src={images['20.png']} alt="" />
            </div>
          </div>
          <Modal
            open={e}
            onClose={handleCloseE}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className={classes.rowDiv}>
                <img className={classes.inImg} src={images['19.png']} alt="" />
                <div>
                  <p className={classes.dText}>이런 질병이 의심돼요.</p>
                  <p className={classes.info}>우울증</p>
                </div>
              </div>
              <div>
                <p className={classes.dText}>이렇게 하는게 좋아요.</p>
                <p className={classes.info}>스트레스 해소가 중요해요.</p>
                <p className={classes.info}>
                  반려동물이 좋아하는 장난감을 이용하여 신나게 뛰어놀 수 있도록 해주세요.
                </p>
                <p className={classes.info}>규칙적인 수면패턴을 가질 수 있도록 해주세요.</p>
              </div>
            </Box>
          </Modal>
          <div className={classes.mainBox} onClick={() => setShowF(true)}>
            <div className={classes.card}>
              <p className={classes.cardText}>호흡이 이상해요</p>
              <img className={classes.cardImg} src={images['15.png']} alt="" />
            </div>
          </div>
          <Modal
            open={f}
            onClose={handleCloseF}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className={classes.rowDiv}>
                <img className={classes.inImg} src={images['16.png']} alt="" />
                <div>
                  <p className={classes.dText}>이런 질병이 의심돼요.</p>
                  <p className={classes.info}>
                    폐렴
                    <br />
                    기관지염
                  </p>
                </div>
              </div>
              <div>
                <p className={classes.dText}>이렇게 하는게 좋아요.</p>
                <p className={classes.info}>반려동물에게 휴식이 필요해요.</p>
                <p className={classes.info}>강한 운동과 염분이 많은 음식을 피해주세요.</p>
                <p className={classes.info}>폐에 손상이 갈 수 있기때문에 빠른 치료가 필요해요.</p>
              </div>
            </Box>
          </Modal>
          <div className={classes.mainBox} onClick={() => setShowG(true)}>
            <div className={classes.card}>
              <p className={classes.cardText}>구토와 설사를 해요</p>
              <img className={classes.cardImg} src={images['14.png']} alt="" />
            </div>
          </div>
          <Modal
            open={g}
            onClose={handleCloseG}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className={classes.rowDiv}>
                <img className={classes.inImg} src={images['14.png']} alt="" />
                <div>
                  <p className={classes.dText}>이런 질병이 의심돼요.</p>
                  <p className={classes.info}>
                    구토
                    <br />
                    설사
                  </p>
                </div>
              </div>
              <div>
                <p className={classes.dText}>이렇게 하는게 좋아요.</p>
                <p className={classes.info}>
                  급여를 멈추고 탈수가 일어나지 않도록 물만 공급해주세요.
                </p>
                <p className={classes.info}>
                  증상이 호전되면 삶은 닭고기 등 가벼운 음식으로 급여해주세요.
                </p>
              </div>
            </Box>
          </Modal>
          <div className={classes.mainBox} onClick={() => setShowH(true)}>
            <div className={classes.card}>
              <p className={classes.cardText}>눈물이 많고 눈곱이 자주 껴요</p>
              <img className={classes.cardImg} src={images['10.png']} alt="" />
            </div>
          </div>
          <Modal
            open={h}
            onClose={handleCloseH}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className={classes.rowDiv}>
                <img className={classes.inImg} src={images['11.png']} alt="" />
                <div>
                  <p className={classes.dText}>이런 질병이 의심돼요.</p>
                  <p className={classes.info}>
                    유루증
                    <br />
                    결막염
                    <br />
                    각막염
                  </p>
                </div>
              </div>
              <div>
                <p className={classes.dText}>이렇게 하는게 좋아요.</p>
                <p className={classes.info}>눈 주위를 청결하게 해주세요.</p>
                <p className={classes.info}>발로 눈을 긁지 않도록 잘 살펴봐주세요.</p>
                <p className={classes.info}>자외선이 심한 날 산책은 자제해주세요.</p>
                <p className={classes.info}>슬개골 탈구 관련 배상이 있는 보험을 들어두면 좋아요.</p>
              </div>
            </Box>
          </Modal>
        </div>
        <div>
          <div className={classes.mainBox} onClick={() => setShowI(true)}>
            <div className={classes.card}>
              <p className={classes.cardText}>
                귀에서 악취가 나고
                <br />
                분비물이 있어요
              </p>
              <img className={classes.cardImg} src={images['8.png']} alt="" />
            </div>
          </div>
          <Modal
            open={i}
            onClose={handleCloseI}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className={classes.rowDiv}>
                <img className={classes.inImg} src={images['9.png']} alt="" />
                <div>
                  <p className={classes.dText}>이런 질병이 의심돼요.</p>
                  <p className={classes.info}>외이염</p>
                </div>
              </div>
              <div>
                <p className={classes.dText}>이렇게 하는게 좋아요.</p>
                <p className={classes.info}>귀 안쪽 털 관리에 신경써주세요.</p>
                <p className={classes.info}>주기적으로 귀 청소를 해주세요.</p>
                <p className={classes.info}>
                  귀가 건조하게 유지될 수 있도록 목욕 후 잘 말려주세요.
                </p>
              </div>
            </Box>
          </Modal>
          <div className={classes.mainBox} onClick={() => setShowJ(true)}>
            <div className={classes.card}>
              <p className={classes.cardText}>눈동자가 희고 자주 부딛혀요</p>
              <img className={classes.cardImg} src={images['7.png']} alt="" />
            </div>
          </div>
          <Modal
            open={j}
            onClose={handleCloseJ}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className={classes.rowDiv}>
                <img className={classes.inImg} src={images['7.png']} alt="" />
                <div>
                  <p className={classes.dText}>이런 질병이 의심돼요.</p>
                  <p className={classes.info}>백내장</p>
                </div>
              </div>
              <div>
                <p className={classes.dText}>이렇게 하는게 좋아요.</p>
                <p className={classes.info}>자외선이 심한 날 산책은 자제해주세요.</p>
                <p className={classes.info}>정기적인 검사가 필요해요.</p>
                <p className={classes.info}>
                  백내장은 수술이 필요하기 때문에 수술치료비 배상이 있는 보험을 들어두면 좋아요.
                </p>
              </div>
            </Box>
          </Modal>
          <div className={classes.mainBox} onClick={() => setShowK(true)}>
            <div className={classes.card}>
              <p className={classes.cardText}>거품을 물고 경련을 일으켜요</p>
              <img className={classes.cardImg} src={images['22.png']} alt="" />
            </div>
          </div>
          <Modal
            open={k}
            onClose={handleCloseK}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className={classes.rowDiv}>
                <img className={classes.inImg} src={images['21.png']} alt="" />
                <div>
                  <p className={classes.dText}>이런 질병이 의심돼요.</p>
                  <p className={classes.info}>간질</p>
                </div>
              </div>
              <div>
                <p className={classes.dText}>이렇게 하는게 좋아요.</p>
                <p className={classes.info}>
                  강한 빛이나 큰 소리로 반려동물을 자극하는 행동을 피해주세요.
                </p>
                <p className={classes.info}>반려동물에게 영양가 있는 사료를 급여해주세요.</p>
                <p className={classes.info}>염분과 당분이 많은 간식은 피해주세요.</p>
              </div>
            </Box>
          </Modal>
          <div className={classes.mainBox} onClick={() => setShowL(true)}>
            <div className={classes.card}>
              <p className={classes.cardText}>몸에 혹이 생겼어요</p>
              <img className={classes.cardImg} src={images['13.png']} alt="" />
            </div>
          </div>
          <Modal
            open={l}
            onClose={handleCloseL}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className={classes.rowDiv}>
                <img className={classes.inImg} src={images['12.png']} alt="" />
                <div>
                  <p className={classes.dText}>이런 질병이 의심돼요.</p>
                  <p className={classes.info}>
                    피지종
                    <br />
                    지방종
                    <br />
                    림프종
                  </p>
                </div>
              </div>
              <div>
                <p className={classes.dText}>이렇게 하는게 좋아요.</p>
                <p className={classes.info}>
                  면역력을 높이기 위해 영양가 있는 식사를 급여해주세요.
                </p>
                <p className={classes.info}>
                  염증과 종양은 조기 발견이 중요하기 때문에 노령견이라면 피부를 세심하게
                  체크해주세요.
                </p>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
