import React from 'react'
import { Box, Container, Typography, Select, MenuItem, Stack } from "@mui/material";
export default function TopHeader () {
  return (
     <Box sx={{backgroundColor: "#f5f5f5",borderBottom: "1px solid #e0e0e0",fontSize: "14px"}}>
      <Container maxWidth={false} sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>

        <Stack direction="row" spacing={2}>
          <Typography variant="body2">Hotline 24/7</Typography>
          <Typography variant="body2" fontWeight="bold">
            (025) 3886 25 16
          </Typography>
        </Stack>

        <Stack direction="row" spacing={3} alignItems="center">
    
          <Select defaultValue="USD"  variant="standard"  disableUnderline  sx={{ fontSize: 14 }}>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
          </Select>

          <Select defaultValue="ENG" variant="standard" disableUnderline sx={{ fontSize: 14 }}>
            <MenuItem value="ENG">ENG</MenuItem>
            <MenuItem value="AR">AR</MenuItem>
          </Select>

        </Stack>

      </Container>
    </Box>
  )
}
