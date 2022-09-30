import { useState, useEffect } from 'react';
import axios from 'axios';

export function DetailResultAxios() {
  const [alldatas, setAlldatas] = useState([]);
  useEffect(() => {
    axios
      .post('/api/insurance/detail/', {
        breed: 31,
        animal_name: '이봉봉',
        species: 1,
        animal_birth: 2,
        hospitalization: 4,
        outpatient: 3,
        operation: 1,
        patella: 4,
        skin_disease: 3,
        dental: 2,
        urinary: 1,
        liability: 1,
      })
      .then(response => {
        setAlldatas(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return alldatas;
}
