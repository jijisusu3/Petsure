import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

export function DiseaseDictPage() {
  // const [dicts, setDicts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get('/api/disease')
  //     .then(response => {
  //       console.log(response);
  //       setDicts(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // });

  return (
    <Grid container justifyContent="center">
      <Card sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }} justifyContent="center">
        <CardContent>
          <Typography sx={{ fontSize: 16, color: '#ffffff' }} align="center" component="div">
            갑자기 절뚝거려요
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
