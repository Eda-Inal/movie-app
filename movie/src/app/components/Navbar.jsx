import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h2" component="div" color="secondary" sx={{ flexGrow: 1 }}>
            Movie Star
          </Typography>
          <Button color="inherit" >Home</Button>
          <Button color="inherit" >Movies</Button>
          <Button color="inherit" >Popular Movies</Button>
        </Toolbar>
      </AppBar>
    </Box>
        
    </div>
  )
}

export default Navbar
