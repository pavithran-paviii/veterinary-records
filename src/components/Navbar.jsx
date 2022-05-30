import React from 'react'
import Box from '@mui/material/Box';
import Button from "@mui/material/Button"

const search=()=>{
  console.log("seraching")
}


export const Navbar = () => {
  return (
    <Box id="navBar">
        <span>
            <input placeholder='Enter serial number'/>
            <Button variant="outlined" onClick={search}>Search</Button>
        </span>
        <Button variant="outlined">Login</Button>
    </Box>
  )
}
