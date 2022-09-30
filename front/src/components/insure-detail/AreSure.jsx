import React, { Fragment } from 'react';
import HorizonLine from '../common/HorizontalLine';
import { SureScore } from '../common/SureScore';
// import ScoreBar from './ScoreBar';
import { useLocation } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import classes from './AreSure.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export function AreSure() {
  const location = useLocation();
  const locationData = location.state.data;
  const insureScore = locationData.insurance.company_score;
  const guaranteeScore = locationData.price_score;
  const suitScore = locationData.price_score;

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
    <>
      <h3>Are You SURE?</h3>
      <h4>이 보험 얼마나 확신할 수 있나요?</h4>
      <HorizonLine />
      <h1>이 보험의 슈어 점수</h1>
      <h5>'슈어 점수'는 아래의 세 가지 항목을 종합한 수치입니다.</h5>
      <h5>물음표 아이콘을 클릭하시면 각 지수에 대해 더 상세히 알려드려요!</h5>
      <SureScore value={location.state.data.sure_score.toFixed(2)} />
      <h4>sure score</h4>
      <div className={classes.threeScore}>
        <div className={classes.threeText}>
          <p>보험사 신뢰등급</p>
          <p>안심 보장 점수</p>
          <p>예상 적합도</p>
        </div>
        <div className={classes.threeBar}>
          <Progress done={insureScore} />
          <Progress done={guaranteeScore} />
          <Progress done={suitScore} />
        </div>
      </div>
    </>
  );
}
