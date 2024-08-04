import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebar, setIsDark } from '../redux/movieSlice';
import styles from './styles.module.css';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, List, ListItemButton, ListItemText, Tooltip } from '@mui/material';
import { Menu as MenuIcon, ArrowBackIos as ArrowBackIosIcon, ArrowForwardIosOutlined as ArrowForwardIosOutlinedIcon, HomeOutlined as HomeOutlinedIcon, MovieFilterOutlined as MovieFilterOutlinedIcon, FavoriteBorderOutlined as FavoriteBorderOutlinedIcon } from '@mui/icons-material';
import { useTheme, keyframes, styled } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Search from './search';

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
top:0,
  left: 0,
  height: '100vh',
  width: 250,

  backgroundColor: theme.palette.sideBarColor.main,
  borderRight: `1px solid ${theme.palette.divider}`,
  animation: `${isSidebar ? slideIn : slideOut} 0.5s ease-in-out forwards`,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  boxSizing: 'border-box',
  zIndex: 1300,
  [theme.breakpoints.up('lg')]: {
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

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h4" component="div" color="secondary" sx={{ flex: 1, textAlign: 'left' }}>
              Movie
            </Typography>
            <Box sx={{ flex: 1, display: { xs: 'none', lg: 'flex' }, justifyContent: 'center' }}>
              <Search />
            </Box>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <Button sx={{ display: { xs: 'none', lg: 'block' } }}>
                <Link href="/home" passHref sx={{ textDecoration: 'none' }}>
                  <Typography component="span" color="textColor.main" sx={{ textDecoration: 'none' }}>
                    Home
                  </Typography>
                </Link>
              </Button>
              <Button color='textColor' sx={{ display: { xs: 'none', lg: 'block' } }}>Movies</Button>
              <Button color='textColor' sx={{ display: { xs: 'none', lg: 'block' } }}>Popular Movies</Button>
              <Button onClick={handleChangeIcon}>
                {
                  isDark ? <LightModeIcon sx={{ display: { xs: 'none', lg: 'block' } }} color='themeColor' /> : <DarkModeIcon sx={{ display: { xs: 'none', lg: 'block' } }} color='themeColor' />
                }
              </Button>
            </Box>
            {
              isSidebar && (
                <Tooltip title="Close the menu">
                  <Button sx={{ cursor: 'pointer', marginTop: '10px', display: { xs: 'block', lg: 'none' } }} onClick={handleSidebarFalse}>
                    <CloseIcon color="accent" />
                  </Button>
                </Tooltip>
              )
            }

            {!isSidebar && (
              <Tooltip title="See the menu">
                <Button onClick={handleSidebarTrue} sx={{ marginTop: '10px', cursor: 'pointer', display: { xs: 'block', lg: 'none' } }}>
                  <MenuIcon color="accent" />
                </Button>
              </Tooltip>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      <Sidebar isSidebar={isSidebar} >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1 }}>
          <Typography variant="h6" component="div">Dashboard</Typography>
        </Box>
        <List>
          <Box>
            <Search />
          </Box>
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
          <ListItemButton onClick={handleChangeIcon}>
            {
              isDark ? <LightModeIcon className={styles.icon} color='themeColor' /> : <DarkModeIcon className={styles.icon} color='themeColor' />
            }
            <ListItemText>Mode</ListItemText>
          </ListItemButton>
        </List>
      </Sidebar>
    </div>
  );
}

export default Navbar;
