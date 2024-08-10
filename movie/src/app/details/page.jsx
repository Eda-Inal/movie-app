import React from 'react'
import { Box, Typography, } from '@mui/material'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

function Detail() {
  return (
   <>
 <Box width="40%"  sx={{

  width:"40%",
  backgroundColor:"rgba(52, 58, 64, 0.3)",
   color:"white",
   display:"flex",
   flexDirection:"column",
   justifyContent:"left",
   paddingLeft:"0.7rem",
   paddingY:"15px"
 

  }}>
    <Typography variant='h4' sx={{mb:"10px"}}>Header</Typography>
    <Box width={120} sx={{display:"flex", 
      justifyContent:"space-between",   alignItems:"center",
       mb:"10px"
    }}>
<StarOutlinedIcon sx={{color:"#ffc300",fontSize:"19px"}} />
<Typography variant='h6'>8.6</Typography>
<Typography>Vote</Typography>
    </Box>
    <Typography variant='h6'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, omnis!
    </Typography>
    <Typography variant='h6' sx={{my:"10px"}}>Date</Typography>
    <Typography  variant='h6'>
      Genre
    </Typography>
    <Typography variant='h6' sx={{my:"10px"}}>Language</Typography>

 </Box>
   </>
  )
}

export default Detail
