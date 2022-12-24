import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { createSvgIcon } from '@mui/material/utils';

const navItems = ['Home', 'Movies'];

export default function Header() {
  const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    'Home'
  );

  return (
    <>
      <Box sx={{ display: 'flex', marginBottom: '85px' }}>
        <AppBar component="nav">
          <Toolbar>
            <Link to={'home'}>
              <HomeIcon style={{ fill: '#fff' }} />
            </Link>
            <Box sx={{ display: { sm: 'block' } }}>
              {navItems.map(item => (
                <Link to={item.toLowerCase()} key={item}>
                  <Button sx={{ color: '#fff' }}>{item}</Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
