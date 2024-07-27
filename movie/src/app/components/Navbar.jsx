import React from 'react'
import styles from "./styles.module.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


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
          
          <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }} >Home</Button>
          <Button color="inherit"  sx={{ display: { xs: 'none', sm: 'block' } }} >Movies</Button>
          <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}  >Popular Movies</Button>
          
        </Toolbar>
      </AppBar>
        </Box>
        <Box marginTop={1} width={200} borderRight={1} sx={{ display: { xs: 'block', sm: 'none'  } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1 }}>
          <Typography variant="h6" component="div">Dashboard</Typography>
          <Tooltip title="close">
          <Button sx={{ cursor: 'pointer' }}>
            
            <ArrowBackIosIcon color='accent' fontSize='small' />
          </Button>
          </Tooltip>
        </Box>
         
        <List    >
          <ListItemButton >
              <HomeOutlinedIcon className={styles.icon} color='#fff'/>
            <ListItemText  >Home</ListItemText>
          </ListItemButton>
          <ListItemButton>
              <MovieFilterOutlinedIcon className={styles.icon} color='#fff'/>
            <ListItemText >Movies</ListItemText>
          </ListItemButton>
          <ListItemButton>
              <FavoriteBorderOutlinedIcon className={styles.icon} color='#fff'/>
            <ListItemText >Best Movies</ListItemText>
          </ListItemButton>
        </List>
         
        </Box>
      
  
        
    </div>
  )
}

export default Navbar
// sx={{ display: { xs: 'none', sm: 'block' } }}  