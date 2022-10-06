import React from 'react';
import { SureScore } from '../common/SureScore';
// import ScoreBar from './ScoreBar';
import { useLocation } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import classes from './AreSure.module.css';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

ChartJS.register(ArcElement, Tooltip, Legend);

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

export function AreSure() {
  const location = useLocation();
  const locationData = location.state.data;
  const insureScore = locationData.insurance.company_score;
  const guaranteeScore = locationData.price_score;
  const suitScore = locationData.matching_score;
  const [a, setShowA] = React.useState(false);
  const [b, setShowB] = React.useState(false);
  const [c, setShowC] = React.useState(false);
  const handleCloseA = () => setShowA(false);
  const handleCloseB = () => setShowB(false);
  const handleCloseC = () => setShowC(false);

  const OneText = ({ scoreName }) => {
    const findModal = scoreName => {
      if (scoreName === '보험사 신뢰 등급') {
        setShowA(true);
      } else if (scoreName === '안심 보장 점수') {
        setShowB(true);
      } else {
        setShowC(true);
      }
    };
    return (
      <div
        style={{
          fontSize: 22,
          fontWeight: 600,
          color: '#7A8982',
          margin: 22,
          marginLeft: 30,
          marginRight: 0,
        }}
      >
        {scoreName}
        <img
          src={`${process.env.PUBLIC_URL}/question.png`}
          alt="q"
          height="28"
          width="28"
          style={{ marginLeft: 14, marginBottom: 4 }}
          className={classes.scoreimg}
          onClick={() => findModal(scoreName)}
        />
      </div>
    );
  };
  const SureIcon = ({ sureScore }) => {
    if (sureScore > 90) {
      return <span>🌞</span>;
    } else if (sureScore > 50) {
      return <span>⛅</span>;
    } else {
      return <span>🔥</span>;
    }
  };
  class Progress extends React.Component {
    state = {
      done: 0,
    };
    componentDidMount() {
      requestAnimationFrame(() => this.setState({ done: this.props.done }));
    }
    render() {
      return (
        <div
          className={classes.progress}
          style={{ transform: `scaleX(${this.state.done / 100})` }}
        />
      );
    }
  }

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        style={{ width: 800 }}
      >
        <p style={{ color: '#F0B622', fontWeight: 600, fontSize: 36, marginTop: 80 }}>
          Are You <span style={{ fontSize: 40, fontWeight: 630 }}>SURE?!</span>
        </p>
        <p style={{ color: '#717171', fontSize: 22, fontWeight: 600 }}>
          이 보험 얼마나{' '}
          <span style={{ fontSize: 30, color: '#F58613', fontWeight: 620 }}>확신</span>할 수 있나요?
        </p>
      </Grid>
      <div className={classes.sureline} />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        style={{ marginBottom: 56, width: 1000 }}
      >
        <div style={{ marginLeft: 20 }}>
          <p style={{ fontSize: 40, fontWeight: 700, marginBottom: 8 }}>
            이 보험의 <span style={{ color: '#F58613' }}>슈어 점수</span>
            <SureIcon sureScore={location.state.data.sure_score.toFixed(2)} />
          </p>
          <p style={{ fontSize: 19, fontWeight: 600, color: '#7A8982', marginBottom: 4 }}>
            '슈어 점수'는 아래의 세 가지 항목을 종합한 수치입니다.
          </p>
          <p style={{ fontSize: 19, fontWeight: 600, color: '#7A8982' }}>
            물음표 아이콘을 클릭하시면 각 지수에 대해 더 상세히 알려드려요!
          </p>
        </div>
        <div>
          <div style={{ width: 250, marginRight: 230 }}>
            <SureScore width="100%" value={location.state.data.sure_score.toFixed(2)} />
          </div>
        </div>
      </Grid>
      <div style={{ marginTop: 0 }}>
        <div className={classes.threeScore}>
          <div className={classes.threeText}>
            <OneText scoreName="보험사 신뢰 등급" />
            <OneText scoreName="안심 보장 점수" />
            <OneText scoreName="예상 적합도" />
          </div>
          <div className={classes.threeInt}>
            <div
              style={{
                fontSize: 18,
                color: '#7A8982',
                marginBottom: 29,
                marginTop: 24,
              }}
            >
              <span style={{ fontWeight: 600 }}>{insureScore.toFixed(1)}</span> / 평균: 80.5
            </div>
            <div
              style={{
                fontSize: 18,
                color: '#7A8982',
                marginBottom: 29,
              }}
            >
              <span style={{ fontWeight: 600 }}>{guaranteeScore.toFixed(1)}</span> / 평균: 80.2
            </div>
            <div
              style={{
                fontSize: 18,
                color: '#7A8982',
                marginBottom: 20,
              }}
            >
              <span style={{ fontWeight: 600 }}>{suitScore.toFixed(1)}</span> / 평균: 91.1
            </div>
          </div>
          <div className={classes.threeBar}>
            <Progress done={insureScore} />
            <Progress done={guaranteeScore} />
            <Progress done={suitScore} />
          </div>
          <Modal
            open={a}
            onClose={handleCloseA}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Grid container direction="row" alignItems="center">
                <Grid className="ps-2">
                  <p
                    style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }}
                    className="pb-3"
                  >
                    회사 신뢰 등급
                    <span
                      style={{ fontWeight: 'bold', fontSize: 22, color: '#7A8982', marginLeft: 20 }}
                    >
                      이렇게 만들었어요 !
                    </span>
                  </p>
                </Grid>
              </Grid>
              <Grid>
                <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
                  고객이 보험사를 얼마나 신뢰할 수 있는지를 판별할 수 있는 등급이에요.
                </p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                  손해보험협회에서 소비자를 위해 공시하는 데이터를 기반으로 만들었어요.
                </p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                  펫슈어는 각 보험사의 보험금 부지급률, 보험 청구 후 해지율, 불완전 판매율,
                </p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                  지급지연률을 이용해 회사지수를 산출했어요.
                </p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                  각 회사가 어느 정도로 고객과의 약속을 잘 이행하고 있는지 나타내며,
                </p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                  A / B / C 등급으로 구분해서 제공합니다.
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
                  <p
                    style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }}
                    className="pb-3"
                  >
                    안심 보장 점수
                    <span
                      style={{ fontWeight: 'bold', fontSize: 22, color: '#7A8982', marginLeft: 20 }}
                    >
                      이렇게 만들었어요 !
                    </span>
                  </p>
                </Grid>
              </Grid>
              <Grid>
                <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
                  내 반려동물이 아팠을 때, 얼마나 많은 보장을 받을 수 있는지 판단한 점수에요.
                </p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                  각 보험의 1회 최대 보장 금액, 연간 최대 보장 가능 횟수(금액), 자기부담금,
                </p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                  보장비율을 참고해 만들었어요.
                </p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                  지급지연률을 이용해 회사지수를 산출했어요.
                </p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                  갑자기 찾아올 수 있는 반려동물의 질병 / 상해, 동물병원 진료비가 걱정이라면
                </p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                  안심 보장 점수가 높은 보험을 선택하는 것을 추천드려요.
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
                  <p
                    style={{ fontWeight: 'bold', color: '#F58613', fontSize: 30 }}
                    className="pb-3"
                  >
                    예상적합도
                    <span
                      style={{ fontWeight: 'bold', fontSize: 22, color: '#7A8982', marginLeft: 20 }}
                    >
                      이렇게 만들었어요 !
                    </span>
                  </p>
                </Grid>
              </Grid>
              <Grid>
                <p style={{ fontWeight: 'bold', fontSize: 20, marginTop: 2 }} className="py-2">
                  해당 보험을 선택한 사람들이 나와 얼마나 유사한지 판단한 점수에요.
                </p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                  나와 비슷한 보장을 원하는 고객들이 얼마나 많이 해당 보험을 선택했는지를
                </p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                  기준으로 상세 보험을 추천해줍니다.
                </p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                  나와 비슷한 생각을 가진 사용자가 반려동물을 위해
                </p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                  꼼꼼히 따져보고 선택한 결과를 한 번에 파악해볼 수 있습니다.
                </p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }} className="py-2">
                  오직 펫슈어에서만 확인할 수 있는 정보입니다.
                </p>
              </Grid>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
