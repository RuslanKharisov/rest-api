import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Context } from '../..';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { createProduct, fetchMateriials, fetchProducts, fetchTypes } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    m: 2,
};

const CreateProject = observer ( ({ show, hide }) => {
    const { material, type } = useContext(Context)

    const [description, setDescription] = useState('')
    const [sku, setSku] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState('')
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => type.setTypes(data))
        fetchMateriials().then(data => material.setMaterials(data))
    }, [])

    const handleChangeType = (event) => {
        console.log(event.target)
        type.setSelectedType(event.target.value);
    };

    const handleChangeMaterial = (event) => {
        console.log(event.target)
        material.setSelectedMaterial(event.target.value);
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key] : value} : i))
    }


    const addProject = () => {
        console.log(type.selectedType.id)
        const formData = new FormData()
        formData.append('sku', sku)
        formData.append('title', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', type.selectedType.id)
        formData.append('materialId', material.selectedMaterial.id)
        formData.append('info', JSON.stringify(info))
        createProduct(formData).then(data => hide())

        
    }



    return (
        <div>
            <Modal
                open={show}
                onClose={hide}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} component="form">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Новый проект
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>

                    <FormControl sx={{ mt: 1, minWidth: 300 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Тип</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={type.selectedType}
                            onChange={e =>  handleChangeType(e)}
                            autoWidth
                            label="Type"
                        >
                            {
                                type.types.map(curentType => (
                                    <MenuItem 
                                        onClick={() => type.setSelectedType(curentType)} 
                                        key={curentType.id} 
                                        value={curentType}
                                        >
                                            {curentType.name}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>

                    <FormControl sx={{ mt: 1, minWidth: 300 }}>
                        <InputLabel >Материал</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={material.selectedMaterial}
                            onChange={e => handleChangeMaterial(e)}
                            autoWidth
                            label="Material"
                        >
                            {
                                material.materials.map(curentMaterial => (
                                    <MenuItem 
                                        onClick={() => material.setSelectedMaterial(curentMaterial)} 
                                        key={curentMaterial.id} 
                                        value={curentMaterial}
                                    >
                                        {curentMaterial.name}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>


                    <TextField
                        sx={{ mt: 2, minWidth: 300 }}
                        required
                        id="outlined-basic"
                        label="Введине название проекта"
                        variant="outlined"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <TextField
                        sx={{ mt: 2, minWidth: 300 }}
                        required
                        id="outlined-basic"
                        label="Введине Артикул"
                        variant="outlined"
                        value={sku}
                        onChange={e => setSku(e.target.value)}
                    />

                    <TextField
                        sx={{ mt: 2, minWidth: 300 }}
                        // type="number"
                        required
                        id="outlined-basic"
                        label="Укажите стоимость"
                        variant="outlined"
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />

                    <TextField
                        sx={{ mt: 2, minWidth: 300 }}
                        type="file"
                        accept="image/*"
                        required
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                        onChange={selectFile}
                    />

                    <hr/>
                    <Stack
                        sx={{ mt: 2 }}
                        spacing={3}
                        direction="row"
                    >
                        <Button
                            variant="outlined"
                            onClick={addInfo}
                        >Добавить информацию
                        </Button>
                    </Stack>
                        {info.map(i => 
                            <Grid key={i.number} container spacing={2}>
                                <Grid xs={4}>
                                    <TextField
                                        sx={{ mt: 1 }}
                                        required
                                        variant="outlined"                                        
                                        // id="outlined-basic"
                                        label="Введите название"
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    />
                                </Grid>

                                <Grid xs={4}>
                                    <TextField
                                        sx={{ mt: 1 }}
                                        required
                                        variant="outlined"
                                        // id="outlined-basic"
                                        label="Введите описание"
                                        value={i.description}
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    />
                                </Grid>

                                <Grid xs={4}>
                                    <Button
                                        sx={{ mt: 1 }}
                                        variant="outlined"
                                        onClick={() => removeInfo(i.number)}
                                    >Удалить
                                    </Button>
                                </Grid>

                            </Grid>
                            )}

                    <Stack
                        sx={{ mt: 2 }}
                        spacing={3} 
                        direction="row"
                    >
                        <Button variant="contained" onClick={addProject} >Добавить</Button>
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
});

export default CreateProject