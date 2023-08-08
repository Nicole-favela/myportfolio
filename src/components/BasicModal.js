import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Player from './Player';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#252526',
  border: '4px solid #FF0D86',
  boxShadow: 100,
  p: 4,
};

export default function BasicModal({open, handleClose}) {
  
  return (
    <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" sx={{color: 'white'}}>
            Spotify Project Demo Video
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1.5, color: 'white' }}>
            Please enjoy this short demo of my spotify web app's features! 
          </Typography>

          {/* contents */}
          {/* <Player/> */}
        </Box>
      </Modal>
    </div>
  );
}