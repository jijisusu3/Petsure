import BasicResult from '../../components/basic-result/BasicResult';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import classes from './BasicResult.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  borderRadius: '20px',
};

export function BasicResultPage() {
  const [open, setOpen] = React.useState(false);
  const [check, setCheck] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  const handleScroll = () => {
    if (check === true && window.scrollY > 1900) {
      handleOpen();
      setCheck(false);
      return;
    }
  };
  return (
    <>
      <BasicResult />;
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="column" justifyContent="space-evenly" alignItems="center">
            <img
              src={`${process.env.PUBLIC_URL}/detail_modal.png`}
              alt="detail_modal"
              style={{ width: 950, height: 520 }}
            />
            <button className={classes.learnMore}>상세검색 바로가기</button>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
