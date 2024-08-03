import React from 'react'
import { TextField,Box ,InputLabel, IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
   <Box
   sx={{
display:"flex",
  my:"30px",
    justifyContent:"center"

   }}
   >
    <Box width={500}  >
    <TextField
sx={{
    width:"100%",
    borderRadius:"32px",
    '& .MuiOutlinedInput-root':{
        borderRadius:"30px",
        height:"40px"
    },
    
 
}}
fullWidth
color='secondary'
id="filled-search"
placeholder='search movie'
 type="search"
 InputProps={{
    endAdornment:(
        <IconButton>
            <SearchIcon color='accent'/>
        </IconButton>
    )
 }}
/>
    </Box>

   </Box>
  )
}

export default Search
