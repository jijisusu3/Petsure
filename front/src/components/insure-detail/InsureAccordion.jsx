import React from 'react';
import { useLocation } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import classes from './InsureAccordion.module.css';
const coverType = {
  0: '좋은상품',
  1: '통원치료비',
  2: '입원치료비',
  3: '수술치료비',
  4: '슬관절',
  5: '피부병',
  6: '구강',
  7: '비뇨기',
  8: '배상책임',
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 850,
  height: 470,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 8,
  outline: 'none',
  borderRadius: '20px',
};

export function InsureBasicAccordion() {
  const location = useLocation();
  const bdatas = location.state.data.basic;
  const [a, setShowA] = React.useState(false);
  const [b, setShowB] = React.useState(false);
  const [c, setShowC] = React.useState(false);
  const [d, setShowD] = React.useState(false);
  const [e, setShowE] = React.useState(false);
  const [f, setShowF] = React.useState(false);
  const [g, setShowG] = React.useState(false);
  const [h, setShowH] = React.useState(false);
  const handleCloseA = () => setShowA(false);
  const handleCloseB = () => setShowB(false);
  const handleCloseC = () => setShowC(false);
  const handleCloseD = () => setShowD(false);
  const handleCloseE = () => setShowE(false);
  const handleCloseF = () => setShowF(false);
  const handleCloseG = () => setShowG(false);
  const handleCloseH = () => setShowH(false);

  const findModal = scoreName => {
    if (scoreName === '통원치료비') {
      setShowA(true);
    } else if (scoreName === '입원치료비') {
      setShowB(true);
    } else if (scoreName === '수술치료비') {
      setShowC(true);
    } else if (scoreName === '슬관절') {
      setShowD(true);
    } else if (scoreName === '피부병') {
      setShowE(true);
    } else if (scoreName === '구강') {
      setShowF(true);
    } else if (scoreName === '비뇨기') {
      setShowG(true);
    } else {
      setShowH(true);
    }
  };
  return bdatas.map(data => (
    <div>
      <Accordion key={data.cover_type} className="accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <table>
            <tr>
              <td className={classes.width_14em_basic_td_middle}>
                {coverType[data.cover_type]}
                <img
                  src={`${process.env.PUBLIC_URL}/question.png`}
                  alt="q"
                  height="24"
                  width="24"
                  style={{ marginLeft: 14, marginBottom: 4 }}
                  className={classes.scoreimg}
                  onClick={() => findModal(coverType[data.cover_type])}
                />
              </td>
              <td>{data.detail.split(':')[0]}</td>
            </tr>
          </table>
        </AccordionSummary>
        <AccordionDetails className="accordionText">
          <table>
            <tr>
              <td className={classes.width_14em}> &nbsp;</td>
              <td> {data.detail.split(':')[1]}</td>
            </tr>
          </table>
        </AccordionDetails>
      </Accordion>
      <Modal
        open={a}
        onClose={handleCloseA}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center">
            <Grid className="ps-2">
              <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                통원치료비
              </p>
            </Grid>
          </Grid>
          <Grid>
            <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
              반려동물이 아프거나 다쳐서 병원에 내원해서 치료를 받은 경우에
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              발생한 치료비를 보장해줍니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              일 단위로 지급되며, 청구된 치료비에서 자기부담금을 제외한 금액에 대해
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              각 보험의 보장 한도 내에서 치료비를 반환받을 수 있습니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              ※자세한 사항은 약관을 참조하세요.
            </p>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={b}
        onClose={handleCloseB}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center">
            <Grid className="ps-2">
              <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                입원치료비
              </p>
            </Grid>
          </Grid>
          <Grid>
            <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
              반려동물이 아프거나 다쳐서 병원에 입원해서 치료를 받은 경우에
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              발생한 치료비를 보장해줍니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              일 단위로 지급되며, 청구된 치료비에서 자기부담금을 제외한 금액에 대해
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              각 보험의 보장 한도 내에서 치료비를 반환받을 수 있습니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              ※자세한 사항은 약관을 참조하세요.
            </p>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={c}
        onClose={handleCloseC}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center">
            <Grid className="ps-2">
              <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                수술치료비
              </p>
            </Grid>
          </Grid>
          <Grid>
            <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
              반려동물이 아프거나 다쳐서 병원에서 수술을 받은 경우에 발생한 치료비를 보장해줍니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              건 단위로 지급되며, 청구된 치료비에서 자기부담금을 제외한 금액에 대해
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              각 보험의 보장 한도 내에서 치료비를 반환받을 수 있습니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              ※자세한 사항은 약관을 참조하세요.
            </p>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={d}
        onClose={handleCloseD}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center">
            <Grid className="ps-2">
              <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                슬관절
              </p>
            </Grid>
          </Grid>
          <Grid>
            <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
              슬관절(대퇴골, 경골, 슬개골)을 원인으로 하여 발생한 치료비에 대해 보장해줍니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              각 보험별로 슬관절 치료비가 입/통원 치료비와 수술 치료비에 포함되는 경우가 있고,
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              특약 사항에 따라 슬관절 관련 질병을 개별적으로 보장해주는 경우가 있습니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              ※자세한 사항은 약관을 참조하세요.
            </p>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={e}
        onClose={handleCloseE}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center">
            <Grid className="ps-2">
              <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                피부병
              </p>
            </Grid>
          </Grid>
          <Grid>
            <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
              피부병을 원인으로 하여 발생한 치료비에 대해 보장해줍니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              각 보험별로 피부병 치료비가 입/통원 치료비와 수술 치료비에 포함되는 경우가 있고,
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              특약 사항에 따라 피부병 관련 질병을 개별적으로 보장해주는 경우가 있습니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              ※자세한 사항은 약관을 참조하세요.
            </p>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={f}
        onClose={handleCloseF}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center">
            <Grid className="ps-2">
              <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                구강
              </p>
            </Grid>
          </Grid>
          <Grid>
            <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
              치과치료, 구강 내 질환을 원인으로 하여 발생한 치료비에 대해 보장해줍니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              각 보험별로 구강 치료비가 입/통원 치료비와 수술 치료비에 포함되는 경우가 있고,
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              특약 사항에 따라 구강 관련 질병을 개별적으로 보장해주는 경우가 있습니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              ※자세한 사항은 약관을 참조하세요.
            </p>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={g}
        onClose={handleCloseG}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center">
            <Grid className="ps-2">
              <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                비뇨기
              </p>
            </Grid>
          </Grid>
          <Grid>
            <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
              비뇨기 질환을 원인으로 하여 발생한 치료비에 대해 보장해줍니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              각 보험별로 비뇨기 치료비가 입/통원 치료비와 수술 치료비에 포함되는 경우가 있고,
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              특약 사항에 따라 비뇨기 관련 질병을 개별적으로 보장해주는 경우가 있습니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              ※자세한 사항은 약관을 참조하세요.
            </p>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={h}
        onClose={handleCloseH}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="row" alignItems="center">
            <Grid className="ps-2">
              <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                배상책임
              </p>
            </Grid>
          </Grid>
          <Grid>
            <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
              반려동물의 행위를 원인으로 하여 피해자에게 상해나 질병 및
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              그로인한 사망 사고가 발생했거나, 피해자에게 손해를 입혀
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              배상해야 하는 경우에 대해 보장해줍니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              건 단위로 지급되며, 청구된 배상금에서 자기부담금을 제외한 금액에 대해
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              각 보험의 보장 한도 내에서 보장받을 수 있습니다.
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
              ※자세한 사항은 약관을 참조하세요.
            </p>
          </Grid>
        </Box>
      </Modal>
    </div>
  ));
}

export function InsureSpecialAccordion() {
  const location = useLocation();
  const [a, setShowA] = React.useState(false);
  const [b, setShowB] = React.useState(false);
  const [c, setShowC] = React.useState(false);
  const [d, setShowD] = React.useState(false);
  const [e, setShowE] = React.useState(false);
  const [f, setShowF] = React.useState(false);
  const [g, setShowG] = React.useState(false);
  const [h, setShowH] = React.useState(false);
  const handleCloseA = () => setShowA(false);
  const handleCloseB = () => setShowB(false);
  const handleCloseC = () => setShowC(false);
  const handleCloseD = () => setShowD(false);
  const handleCloseE = () => setShowE(false);
  const handleCloseF = () => setShowF(false);
  const handleCloseG = () => setShowG(false);
  const handleCloseH = () => setShowH(false);

  const findModal = scoreName => {
    if (scoreName === '통원치료비') {
      setShowA(true);
    } else if (scoreName === '입원치료비') {
      setShowB(true);
    } else if (scoreName === '수술치료비') {
      setShowC(true);
    } else if (scoreName === '슬관절') {
      setShowD(true);
    } else if (scoreName === '피부병') {
      setShowE(true);
    } else if (scoreName === '구강') {
      setShowF(true);
    } else if (scoreName === '비뇨기') {
      setShowG(true);
    } else {
      setShowH(true);
    }
  };
  if (location.state.data.special) {
    const sdatas = location.state.data.special;
    return sdatas.map(data => (
      <div>
        <Accordion key={data.cover_type} className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <table>
              <tr>
                <td className={classes.width_14em_basic_td_middle}>
                  {coverType[data.cover_type]}
                  <img
                    src={`${process.env.PUBLIC_URL}/question.png`}
                    alt="q"
                    height="24"
                    width="24"
                    style={{ marginLeft: 14, marginBottom: 4 }}
                    className={classes.scoreimg}
                    onClick={() => findModal(coverType[data.cover_type])}
                  />
                </td>
                <td>{data.detail.split(':')[0]}</td>
              </tr>
            </table>
          </AccordionSummary>
          <AccordionDetails className="accordionText">
            <table>
              <tr>
                <td className={classes.width_14em}> &nbsp;</td>
                <td>{data.detail.split(':')[1]}</td>
              </tr>
            </table>
          </AccordionDetails>
        </Accordion>
        <Modal
          open={a}
          onClose={handleCloseA}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container direction="row" alignItems="center">
              <Grid className="ps-2">
                <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                  통원치료비
                </p>
              </Grid>
            </Grid>
            <Grid>
              <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
                반려동물이 아프거나 다쳐서 병원에 내원해서 치료를 받은 경우에
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                발생한 치료비를 보장해줍니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                일 단위로 지급되며, 청구된 치료비에서 자기부담금을 제외한 금액에 대해
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                각 보험의 보장 한도 내에서 치료비를 반환받을 수 있습니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                ※자세한 사항은 약관을 참조하세요.
              </p>
            </Grid>
          </Box>
        </Modal>
        <Modal
          open={b}
          onClose={handleCloseB}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container direction="row" alignItems="center">
              <Grid className="ps-2">
                <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                  입원치료비
                </p>
              </Grid>
            </Grid>
            <Grid>
              <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
                반려동물이 아프거나 다쳐서 병원에 입원해서 치료를 받은 경우에
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                발생한 치료비를 보장해줍니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                일 단위로 지급되며, 청구된 치료비에서 자기부담금을 제외한 금액에 대해
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                각 보험의 보장 한도 내에서 치료비를 반환받을 수 있습니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                ※자세한 사항은 약관을 참조하세요.
              </p>
            </Grid>
          </Box>
        </Modal>
        <Modal
          open={c}
          onClose={handleCloseC}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container direction="row" alignItems="center">
              <Grid className="ps-2">
                <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                  수술치료비
                </p>
              </Grid>
            </Grid>
            <Grid>
              <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
                반려동물이 아프거나 다쳐서 병원에서 수술을 받은 경우에 발생한 치료비를 보장해줍니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                건 단위로 지급되며, 청구된 치료비에서 자기부담금을 제외한 금액에 대해
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                각 보험의 보장 한도 내에서 치료비를 반환받을 수 있습니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                ※자세한 사항은 약관을 참조하세요.
              </p>
            </Grid>
          </Box>
        </Modal>
        <Modal
          open={d}
          onClose={handleCloseD}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container direction="row" alignItems="center">
              <Grid className="ps-2">
                <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                  슬관절
                </p>
              </Grid>
            </Grid>
            <Grid>
              <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
                슬관절(대퇴골, 경골, 슬개골)을 원인으로 하여 발생한 치료비에 대해 보장해줍니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                각 보험별로 슬관절 치료비가 입/통원 치료비와 수술 치료비에 포함되는 경우가 있고,
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                특약 사항에 따라 슬관절 관련 질병을 개별적으로 보장해주는 경우가 있습니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                ※자세한 사항은 약관을 참조하세요.
              </p>
            </Grid>
          </Box>
        </Modal>
        <Modal
          open={e}
          onClose={handleCloseE}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container direction="row" alignItems="center">
              <Grid className="ps-2">
                <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                  피부병
                </p>
              </Grid>
            </Grid>
            <Grid>
              <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
                피부병을 원인으로 하여 발생한 치료비에 대해 보장해줍니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                각 보험별로 피부병 치료비가 입/통원 치료비와 수술 치료비에 포함되는 경우가 있고,
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                특약 사항에 따라 피부병 관련 질병을 개별적으로 보장해주는 경우가 있습니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                ※자세한 사항은 약관을 참조하세요.
              </p>
            </Grid>
          </Box>
        </Modal>
        <Modal
          open={f}
          onClose={handleCloseF}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container direction="row" alignItems="center">
              <Grid className="ps-2">
                <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                  구강
                </p>
              </Grid>
            </Grid>
            <Grid>
              <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
                치과치료, 구강 내 질환을 원인으로 하여 발생한 치료비에 대해 보장해줍니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                각 보험별로 구강 치료비가 입/통원 치료비와 수술 치료비에 포함되는 경우가 있고,
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                특약 사항에 따라 구강 관련 질병을 개별적으로 보장해주는 경우가 있습니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                ※자세한 사항은 약관을 참조하세요.
              </p>
            </Grid>
          </Box>
        </Modal>
        <Modal
          open={g}
          onClose={handleCloseG}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container direction="row" alignItems="center">
              <Grid className="ps-2">
                <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                  비뇨기
                </p>
              </Grid>
            </Grid>
            <Grid>
              <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
                비뇨기 질환을 원인으로 하여 발생한 치료비에 대해 보장해줍니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                각 보험별로 비뇨기 치료비가 입/통원 치료비와 수술 치료비에 포함되는 경우가 있고,
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                특약 사항에 따라 비뇨기 관련 질병을 개별적으로 보장해주는 경우가 있습니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                ※자세한 사항은 약관을 참조하세요.
              </p>
            </Grid>
          </Box>
        </Modal>
        <Modal
          open={h}
          onClose={handleCloseH}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container direction="row" alignItems="center">
              <Grid className="ps-2">
                <p style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }} className="pb-3">
                  배상책임
                </p>
              </Grid>
            </Grid>
            <Grid>
              <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
                반려동물의 행위를 원인으로 하여 피해자에게 상해나 질병 및
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                그로인한 사망 사고가 발생했거나, 피해자에게 손해를 입혀
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                배상해야 하는 경우에 대해 보장해줍니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                건 단위로 지급되며, 청구된 배상금에서 자기부담금을 제외한 금액에 대해
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                각 보험의 보장 한도 내에서 보장받을 수 있습니다.
              </p>
              <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                ※자세한 사항은 약관을 참조하세요.
              </p>
            </Grid>
          </Box>
        </Modal>
      </div>
    ));
  } else {
    return (
      <table>
        <tr>
          <td className={classes.width_14em_basic_td_middle}>특약이 선택되지 않은 상품입니다.</td>
        </tr>
      </table>
    );
  }
}
