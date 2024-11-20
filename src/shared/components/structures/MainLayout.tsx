import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './AppNavbar';
import Header from './header/Header';
import SideMenu from './sideNav/SideMenu';

interface IMainLayout {}

export default function MainLayout({children}: React.PropsWithChildren<IMainLayout>) {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      <AppNavbar />
      {/* Main content */}
      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          backgroundColor: 'white',
          overflow: 'auto',
        })}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            mx: 3,
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}
        >
          <Header />
          { children }
        </Stack>
      </Box>
    </Box>
  );
}
