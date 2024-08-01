import React from 'react';
import { Grid, Box, Button , Typography} from '@mui/material';
import Image from 'next/image';
import her from "../../../public/her.jpg"

function Home() {
  return (
    <Box 
    sx={{
      width: '80%',
      height: '50vh',
      margin: '0 auto',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'rgba(0, 0, 0, 0.5)' 
    }}
  >
    <Image
      src={her}
      layout="fill"
      objectFit="cover"
      alt="Movie Image"
      style={{ filter: 'brightness(50%)' }} 
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: 16,
        left: 16,
        color: 'white',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '16px',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}
    >
      <Typography variant="h3">Titanic</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body1">Romance</Typography>
        <Typography variant="body1">3h 15m</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '8px' }}>
        <Button variant="contained" color="secondary">Watch Now</Button>
        <Button variant="outlined" color="secondary">Add to Wishlist</Button>
      </Box>
    </Box>
  </Box>







































//     <Grid
//       container
//       sx={{
//         mx: 'auto',
//         maxWidth: '100%',
//         height: '100vh',
//         padding: 2,
//         maxWidth: "1000px",
//         margin: "0 auto",
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around'
//       }}
//     >
//       <Grid item lg={2}>
//         <Box>
//           sdsdds
//         </Box>
//       </Grid>
//       <Grid item lg={10}>
//         <Grid container spacing={2}>
//           {Array.from({ length: 8 }).map((_, index) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               lg={3}
//               key={index}
//               sx={{
//                 flexGrow: 1,
//                 flexShrink: 1,
//                 flexBasis: '200px', 
//               }}
//             >
//               <Box
//                 height={250}
//                 width="100%"
//                 maxWidth={200}
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
                
//                 p={2}
//                 sx={{
//                   border: '2px solid grey',
//                   cursor:"pointer",
//                   backgroundColor: ['palevioletred', 'orange', 'purple', 'turquoise', 'yellowgreen', 'palevioletred', 'blueviolet', 'red'][index],
//                 }}
//               >
//                 {index + 1}
//               </Box>
            
//             </Grid>
//           ))}
          
//         </Grid>
//         <Button sx={{mt:"3rem", mb:"3rem"}} variant="contained" color="secondary">
//   Load more
// </Button>
//       </Grid>
//     </Grid>
  );
}

export default Home;
