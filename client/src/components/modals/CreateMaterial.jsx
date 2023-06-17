import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { createMateriial } from '../../http/deviceAPI';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const CreateMaterial = ({show, hide}) => {
    const [value, setValue] = useState('')

    const addMaterial = () => {
        createMateriial({name: value}).then(data => setValue(''))
        hide()
     } 


  return (
      <div>
          <Modal
              open={show}
              onClose={hide}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                      Добавить материал стен
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
                  <TextField
                      sx={{ mt: 2, minWidth: 300 }}
                      required
                      id="outlined-basic"
                      label="Введине название материала"
                      variant="outlined"
                      value={value}
                      onChange={e => setValue(e.target.value)}
                  />
                  <Stack
                      sx={{ mt: 2 }}
                      spacing={3}
                      direction="row"
                  >
                      <Button variant="contained" onClick={addMaterial}>Добавить</Button>
                      <Button 
                        variant="outlined"
                        onClick={hide}
                        >Зкрыть
                      </Button>
                  </Stack>
              </Box>
          </Modal>
      </div>
  )
}

export default CreateMaterial