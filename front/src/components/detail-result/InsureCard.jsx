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
import styled, { css } from 'styled-components';
import Grid from '@mui/material/Grid';
import CompareGraph from './CompareGraph';
import Typography from '@mui/material/Typography';

import cal from '../../images/cal.svg';
import BannerDetail from '../common/BannerDetail';

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
  const handleClose = () => {
    setOpen(false);
    setIncentives(['???,???']);
    setText('');
  };

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
  const [incentives, setIncentives] = useState(['???,???']);
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

  const styles = {
    tab: {
      color: 'black',
      fontWeight: '600',
      fontSize: '16px',
      width: 150,
    },
    // tabs: {
    //   backgroundColor: 'rgba(244, 170, 65, 0.5)',
    //   width: 450,
    // },
  };

  return (
    <>
      <BannerDetail />
      {4 > selectedItems.length && selectedItems.length > 1 && (
        <div className={classes.compareCard}>
          <div className={classes.lBox}>
            {selectedItems.map(el => (
              <div className={classes.compareBox} key={el.id}>
                <img
                  className={classes.compare_logo}
                  alt="insure"
                  src={el.insurance.company_logo}
                />
                <div>{el.insurance.insurance_name}</div>
              </div>
            ))}
          </div>
          <button className={classes.compareBtn} onClick={handleOpen}>
            보험 비교하기
          </button>
          <Dialog
            PaperProps={{
              style: {
                height: '2000px',
                minWidth: '1000px',
                overflowY: 'scroll',
                display: 'flex',
              },
            }}
            open={open}
            onClose={handleClose}
          >
            <DialogTitle />
            <table
              style={{ textAlign: 'center', marginBottom: 50 }}
              className={classes.styledTable}
            >
              <thead style={{ textAlign: 'center' }}>
                <tr style={{ marginTop: 30 }}>
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
                  <div className={classes.styledColumn}>보험료</div>
                  <div style={{ backgroundColor: '#FAFAFA', fontWeight: 600, textAlign: 'rignt' }}>
                    {'- '}보장 내역{' -'}
                  </div>
                  <div className={classes.styledColumn}>통원치료비</div>
                  <div className={classes.styledColumn}>입원치료비</div>
                  <div className={classes.styledColumn}>수술치료비</div>
                  <div className={classes.styledColumn}>슬관절</div>
                  <div className={classes.styledColumn}>피부병</div>
                  <div className={classes.styledColumn}>구강</div>
                  <div className={classes.styledColumn}>비뇨기</div>
                  <div className={classes.styledColumn}>배상책임</div>
                </td>
                {selectedItems.map(el => (
                  <td key={el.id}>
                    <div>{el.fee.toLocaleString() + '원'}</div>
                    <div style={{ backgroundColor: '#FAFAFA' }}>&nbsp;</div>
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
            <div style={{ marginTop: 50 }}>
              <div style={{ marginLeft: '5%' }} className="d-flex pb-3">
                <img src={cal} alt="" className="pe-3" />
                <p style={{ fontSize: '1.4rem' }}>보장 금액 계산하기</p>
              </div>
              <div className={classes.calcCompare}>
                <div>
                  <Grid container direction="row" justifyContent="flex-start" alignItems="flex-end">
                    <span style={{ fontSize: '1.4rem', marginLeft: 60, fontWeight: 600 }}>
                      동물병원에서 통원치료비 {'  '}
                    </span>
                    <Ipt type="number" onChange={onChange} value={text} />
                    <BasicBtn onClick={() => register()}>원 청구 시,</BasicBtn>
                  </Grid>
                </div>
                <div className={classes.calcResult}>
                  <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                    {incentives.map(incentive => (
                      <div>
                        <p
                          style={{ color: '#F58613', fontSize: 36, fontWeight: 600, marginTop: 40 }}
                        >
                          {incentive.toLocaleString()}
                          <span style={{ color: '#000', fontSize: 20, fontWeight: 600 }}>
                            원 보장
                          </span>
                        </p>
                      </div>
                    ))}
                  </Grid>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      )}
      <Box>
        <div className={classes.recbox}>
          <h1 className="mb-4">추천 TOP3</h1>
          <Box>
            <Tabs
              style={styles.tabs}
              value={tabIndex}
              onChange={handleTabChange}
              sx={{
                color: 'white',
                '& .MuiTabs-indicator': {
                  width: '120px',
                  bgcolor: '#F58613',
                  height: '100%',
                  zIndex: '-1',
                },
              }}
            >
              <Tab
                style={styles.tab}
                label={
                  <Typography
                    fontWeight="700"
                    fontSize="16px"
                    textTransform="none"
                    color={tabIndex === 0 ? '#fff' : '#222'}
                  >
                    SURE 점수 순
                  </Typography>
                }
              />
              <Tab
                style={styles.tab}
                label={
                  <Typography
                    fontWeight="700"
                    fontSize="16px"
                    textTransform="none"
                    color={tabIndex === 1 ? '#fff' : '#222'}
                  >
                    낮은 가격 순
                  </Typography>
                }
              />
              <Tab
                style={styles.tab}
                label={
                  <Typography
                    fontWeight="700"
                    fontSize="16px"
                    textTransform="none"
                    color={tabIndex === 2 ? '#fff' : '#222'}
                  >
                    보장 많은 순
                  </Typography>
                }
              />
            </Tabs>
            <div className={classes.bar} />
          </Box>
        </div>
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

const Ipt = styled.input`
  border-radius: 10px;
  width: 240px;
  margin-left: 20px;
  margin-top: 30px;
  height: 40px;
  font-size: 20px;
`;

const BasicBtn = styled.button`
  display: flex;
  align-items: flex-end;
  color: #5b5b5b;
  font-size: 24px;
  font-weight: bold;
  border: none;
  background-color: transparent;
  &:hover {
    color: #f4aa41;
  }
`;
