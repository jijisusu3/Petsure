import React, { useCallback, useState, useEffect } from 'react';
import classes from './BasicResultForm.module.css';
import BasicCard from './BasicCard';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import Sheet from '../common/Sheet';

function BasicResultForm(results) {
  const insurances = results.results;
  console.log(insurances);
  return (
    <div>
      {insurances.map(insurance => (
        <BasicCard key={insurance.id} insurance={insurance} />
      ))}
    </div>
  );
}

export default BasicResultForm;
