import React, { useCallback, useState, useEffect } from 'react';
import classes from './BasicResultForm.module.css';
import BasicCard from './BasicCard';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function BasicResultForm() {
  return (
    <div>
      <BasicCard />
    </div>
  );
}

export default BasicResultForm;
