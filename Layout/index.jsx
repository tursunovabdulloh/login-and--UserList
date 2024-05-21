
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function Layout() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("usersData")) || [])
  
  
  function deleteData (email){
    const updatedRows = data.filter((row)=> row.email !== email)
    setData(updatedRows) 
   localStorage.setItem('usersData', JSON.stringify(updatedRows))
  }
     
  function DeleteAll() {
    data.map(({email}) =>{
   const updatedRows = data.filter((item)=> item.email == email && item.email !== email)
    setData(updatedRows) 
   localStorage.setItem('usersData', JSON.stringify(updatedRows))
    })}
  

 
  return (
    <>
            <button type="submit" className="homeBtn">
              <Link to={"/signup"}>Sign Up</Link>
            </button>
    <div className="container still">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="tablerow">
              <TableCell>Users</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Surname</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">
                <button onClick={() => {DeleteAll()}} className="deleteBtn">DeleteAll</button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((rows, index) => (
              <TableRow key={rows.name}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell  align="right">{rows.name}</TableCell>
                <TableCell align="right">{rows.surname}</TableCell>
                <TableCell align="right">{rows.age}</TableCell>
                <TableCell align="right">{rows.email}</TableCell>
                 <TableCell align="right">
                 <img onClick={() => deleteData(rows.email)} src="../public/images/fr.png" alt=""  width={24}/>
                 </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
  );
}

export default Layout;










