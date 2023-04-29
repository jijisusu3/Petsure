import React from 'react';
import HorizonLine from '../common/HorizontalLine';
import { InsureCoverage } from './InsureCoverage';
import { InsureBasicAccordion, InsureSpecialAccordion } from './InsureAccordion';
import classes from './MakeSure.module.css';
import Grid from '@mui/material/Grid';

export function MakeSure() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        style={{ width: 800 }}
      >
        <p style={{ color: '#F0B622', fontWeight: 600, fontSize: 36, marginTop: 100 }}>
          Make <span style={{ fontSize: 40, fontWeight: 630 }}>SURE .</span>
        </p>
        <p style={{ color: '#717171', fontSize: 24, fontWeight: 600 }}>
          확실하게 알아보는{' '}
          <span style={{ fontSize: 30, color: '#F58613', fontWeight: 620 }}>보장 내역</span>
        </p>
      </Grid>
      <div className={classes.sureline} />
      <InsureCoverage />

      <div>
        <h5 className={classes.h5_grey_font}>상품의 보장 상세 내역</h5>
        <h1 className={classes.h1_padding_bolder}>
          이 보험에서 <span className={classes.h1_fontcolor_yellow}>보장</span>하는 내역이에요 📝
        </h1>
      </div>
      <br />
      <table className={classes.width_max}>
        <tr>
          <td className={classes.td_bgcolor_border_top_yellow}>
            <div className={classes.basic_special_td_fontsize_padding}>&emsp;기본 약관</div>
          </td>
        </tr>
        <InsureBasicAccordion />
      </table>
      <br />
      <table className={classes.width_max}>
        <tr>
          <td className={classes.td_bgcolor_border_top_yellow}>
            <div className={classes.basic_special_td_fontsize_padding}> &emsp;특별약관</div>
          </td>
        </tr>
        <InsureSpecialAccordion />
      </table>
    </>
  );
}
