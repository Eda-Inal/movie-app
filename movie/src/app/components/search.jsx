import React from 'react'
import { TextField,Box ,InputLabel, IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
   <Box
   sx={{
display:"flex",
  my:{
lg:"15px"
  },
    justifyContent:"center"

   }}
   >
    <Box sx={{
      xs:"60px",
      md:"150px",
      lg:"400px"
    }}  >
    <TextField
sx={{
    width:"100%",
    borderRadius:"32px",
    '& .MuiOutlinedInput-root':{
        borderRadius:"30px",
        height:"40px"
    },'& fieldset':{
      borderColor:"gray"  
    },'&:hover fieldset': {
        borderColor:"gray"
    }
    
 
}}
fullWidth
color='secondary'
id="filled-search"
placeholder='search movie'
 type="search"
 InputProps={{
    endAdornment:(
        <IconButton>
            <SearchIcon color='accent' />
        </IconButton>
    )
 }}
/>
    </Box>

   </Box>
  )
}

export default Search
