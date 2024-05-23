import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/joy/Link';
import Search from './search';
import { useMediaQuery } from "@mui/material";
import LocationSelector from './selectors/location';
import AccountSlider from './selectors/accountSlider';
import * as React from 'react';

export default function Appbar(){
    const matches1 = useMediaQuery("(min-width:1100px)");
    const matches2 = useMediaQuery("(min-width:800px)");
  


    return(
      <Box sx={{flexGrow:1}}>
      <AppBar sx={{backgroundColor:'#FFF', padding:1}}>
      <Toolbar className='container' sx={{justifyContent: "space-between"}}>
      <Link level='h3' href='/' underline="none" sx={{color:'#000'}}>
      BookShow
      </Link>
      {matches1 ? <Search /> : <></>}
            <LocationSelector/>
            <AccountSlider/>
            
    
      </Toolbar>
      </AppBar>
      </Box>
    )
}