import React from 'react'
import { Box, TextField, InputAdornment, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchBar() {
 return (
    <Box sx={{background: "#19b21a", padding: "20px",borderRadius: "12px",display: "flex",alignItems: "center",justifyContent: "space-between"}}>
      
      <Box sx={{display: "flex",alignItems: "center",background: "#f1f1f1",borderRadius: "30px",px: 2,width: "500px"}}>
        
        <TextField select variant="standard" defaultValue="all" InputProps={{ disableUnderline: true }} sx={{ width: 150 }}>
          <MenuItem value="all">All Categories</MenuItem>
        
        </TextField>

       
        <TextField placeholder="Search anything..." variant="standard" fullWidth InputProps={{disableUnderline: true,endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ color: "black", cursor: "pointer" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      
      <Box sx={{ color: "white", display: "flex", gap: 4, fontSize: 14 }}>
        <span>FREE SHIPPING OVER $199</span>
        <span>30 DAYS MONEY BACK</span>
        <span>100% SECURE PAYMENT</span>
      </Box>
    </Box>
  );
}
