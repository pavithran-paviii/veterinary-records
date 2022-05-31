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
            <input placeholder='Enter serial number' style={{border:"1px solid black",
          backgroundColor: "transparent",
          padding: "5px",
          borderRadius:"5px"
          }}/>
            <Button style={{color:"black"}} onClick={search}>Search</Button>
        </span>
        <Button style={{color:"black"}}>Login</Button>
    </Box>
  )
}
