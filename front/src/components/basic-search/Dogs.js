import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DogList from './components/DogList';

const Dogs = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    axios.get('https://j7b202.p.ssafy.io/api/breed').then(response => {
      //   console.log(response);
      setDogs(response.data);
    });
  }, []);

  //   useEffect(() => {
  //     console.log(dogs);
  //   }, [dogs]);

  return (
    <>
      <h1>Dogs</h1>
      <DogList dogs={dogs} />
    </>
  );
};

export default Dogs;
