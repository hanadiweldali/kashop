import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Link ,Stack ,Select , MenuItem } from '@mui/material';
import { Link as Routerlink} from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function MainNavbar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ backgroundColor:"#f5f5f5" }}>
       
          <Toolbar>
            <Box sx={{ display: "flex", justifyContent:"space-between", width:"100%"}}>
            <Box sx={{ display: "flex", gap: 8 , color:"black"}}>
              <Typography variant="h6" component="div">KAshop</Typography>
          
        
            <Stack direction="row" spacing={3} alignItems="center">
                  <Link color="inherit" component={Routerlink} to="/" underline='none'>HOME</Link>
                   <Select defaultValue="r"  variant="standard"  disableUnderline  sx={{ fontSize: 17 }}>
                    <MenuItem value="r" disabled>PAGES</MenuItem>
            <MenuItem value="About" component={Routerlink} to="/about">About</MenuItem>
                 <MenuItem value="Cart" component={Routerlink} to="/cart">Cart</MenuItem>
                  <MenuItem value="Checkout" component={Routerlink} to="/checkout">Checkout</MenuItem>
                   
          </Select>
          <Link color="inherit" component={Routerlink} to="/contact" underline='none'>CONTACT</Link>
          <Link color="inherit" component={Routerlink} to="/product" underline='none'>PRODUCT</Link>
            </Stack>
            </Box>
           <Box sx={{display:"flex",gap:2}}>
            <FavoriteBorderIcon sx={{color: "black",fontSize: 20,width: 40,height: 40,border: "1px solid black",borderRadius: "50%",   padding: "8px",display: "flex",alignItems: "center",justifyContent: "center"}}/>
            <Box sx={{display:"flex" , flexDirection:"column" ,color:"black"}}>
                <Typography variant="body2" fontWeight="bold">Welcome</Typography>
            <Box>
                 <Link color="inherit" component={Routerlink} to="/login" underline='none'>Login / </Link>
                  <Link color="inherit" component={Routerlink} to="/register" underline='none'>Register</Link>
                  
            </Box>
            </Box>
            <Box sx={{display:"flex",gap:2}}>
           <Box sx={{width: 40,height: 40,border: "1px solid black",borderRadius: "50%",   padding: "8px"}}></Box>
           <Box sx={{display:"flex",flexDirection:"column",color:"black"}}>
             <Typography variant="body2" fontWeight="bold">Cart</Typography>
             <Typography variant="body2" fontWeight="bold">$1,689.00</Typography>
           </Box>
            </Box>
            </Box>
            </Box>
          </Toolbar>
      </AppBar>
    </Box>
  );
}

