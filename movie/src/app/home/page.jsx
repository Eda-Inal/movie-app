import React from 'react';
import { Grid, Box, Button } from '@mui/material';

function Home() {
  return (
    <Grid
      container
      sx={{
        mx: 'auto',
        maxWidth: '100%',
        height: '100vh',
        padding: 2,
        maxWidth: "1000px",
        margin: "0 auto",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}
    >
      <Grid item lg={2}>
        <Box>
          sdsdds
        </Box>
      </Grid>
      <Grid item lg={10}>
        <Grid container spacing={2}>
          {Array.from({ length: 8 }).map((_, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: '200px', 
              }}
            >
              <Box
                height={250}
                width="100%"
                maxWidth={200}
                display="flex"
                alignItems="center"
                justifyContent="center"
                
                p={2}
                sx={{
                  border: '2px solid grey',
                  cursor:"pointer",
                  backgroundColor: ['palevioletred', 'orange', 'purple', 'turquoise', 'yellowgreen', 'palevioletred', 'blueviolet', 'red'][index],
                }}
              >
                {index + 1}
              </Box>
            
            </Grid>
          ))}
          
        </Grid>
        <Button sx={{mt:"3rem", mb:"3rem"}} variant="contained" color="secondary">
  Load more
</Button>
      </Grid>
    </Grid>
  );
}

export default Home;
