import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

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
    <Grid container justifyContent="center">
      <Grid item md={3} container justifyContent="center" variant="link">
        <Card
          sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }}
          justifyContent="center"
          onClick={() => setShowA(true)}
        >
          <CardContent>
            <Typography
              className="pt-3"
              sx={{ fontSize: 16, color: '#ffffff', fontWeight: 'bold' }}
              align="center"
              component="div"
            >
              갑자기 절뚝거려요
            </Typography>
            <Grid container justifyContent="center">
              <img src={images['5.png']} alt="" style={{ width: 200, height: 200 }} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Modal
        open={a}
        onClose={handleCloseA}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center" className="p-3">
            <img src={images['6.png']} alt="" style={{ width: 150, height: 150 }} />
            <Grid className="ps-5">
              <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="pb-3">
                이런 질병이 의심돼요.
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
                슬개골 탈구
                <br />
                관절염
              </Typography>
            </Grid>
          </Grid>
          <Grid className="p-3">
            <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="py-3">
              이렇게 하는게 좋아요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              두발로 서지 못하게 막아주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              평소 털 관리를 잘 하고, 미끄럼 방지 매트를 깔아주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              적절한 운동을 통한 체중과 근육을 관리해주면 좋아요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              슬개골 탈구 관련 배상이 있는 보험을 들어두면 좋아요.
            </Typography>
          </Grid>
        </Box>
      </Modal>
      <Grid item md={3} container justifyContent="center">
        <Card
          sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }}
          justifyContent="center"
          onClick={() => setShowB(true)}
        >
          <CardContent>
            <Typography
              className="pt-3"
              sx={{ fontSize: 16, color: '#ffffff', fontWeight: 'bold' }}
              align="center"
              component="div"
            >
              털이 많이 빠지고 자주 긁어요
            </Typography>
            <Grid container justifyContent="center">
              <img src={images['3.png']} alt="" style={{ width: 200, height: 200 }} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Modal
        open={b}
        onClose={handleCloseB}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center" className="p-3">
            <img src={images['4.png']} alt="" style={{ width: 150, height: 150 }} />
            <Grid className="ps-5">
              <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="pb-3">
                이런 질병이 의심돼요.
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
                피부염
                <br />
                백선
                <br />
                탈모증
              </Typography>
            </Grid>
          </Grid>
          <Grid className="p-3">
            <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="py-3">
              이렇게 하는게 좋아요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              잦은 목욕은 반려동물의 피부에 자극이 될 수 있어요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              반려동물이 좋아하는 장난감을 청결하게 유지해 주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              적절한 습도와 온도를 유지하며 털 관리에도 신경써주세요.
            </Typography>
          </Grid>
        </Box>
      </Modal>
      <Grid item md={3} container justifyContent="center">
        <Card
          sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }}
          justifyContent="center"
          onClick={() => setShowC(true)}
        >
          <CardContent>
            <Typography
              className="pt-3"
              sx={{ fontSize: 16, color: '#ffffff', fontWeight: 'bold' }}
              align="center"
              component="div"
            >
              입냄새가 심해졌어요
            </Typography>
            <Grid container justifyContent="center">
              <img src={images['23.png']} alt="" style={{ width: 200, height: 200 }} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Modal
        open={c}
        onClose={handleCloseC}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center" className="p-3">
            <img src={images['24.png']} alt="" style={{ width: 150, height: 150 }} />
            <Grid className="ps-5">
              <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="pb-3">
                이런 질병이 의심돼요.
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
                구내염
                <br />
                충치
              </Typography>
            </Grid>
          </Grid>
          <Grid className="p-3">
            <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="py-3">
              이렇게 하는게 좋아요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              반려동물이 섭취하는 간식이나 사료가 너무 딱딱하지는 않은지 확인해주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              날카로운 장난감을 입에 넣지 않도록 유의해주세요.
            </Typography>
          </Grid>
        </Box>
      </Modal>
      <Grid item md={3} container justifyContent="center">
        <Card
          sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }}
          justifyContent="center"
          onClick={() => setShowD(true)}
        >
          <CardContent>
            <Typography
              className="pt-3"
              sx={{ fontSize: 16, color: '#ffffff', fontWeight: 'bold' }}
              align="center"
              component="div"
            >
              배뇨가 잦거나
              <br />
              피가 섞여 나와요
            </Typography>
            <Grid container justifyContent="center">
              <img src={images['1.png']} alt="" style={{ width: 200, height: 200 }} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Modal
        open={d}
        onClose={handleCloseD}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center" className="p-3">
            <img src={images['2.png']} alt="" style={{ width: 150, height: 150 }} />
            <Grid className="ps-5">
              <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="pb-3">
                이런 질병이 의심돼요.
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
                당뇨
                <br />
                방광염
              </Typography>
            </Grid>
          </Grid>
          <Grid className="p-3">
            <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="py-3">
              이렇게 하는게 좋아요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              적절한 운동을 통한 체중 관리가 중요해요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              평소 물을 잘 먹을 수 있도록 깨끗한 물을 주기적으로 급여해주세요.
            </Typography>
          </Grid>
        </Box>
      </Modal>
      <Grid item md={3} container justifyContent="center">
        <Card
          sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }}
          justifyContent="center"
          onClick={() => setShowE(true)}
        >
          <CardContent>
            <Typography
              className="pt-3"
              sx={{ fontSize: 16, color: '#ffffff', fontWeight: 'bold' }}
              align="center"
              component="div"
            >
              소극적이고 무기력해요
            </Typography>
            <Grid container justifyContent="center">
              <img src={images['20.png']} alt="" style={{ width: 200, height: 200 }} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Modal
        open={e}
        onClose={handleCloseE}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center" className="p-3">
            <img src={images['19.png']} alt="" style={{ width: 150, height: 150 }} />
            <Grid className="ps-5">
              <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="pb-3">
                이런 질병이 의심돼요.
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>우울증</Typography>
            </Grid>
          </Grid>
          <Grid className="p-3">
            <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="py-3">
              이렇게 하는게 좋아요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              스트레스 해소가 중요해요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              반려동물이 좋아하는 장난감을 이용하여 신나게 뛰어놀 수 있도록 해주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              규칙적인 수면패턴을 가질 수 있도록 해주세요.
            </Typography>
          </Grid>
        </Box>
      </Modal>
      <Grid item md={3} container justifyContent="center">
        <Card
          sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }}
          justifyContent="center"
          onClick={() => setShowF(true)}
        >
          <CardContent>
            <Typography
              className="pt-3"
              sx={{ fontSize: 16, color: '#ffffff', fontWeight: 'bold' }}
              align="center"
              component="div"
            >
              호흡이 이상해요
            </Typography>
            <Grid container justifyContent="center">
              <img src={images['15.png']} alt="" style={{ width: 200, height: 200 }} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Modal
        open={f}
        onClose={handleCloseF}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center" className="p-3">
            <img src={images['16.png']} alt="" style={{ width: 150, height: 150 }} />
            <Grid className="ps-5">
              <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="pb-3">
                이런 질병이 의심돼요.
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
                폐렴
                <br />
                기관지염
              </Typography>
            </Grid>
          </Grid>
          <Grid className="p-3">
            <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="py-3">
              이렇게 하는게 좋아요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              반려동물에게 휴식이 필요해요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              강한 운동과 염분이 많은 음식을 피해주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              폐에 손상이 갈 수 있기때문에 빠른 치료가 필요해요.
            </Typography>
          </Grid>
        </Box>
      </Modal>
      <Grid item md={3} container justifyContent="center">
        <Card
          sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }}
          justifyContent="center"
          onClick={() => setShowG(true)}
        >
          <CardContent>
            <Typography
              className="pt-3"
              sx={{ fontSize: 16, color: '#ffffff', fontWeight: 'bold' }}
              align="center"
              component="div"
            >
              구토와 설사를 해요
            </Typography>
            <Grid container justifyContent="center">
              <img src={images['14.png']} alt="" style={{ width: 200, height: 200 }} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Modal
        open={g}
        onClose={handleCloseG}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center" className="p-3">
            <img src={images['14.png']} alt="" style={{ width: 150, height: 150 }} />
            <Grid className="ps-5">
              <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="pb-3">
                이런 질병이 의심돼요.
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
                구토
                <br />
                설사
              </Typography>
            </Grid>
          </Grid>
          <Grid className="p-3">
            <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="py-3">
              이렇게 하는게 좋아요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              급여를 멈추고 탈수가 일어나지 않도록 물만 공급해주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              증상이 호전되면 삶은 닭고기 등 가벼운 음식으로 급여해주세요.
            </Typography>
          </Grid>
        </Box>
      </Modal>
      <Grid item md={3} container justifyContent="center">
        <Card
          sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }}
          justifyContent="center"
          onClick={() => setShowH(true)}
        >
          <CardContent>
            <Typography
              className="pt-3"
              sx={{ fontSize: 16, color: '#ffffff', fontWeight: 'bold' }}
              align="center"
              component="div"
            >
              눈물이 많고 눈곱이 자주 껴요
            </Typography>
            <Grid container justifyContent="center">
              <img src={images['10.png']} alt="" style={{ width: 200, height: 200 }} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Modal
        open={h}
        onClose={handleCloseH}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center" className="p-3">
            <img src={images['11.png']} alt="" style={{ width: 150, height: 150 }} />
            <Grid className="ps-5">
              <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="pb-3">
                이런 질병이 의심돼요.
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
                유루증
                <br />
                결막염
                <br />
                각막염
              </Typography>
            </Grid>
          </Grid>
          <Grid className="p-3">
            <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="py-3">
              이렇게 하는게 좋아요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              눈 주위를 청결하게 해주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              발로 눈을 긁지 않도록 잘 살펴봐주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              자외선이 심한 날 산책은 자제해주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              슬개골 탈구 관련 배상이 있는 보험을 들어두면 좋아요.
            </Typography>
          </Grid>
        </Box>
      </Modal>
      <Grid item md={3} container justifyContent="center">
        <Card
          sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }}
          justifyContent="center"
          onClick={() => setShowI(true)}
        >
          <CardContent>
            <Typography
              className="pt-3"
              sx={{ fontSize: 16, color: '#ffffff', fontWeight: 'bold' }}
              align="center"
              component="div"
            >
              귀에서 악취가 나고
              <br />
              분비물이 있어요
            </Typography>
            <Grid container justifyContent="center">
              <img src={images['8.png']} alt="" style={{ width: 200, height: 200 }} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Modal
        open={i}
        onClose={handleCloseI}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center" className="p-3">
            <img src={images['9.png']} alt="" style={{ width: 150, height: 150 }} />
            <Grid className="ps-5">
              <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="pb-3">
                이런 질병이 의심돼요.
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>외이염</Typography>
            </Grid>
          </Grid>
          <Grid className="p-3">
            <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="py-3">
              이렇게 하는게 좋아요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              귀 안쪽 털 관리에 신경써주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              주기적으로 귀 청소를 해주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              귀가 건조하게 유지될 수 있도록 목욕 후 잘 말려주세요.
            </Typography>
          </Grid>
        </Box>
      </Modal>
      <Grid item md={3} container justifyContent="center">
        <Card
          sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }}
          justifyContent="center"
          onClick={() => setShowJ(true)}
        >
          <CardContent>
            <Typography
              className="pt-3"
              sx={{ fontSize: 16, color: '#ffffff', fontWeight: 'bold' }}
              align="center"
              component="div"
            >
              눈동자가 희고 자주 부딛혀요
            </Typography>
            <Grid container justifyContent="center">
              <img src={images['7.png']} alt="" style={{ width: 200, height: 200 }} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Modal
        open={j}
        onClose={handleCloseJ}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center" className="p-3">
            <img src={images['7.png']} alt="" style={{ width: 150, height: 150 }} />
            <Grid className="ps-5">
              <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="pb-3">
                이런 질병이 의심돼요.
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>백내장</Typography>
            </Grid>
          </Grid>
          <Grid className="p-3">
            <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="py-3">
              이렇게 하는게 좋아요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              자외선이 심한 날 산책은 자제해주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              정기적인 검사가 필요해요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              백내장은 수술이 필요하기 때문에 수술치료비 배상이 있는 보험을 들어두면 좋아요.
            </Typography>
          </Grid>
        </Box>
      </Modal>
      <Grid item md={3} container justifyContent="center">
        <Card
          sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }}
          justifyContent="center"
          onClick={() => setShowK(true)}
        >
          <CardContent>
            <Typography
              className="pt-3"
              sx={{ fontSize: 16, color: '#ffffff', fontWeight: 'bold' }}
              align="center"
              component="div"
            >
              거품을 물고 경련을 일으켜요
            </Typography>
            <Grid container justifyContent="center">
              <img src={images['22.png']} alt="" style={{ width: 200, height: 200 }} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Modal
        open={k}
        onClose={handleCloseK}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center" className="p-3">
            <img src={images['21.png']} alt="" style={{ width: 150, height: 150 }} />
            <Grid className="ps-5">
              <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="pb-3">
                이런 질병이 의심돼요.
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>간질</Typography>
            </Grid>
          </Grid>
          <Grid className="p-3">
            <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="py-3">
              이렇게 하는게 좋아요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              강한 빛이나 큰 소리로 반려동물을 자극하는 행동을 피해주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              반려동물에게 영양가 있는 사료를 급여해주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              염분과 당분이 많은 간식은 피해주세요.
            </Typography>
          </Grid>
        </Box>
      </Modal>
      <Grid item md={3} container justifyContent="center">
        <Card
          sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }}
          justifyContent="center"
          onClick={() => setShowL(true)}
        >
          <CardContent>
            <Typography
              className="pt-3"
              sx={{ fontSize: 16, color: '#ffffff', fontWeight: 'bold' }}
              align="center"
              component="div"
            >
              몸에 혹이 생겼어요
            </Typography>
            <Grid container justifyContent="center">
              <img src={images['13.png']} alt="" style={{ width: 200, height: 200 }} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Modal
        open={l}
        onClose={handleCloseL}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center" className="p-3">
            <img src={images['12.png']} alt="" style={{ width: 150, height: 150 }} />
            <Grid className="ps-5">
              <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="pb-3">
                이런 질병이 의심돼요.
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
                피지종
                <br />
                지방종
                <br />
                림프종
              </Typography>
            </Grid>
          </Grid>
          <Grid className="p-3">
            <Typography sx={{ fontWeight: 'bold' }} variant="h6" className="py-3">
              이렇게 하는게 좋아요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              면역력을 높이기 위해 영양가 있는 식사를 급여해주세요.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }} className="py-1">
              염증과 종양은 조기 발견이 중요하기 때문에 노령견이라면 피부를 세심하게 체크해주세요.
            </Typography>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
}
