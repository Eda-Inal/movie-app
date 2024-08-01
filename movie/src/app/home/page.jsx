import React from 'react';
import { Grid, Box } from '@mui/material';

function Home() {
  return (
    <Grid
      container
      sx={{
        mx: 'auto',
        maxWidth: '100%', // Ensures the grid container spans the entire width of the screen
        height: '100vh',
        padding: 2,
      }}
      alignItems="center"
      justifyContent="center"
      spacing={2} // Adds spacing between grid items
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index} display="flex" justifyContent="center">
          <Box
            height={250}
            width="100%" // Use percentage width for responsiveness
            maxWidth={200} // Max width for the box
            my={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={4}
            p={2}
            sx={{
              border: '2px solid grey',
              backgroundColor: ['palevioletred', 'orange', 'purple', 'turquoise', 'yellowgreen', 'palevioletred', 'blueviolet', 'red'][index]
            }}
          >
            {index + 1}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Home;
