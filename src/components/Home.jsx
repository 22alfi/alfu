import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './style.css'
import { set } from 'react-hook-form';
const Home = () => {
  var [value,setvalue]=useState([])
  useEffect(()=>{
      axios.get('https://dummyjson.com/users').then((response)=>{
     console.log(response.data.users);
      setvalue (value=response.data.users)
      })
  },[])
  return (
    <div className='App'>
    
      <Table>
        <TableHead>
          <TableRow>
            <TableCell >First Name</TableCell>
            <TableCell >Last Name</TableCell>
            <TableCell >Age</TableCell>
          </TableRow>
         </TableHead>
         <TableBody>
          {value.map((data,index)=>{
           return <TableRow>
           <TableCell>{data.firstName}</TableCell>
            <TableCell>{data.lastName}</TableCell>
            <TableCell>{data.age}</TableCell>
           </TableRow>
          })}
        </TableBody>
        </Table>
    </div>
  )
}

export default Home
