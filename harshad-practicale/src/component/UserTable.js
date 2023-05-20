import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';


const UserTable = () => {
    const person = [];
//   let  navigate=useNavigate()

//     axios.get("https://api.bharuch-health.com/login ",headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'JWT fefege...'
//     },).then((res)=>{
// console.log("res",res);
// console.log("res token",res.data.result.token);
// localStorage.setItem("userToken", res.data.result.token);
// navigate('/home')
// }).catch((err)=>{console.log("err",err);})


  return (
    <>

    <div style={{textAlign:"center",fontSize:"30px",marginBottom:"20px"}}>UserTable</div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell >Middle Name Name</TableCell>
            <TableCell >Last Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Mobile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {person?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">g</TableCell>
              <TableCell align="right">rgrg</TableCell>
              <TableCell align="right">ggr</TableCell>
              <TableCell align="right">grgr</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default UserTable