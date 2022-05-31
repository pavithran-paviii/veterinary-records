import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import profilepic from "../images/profilepic.png"

export const HomePageDiv = () => {
  return (
    <Box>
        <div id="homePageDiv">
          <img alt="" src={profilepic}/>
          <div>
              <h5>My name is </h5>
              <h2>Mohammed Afrin</h2>
              <Button
              style={{
                borderRadius: 12,
                color:'black',
                fontSize: "20px"
            }}>Book Your Appoiment Here</Button>
          </div>
        </div>
    </Box>
  )
}
