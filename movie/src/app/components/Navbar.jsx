import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebar,setIsDark } from '../redux/movieSlice';
import styles from './styles.module.css';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, List, ListItemButton, ListItemText, Tooltip } from '@mui/material';
import { Menu as MenuIcon, ArrowBackIos as ArrowBackIosIcon, ArrowForwardIosOutlined as ArrowForwardIosOutlinedIcon, HomeOutlined as HomeOutlinedIcon, MovieFilterOutlined as MovieFilterOutlinedIcon, FavoriteBorderOutlined as FavoriteBorderOutlinedIcon } from '@mui/icons-material';
import { useTheme, keyframes, styled } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';




const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;


const Sidebar = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isSidebar'
})(({ isSidebar, theme }) => ({
  position: 'fixed',
  top: 48,
  left: 0,
  height: '100%',
  width: 200,

  borderRight: `1px solid ${theme.palette.divider}`,
  animation: `${isSidebar ? slideIn : slideOut} 0.5s ease-in-out forwards`,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  boxSizing: 'border-box',
  zIndex: 1300,
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

function Navbar() {
  const dispatch = useDispatch();
  const isSidebar = useSelector((state) => state.movie.isSidebar);
  const isDark = useSelector((state) => state.movie.isDark)

  const theme = useTheme();


  const handleSidebarTrue = () => {
    dispatch(setSidebar(true));
  };

  const handleSidebarFalse = () => {
    dispatch(setSidebar(false));
  };
  const handleChangeIcon = () => {
    dispatch(setIsDark());
  }
  console.log(isDark);
  

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" component="div" color="secondary" sx={{ flexGrow: 1 }}>
              Movie Star
            </Typography>
            <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>Home</Button>
            <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>Movies</Button>
            <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>Popular Movies</Button>
            <Button onClick={handleChangeIcon} >
              {
                isDark ?  <LightModeIcon color='accent' /> :  <DarkModeIcon color='accent' />
              }
             </Button>
          
            
          </Toolbar>
        </AppBar>
      </Box>
      {!isSidebar && (
        <Tooltip title="See the menu">
          <Button onClick={handleSidebarTrue} sx={{ marginTop: '10px', cursor: 'pointer', display: { xs: 'block', sm: 'none' } }}>
            <ArrowForwardIosOutlinedIcon color="accent" />
          </Button>
          
        </Tooltip>
      )}
      <Sidebar isSidebar={isSidebar}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1 }}>
          <Typography variant="h6" component="div">Dashboard</Typography>
          <Tooltip title="Close the menu">
            <Button sx={{ cursor: 'pointer' }} onClick={handleSidebarFalse}>
              <ArrowBackIosIcon color="accent" fontSize="small" />
            </Button>
          </Tooltip>
        </Box>
        <List>
          <ListItemButton>
            <HomeOutlinedIcon className={styles.icon} color="secondary" />
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <MovieFilterOutlinedIcon className={styles.icon} color="secondary" />
            <ListItemText>Movies</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <FavoriteBorderOutlinedIcon className={styles.icon} color="secondary" />
            <ListItemText>Best Movies</ListItemText>
          </ListItemButton>
        </List>
      </Sidebar>
    </div>
  );
}

export default Navbar;

