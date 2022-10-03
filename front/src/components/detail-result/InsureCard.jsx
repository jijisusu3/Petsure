import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from '@mui/material/Button';
import CompareCard from './InsureCompare';
import Card from '@mui/material/Card';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import classes from './InsureCard.module.css';

import cal from '../../images/cal.svg';

import { Chart as ChartJS } from 'chart.js/auto';
// 버전 업글 이후 위에 것 사용 안해도 안 쓰면 오류남
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

const DataComparison = ({ sDatas, pDatas, cDatas, user }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [insId, setInsId] = useState([]);
  const inId = insId.join(':');
  const [sscore, setSscore] = useState([]);
  const [pscore, setPscore] = useState([]);
  const [cscore, setCscore] = useState([]);
  const [mscore, setMscore] = useState([]);

  const addToCompare = item => {
    setSelectedItems(selectedItems => [...selectedItems, item]);
    setInsId(insId => [...insId, item.id]);
    setSscore(sscore => [...sscore, { x: item.id.toString(), y: item.sure_score }]);
    setPscore(pscore => [...pscore, { x: item.id.toString(), y: item.price_score }]);
    setCscore(cscore => [...cscore, { x: item.id.toString(), y: item.insurance.company_score }]);
    setMscore(mscore => [...mscore, { x: item.id.toString(), y: item.matching_score }]);
  };

  const removeFromCompare = item => {
    const filteredItems = selectedItems.filter(data => data.id !== item.id);
    setSelectedItems(selectedItems => filteredItems);
    const filteredIds = insId.filter(data => data !== item.id);
    setInsId(insId => filteredIds);
    const filteredSscore = sscore.filter(data => data.x !== item.id);
    setSscore(sscore => filteredSscore);
    const filteredPscore = pscore.filter(data => data.x !== item.id);
    setPscore(pscore => filteredPscore);
    const filteredCscore = cscore.filter(data => data.x !== item.id);
    setCscore(cscore => filteredCscore);
    const filteredMscore = mscore.filter(data => data.x !== item.id);
    setMscore(mscore => filteredMscore);
  };

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const valuelist = [1, 2, 3, 4, 5, 6, 7, 8];
  function prices(insure) {
    const pricess = valuelist.map(value =>
      insure.basic.filter(one => one.cover_type === value)[0]
        ? insure.basic.filter(one => one.cover_type === value)[0].price
        : insure.special && insure.special.filter(two => two.cover_type === value)[0]
        ? insure.special.filter(two => two.cover_type === value)[0].price
        : '-',
    );
    return pricess;
  }

  // 계산기
  const [text, setText] = useState('');
  const [incentives, setIncentives] = useState([]);
  const register = () => {
    axios
      .get(`https://j7b202.p.ssafy.io/api/calc/${text}/${inId}`)
      .then(response => {
        console.log(response);
        setIncentives(response.data.result);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const onChange = e => {
    setText(e.target.value);
  };

  // graph
  const data = {
    datasets: [
      {
        type: 'line',
        label: '슈어점수',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        data: sscore,
        yAxisID: 'y_sub',
      },
      {
        type: 'bar',
        label: '보험사 신뢰등급',
        backgroundColor: 'rgb(255, 99, 132)',
        data: cscore,
        borderColor: 'red',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: '가격대비 보장점수',
        backgroundColor: 'rgb(75, 192, 192)',
        data: pscore,
        yAxisID: 'y_sub',
        indexAxis: 'x',
      },
      {
        type: 'bar',
        label: '예상 적합도',
        backgroundColor: 'rgb(175, 192, 192)',
        data: mscore,
        yAxisID: 'y_sub',
        indexAxis: 'x',
      },
    ],
  };
  const options = {
    spanGaps: true,
    maxBarThickness: 30,
    grouped: true,
    interaction: {
      mode: 'index',
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          padding: 10,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(124, 35, 35, 0.4)',
        padding: 10,
        bodySpacing: 5,
        usePointStyle: true,
        filter: item => item.parsed.y !== null,
        callbacks: {
          title: context => context[0].label,
          label: context => {
            let label = context.dataset.label + '' || '';

            return context.parsed.y !== null ? label + ': ' + context.parsed.y : null;
          },
        },
      },
    },
    scales: {
      y: [
        {
          ticks: {
            display: false,
          },
        },
      ],
      y_sub: {
        position: 'right',
        ticks: {
          display: false,
        },
      },
    },
  };
  return (
    <>
      {4 > selectedItems.length && selectedItems.length > 1 && (
        <Card className={classes.compareCard}>
          {selectedItems.map(el => (
            <div key={el.id}>
              <img className={classes.compare_logo} alt="insure" src={el.insurance.company_logo} />
              <div>{el.insurance.insurance_name}</div>
            </div>
          ))}
          <Button onClick={handleOpen}>보험 비교하기</Button>
          <Dialog
            PaperProps={{
              style: {
                height: '30000px',
                minWidth: '1000px',
                overflowY: 'scroll',
                display: 'flex',
              },
            }}
            open={open}
            onClose={handleClose}
          >
            <DialogTitle>보험비교</DialogTitle>
            <table>
              <thead>
                <tr>
                  <th>보험상품</th>
                  {selectedItems.map(el => (
                    <th key={el.id}>
                      <img
                        className={classes.compare_logo}
                        alt="insure"
                        src={el.insurance.company_logo}
                      />
                      <div>{el.insurance.insurance_name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <td>
                  <div>보험료</div>
                  <div>약관</div>
                  <div>통원치료비</div>
                  <div>입원치료비</div>
                  <div>수술치료비</div>
                  <div>슬관절</div>
                  <div>피부병</div>
                  <div>구강</div>
                  <div>비뇨기</div>
                  <div>배상책임</div>
                </td>
                {selectedItems.map(el => (
                  <td key={el.id}>
                    <div>{el.fee}</div>
                    <div>&nbsp;</div>
                    {prices(el).map((price, index) => (
                      <div key={index}>
                        {price === '-' ? (
                          <div>{price}</div>
                        ) : (
                          <div>{(price * 10000).toLocaleString() + '원'}</div>
                        )}
                      </div>
                    ))}
                  </td>
                ))}
              </tbody>
            </table>
            <DialogActions />
            <div>
              <Line type="line" data={data} options={options} />
            </div>
            <div className="me-3">
              <div className="d-flex pb-3">
                <img src={cal} alt="" className="pe-3" />
                <div>동물병원에서 통원치료비</div>
              </div>
              <div className="d-flex pb-3">
                <input type="number" onChange={onChange} value={text} />
                <button onClick={() => register()}>원 청구 시</button>
              </div>
              {incentives.map(incentive => (
                <div>
                  <h2>{incentive}</h2>
                  <div>원 보장</div>
                </div>
              ))}
            </div>
            {console.log(sscore)}
          </Dialog>
        </Card>
      )}
      <Tabs defaultActiveKey="슈어 점수 순" id="tab" className="mb-3">
        <Tab eventKey="슈어 점수 순" title="슈어 점수 순">
          {sDatas.map(data => (
            <CompareCard
              key={data.id}
              data={data}
              user={user}
              selected={selectedItems}
              addToCompare={addToCompare}
              removeFromCompare={removeFromCompare}
            />
          ))}
        </Tab>
        <Tab eventKey="낮은 가격 순" title="낮은 가격 순">
          {pDatas.map(data => (
            <CompareCard
              key={data.id}
              data={data}
              user={user}
              selected={selectedItems}
              addToCompare={addToCompare}
              removeFromCompare={removeFromCompare}
            />
          ))}
        </Tab>
        <Tab eventKey="많은 보장 순" title="많은 보장 순">
          {cDatas.map(data => (
            <CompareCard
              key={data.id}
              data={data}
              user={user}
              selected={selectedItems}
              addToCompare={addToCompare}
              removeFromCompare={removeFromCompare}
            />
          ))}
        </Tab>
      </Tabs>
    </>
  );
};

export default DataComparison;
