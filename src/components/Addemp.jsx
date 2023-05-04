import { Button, Stack, TextField } from '@mui/material'
import React from 'react'
import axios from 'axios';
import {useForm} from 'react-hook-form'
const Addemp = () => {
  const { register, handleSubmit} = useForm();
 const getVal = (val)=>{
    console.log(val);
    alert('Form submitted')
    axios.post('https://reqres.in/api/users',val).then((res)=>{
     alert(`The data is posted with id ${res.data.id}`)
    })

  }
    return (
    <div>
      
      <Stack
      component="form"
      sx={{ 
        marginTop:'40px',
        marginLeft:'38%',
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
      name='empname'
      {...register('empname')}
        hiddenLabel
        id="filled-hidden-label-small"
        label="Employee Name"
        variant="outlined"
        
      />
      <TextField
      name='emolocation'
      {...register('emplocation')}
        hiddenLabel
        id="filled-hidden-label-normal"
        label="Employee Location"
        variant="outlined"
      />
      <TextField
      name='empdesignation'
      {...register('empdesignation')}
        hiddenLabel
        id="filled-hidden-label-normal"
        label="Employee Designation"
        variant="outlined"
      />
      <Button variant='contained' onClick={handleSubmit(getVal)}>SUMBIT</Button>
    </Stack>
    </div>
  )
}

export default Addemp
