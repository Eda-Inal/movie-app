import React from 'react'
import { Box,Tooltip, Typography } from '@mui/material';
import Link from 'next/link';
function Footer() {
  return (
  <>
  <Tooltip title="check the github profile">
  <Box sx={{ width:"100%", margin:"auto",display:"flex",justifyContent:"center",alignItems:"center", backgroundColor:"sideBarColor.main",padding:1}}> 
    <Link href="https://github.com/Eda-Inal" target='blank' passHref style={{  color: 'inherit',textDecoration:"none" }} ><Typography variant='h6' sx={{'&:hover': {
            transform: 'scale(1.02)',
            color:"gray"
          },
          
          }}>Developed by Eda Inal</Typography></Link>

  </Box>
  </Tooltip>
 
 
  </>
  )
}

export default Footer
