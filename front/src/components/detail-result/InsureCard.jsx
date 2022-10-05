import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TopCard from './TopCard';
import CompareCard from './InsureCompare';
import Card from '@mui/material/Card';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import classes from './InsureCard.module.css';

import CompareGraph from './CompareGraph';

import cal from '../../images/cal.svg';

const DataComparison = ({ sDatas, pDatas, cDatas, user }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [insId, setInsId] = useState([]);
  const inId = insId.join(':');
  const [sscore, setSscore] = useState([]);
  const [pscore, setPscore] = useState([]);
  const [cscore, setCscore] = useState([]);
  const [mscore, setMscore] = useState([]);

  const addToCompare = item => {
    if (selectedItems.length < 3) {
      setSelectedItems(selectedItems => [...selectedItems, item]);
      setInsId(insId => [...insId, item.id]);
      setSscore(sscore => [
        ...sscore,
        { x: item.id.toString(), y: item.sure_score.toFixed(2) - 65 },
      ]);
      setPscore(pscore => [
        ...pscore,
        { x: item.id.toString(), y: item.price_score.toFixed(2) - 65 },
      ]);
      setCscore(cscore => [
        ...cscore,
        { x: item.id.toString(), y: item.insurance.company_score.toFixed(2) - 65 },
      ]);
      setMscore(mscore => [
        ...mscore,
        { x: item.id.toString(), y: item.matching_score.toFixed(2) - 65 },
      ]);
    } else {
      alert('보험은 3개까지만 선택 가능합니다.');
      const filteredItems = selectedItems.filter(data => data.id !== item.id);
      setSelectedItems(selectedItems => filteredItems);
      const filteredIds = insId.filter(data => data !== item.id);
      setInsId(insId => filteredIds);
      const filteredSscore = sscore.filter(data => Number(data.x) !== item.id);
      setSscore(sscore => filteredSscore);
      const filteredPscore = pscore.filter(data => Number(data.x) !== item.id);
      setPscore(pscore => filteredPscore);
      const filteredCscore = cscore.filter(data => Number(data.x) !== item.id);
      setCscore(cscore => filteredCscore);
      const filteredMscore = mscore.filter(data => Number(data.x) !== item.id);
      setMscore(mscore => filteredMscore);
    }
  };

  const removeFromCompare = item => {
    const filteredItems = selectedItems.filter(data => data.id !== item.id);
    setSelectedItems(selectedItems => filteredItems);
    const filteredIds = insId.filter(data => data !== item.id);
    setInsId(insId => filteredIds);
    const filteredSscore = sscore.filter(data => Number(data.x) !== item.id);
    setSscore(sscore => filteredSscore);
    const filteredPscore = pscore.filter(data => Number(data.x) !== item.id);
    setPscore(pscore => filteredPscore);
    const filteredCscore = cscore.filter(data => Number(data.x) !== item.id);
    setCscore(cscore => filteredCscore);
    const filteredMscore = mscore.filter(data => Number(data.x) !== item.id);
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

  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
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
            <CompareGraph sscore={sscore} pscore={pscore} cscore={cscore} mscore={mscore} />
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
      <Box>
        <Box>
          <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="secondary">
            <Tab label="슈어 점수 순" />
            <Tab label="낮은 가격 순" />
            <Tab label="보장 많은 순" />
          </Tabs>
        </Box>
        <Box>
          {tabIndex === 0 && (
            <Box>
              <div className={classes.top_card}>
                {sDatas.slice(0, 3).map(data => (
                  <TopCard
                    key={data.id}
                    data={data}
                    user={user}
                    selected={selectedItems}
                    addToCompare={addToCompare}
                    removeFromCompare={removeFromCompare}
                  />
                ))}
              </div>
              {sDatas.slice(3, 8).map(data => (
                <CompareCard
                  key={data.id}
                  data={data}
                  user={user}
                  selected={selectedItems}
                  addToCompare={addToCompare}
                  removeFromCompare={removeFromCompare}
                />
              ))}
            </Box>
          )}
          {tabIndex === 1 && (
            <Box>
              <div className={classes.top_card}>
                {pDatas.slice(0, 3).map(data => (
                  <TopCard
                    key={data.id}
                    data={data}
                    user={user}
                    selected={selectedItems}
                    addToCompare={addToCompare}
                    removeFromCompare={removeFromCompare}
                  />
                ))}
              </div>
              {pDatas.slice(3, 8).map(data => (
                <CompareCard
                  key={data.id}
                  data={data}
                  user={user}
                  selected={selectedItems}
                  addToCompare={addToCompare}
                  removeFromCompare={removeFromCompare}
                />
              ))}
            </Box>
          )}
          {tabIndex === 2 && (
            <Box>
              <div className={classes.top_card}>
                {cDatas.slice(0, 3).map(data => (
                  <TopCard
                    key={data.id}
                    data={data}
                    user={user}
                    selected={selectedItems}
                    addToCompare={addToCompare}
                    removeFromCompare={removeFromCompare}
                  />
                ))}
              </div>
              {cDatas.slice(3, 8).map(data => (
                <CompareCard
                  key={data.id}
                  data={data}
                  user={user}
                  selected={selectedItems}
                  addToCompare={addToCompare}
                  removeFromCompare={removeFromCompare}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default DataComparison;
