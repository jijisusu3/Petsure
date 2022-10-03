import React, { useCallback, useState, useEffect } from 'react';
import classes from './BasicResultForm.module.css';
import BasicCard from './BasicCard';

function BasicResultForm(results) {
  const insurances = results.results;
  return (
    <div className={classes.top_padding}>
      {insurances.map(insurance => (
        <BasicCard key={insurance.id} insurance={insurance} />
      ))}
    </div>
  );
}

export default BasicResultForm;
