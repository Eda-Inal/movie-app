import React from 'react';
import { Box, Typography, Divider, Grid,Tooltip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import her from "../../../public/her.jpg";
import Image from 'next/image';
import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
function Details() {
  return (
    <Box
      sx={{
        margin: "20px auto",
        position:"relative",
        padding: "20px",
        maxWidth: "800px",
        display: "flex",
        alignItems: "center",
        borderRadius: "16px",
       
        backdropFilter: "blur(10px)",
        border:"1px solid gray",
        boxShadow:"2px 3px"
      }}
    >
      <Box sx={{ flex: "0 0 auto", marginRight: "20px" }}>
        <Image src={her} alt="Movie Poster" width={300} height={200} />
      </Box>
      <Box sx={{ flex: "1 1 auto" }}>
        <Typography variant="h4" sx={{ marginBottom: "10px" }}>Titanic</Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>Year: 1997</Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>Duration: 3h 15m</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
          <Typography variant="body1">IMDb: 8.3</Typography>
          <StarIcon sx={{ marginLeft: "5px", color: "gold" }} />
        </Box>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', marginBottom: "10px" }} />
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>Director: James Cameron</Typography>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', marginBottom: "10px" }} />
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>Stars: Leonardo DiCaprio, Kate Winslet</Typography>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', marginBottom: "10px" }} />
        <Typography variant="body1">Topic: A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.</Typography>
      </Box>
    
<UndoRoundedIcon fontSize='medium' color='accent' sx={{
    position:"absolute",
    right:10,
    top:0,
    cursor:"pointer"
}}/>
    </Box>
  );
}

export default Details;
