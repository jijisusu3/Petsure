// /*추가작업 필요 */

import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import Sheet from '../common/Sheet';
// import Button from '../common/Button';
// import classes from './FindInfoForm.module.css';

function InsureCompareForm({}) {
  const navigate = useNavigate();
  function routerPushHandler() {
    navigate('/???????????');
  }

  return (
    <div>
      <form>
        <h1>
          Insurecompare 페이지다. 좀나와라 아오
          <br />
        </h1>
      </form>
    </div>
  );
}

export default InsureCompareForm;
