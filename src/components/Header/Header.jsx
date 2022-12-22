import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const navItems = ['Home', 'Movies'];

export default function Header() {
  return (
    <Box sx={{ display: 'flex', marginBottom: '85px' }}>
      <AppBar component="nav">
        <Toolbar>
          <Box sx={{ display: { sm: 'block' } }}>
            {navItems.map(item => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
