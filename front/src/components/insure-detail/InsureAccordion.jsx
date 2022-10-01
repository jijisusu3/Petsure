import React from 'react';
import { useLocation } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

export function InsureBasicAccordion() {
  const location = useLocation();
  const bdatas = location.state.data.basic;
  console.log(location);
  return bdatas.map(data => (
    <Accordion key={data.cover_type} className="accordion">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <table>
          <tr>
            <td className={classes.width_14em_basic_td_middle}>{coverType[data.cover_type]}</td>
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
  ));
}

export function InsureSpecialAccordion() {
  const location = useLocation();
  const sdatas = location.state.data.special;
  return sdatas.map(data => (
    <Accordion key={data.cover_type} className="accordion">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <table>
          <tr>
            <td className={classes.width_14em_basic_td_middle}>{coverType[data.cover_type]}</td>
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
  ));
}
