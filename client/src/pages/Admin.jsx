import React from 'react'
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import CreateMaterial from '../components/modals/CreateMaterial';
import CreateType from '../components/modals/CreateType';
import CreateProject from '../components/modals/CreateProject';

const Admin = () => {
    const [typeModalShow, setTypeModalShow] = React.useState(false);
    const [materialModalShow, setMaterialModalShow] = React.useState(false);
    const [projectModalShow, setProjectModalShow] = React.useState(false);

  return (
      <div className='container'>
          <Stack spacing={2} >
              <Button variant="outlined" onClick={() => setTypeModalShow(true)}>Добавить тип</Button>
              <Button variant="outlined" onClick={() => setMaterialModalShow(true)}>Добавить материал</Button>
              <Button variant="outlined" onClick={() => setProjectModalShow(true)}>Добавить проект</Button>
              <CreateType show={typeModalShow} hide ={() => setTypeModalShow(false)}/>
              <CreateMaterial show={materialModalShow} hide ={() => setMaterialModalShow(false)}/>
              <CreateProject show={projectModalShow} hide ={() => setProjectModalShow(false)}/>
          </Stack>
          Admin page
      </div>
  )
}

export default Admin