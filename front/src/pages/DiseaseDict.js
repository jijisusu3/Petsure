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
      <Grid item md={3} container justifyContent="center">
        <Card sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }} justifyContent="center">
          <CardContent>
            <Typography sx={{ fontSize: 16, color: '#ffffff' }} align="center" component="div">
              갑자기 절뚝거려요
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3} container justifyContent="center">
        <Card sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }} justifyContent="center">
          <CardContent>
            <Typography sx={{ fontSize: 16, color: '#ffffff' }} align="center" component="div">
              털이 많이 빠지고 자주 긁어요
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3} container justifyContent="center">
        <Card sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }} justifyContent="center">
          <CardContent>
            <Typography sx={{ fontSize: 16, color: '#ffffff' }} align="center" component="div">
              입냄새가 심해졌어요
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3} container justifyContent="center">
        <Card sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }} justifyContent="center">
          <CardContent>
            <Typography sx={{ fontSize: 16, color: '#ffffff' }} align="center" component="div">
              배뇨가 잦거나<br></br>피가 섞여 나와요
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3} container justifyContent="center">
        <Card sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }} justifyContent="center">
          <CardContent>
            <Typography sx={{ fontSize: 16, color: '#ffffff' }} align="center" component="div">
              소극적이고 무기력해요
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3} container justifyContent="center">
        <Card sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }} justifyContent="center">
          <CardContent>
            <Typography sx={{ fontSize: 16, color: '#ffffff' }} align="center" component="div">
              호흡이 이상해요
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3} container justifyContent="center">
        <Card sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }} justifyContent="center">
          <CardContent>
            <Typography sx={{ fontSize: 16, color: '#ffffff' }} align="center" component="div">
              구토와 설사를 해요
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3} container justifyContent="center">
        <Card sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }} justifyContent="center">
          <CardContent>
            <Typography sx={{ fontSize: 16, color: '#ffffff' }} align="center" component="div">
              눈물이 많고 눈곱이 자주 껴요
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3} container justifyContent="center">
        <Card sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }} justifyContent="center">
          <CardContent>
            <Typography sx={{ fontSize: 16, color: '#ffffff' }} align="center" component="div">
              귀에서 악취가 나고<br></br>분비물이 있어요
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3} container justifyContent="center">
        <Card sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }} justifyContent="center">
          <CardContent>
            <Typography sx={{ fontSize: 16, color: '#ffffff' }} align="center" component="div">
              눈동자가 희고 자주 부딛혀요
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3} container justifyContent="center">
        <Card sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }} justifyContent="center">
          <CardContent>
            <Typography sx={{ fontSize: 16, color: '#ffffff' }} align="center" component="div">
              거품을 물고 경련을 일으켜요
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3} container justifyContent="center">
        <Card sx={{ width: 250, height: 250, bgcolor: '#F4AA41', m: 5 }} justifyContent="center">
          <CardContent>
            <Typography sx={{ fontSize: 16, color: '#ffffff' }} align="center" component="div">
              몸에 혹이 생겼어요
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
