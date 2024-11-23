import * as React from 'react';
import Stack from '@mui/material/Stack';
import { NotificationsRounded, ShoppingCartRounded } from '@mui/icons-material';

import Search from '../../ui/Search';
import BadgeButton from '../../ui/BadgeButton';
import { Grid2 as Grid } from '@mui/material';

export default function Header() {
  const 
  const openBasket = () => {

  }

  return (
    <Grid container sx={{
      width: '100%',
      alignItems: 'center',
      pt: 1.5
    }}>
      <Grid size={3} />
      <Grid size={6}>
      <Search sx={{width: '100%'}} />
      </Grid>
      <Grid size={3}>
        <Stack direction={'row'} spacing={2} justifyContent={'end'}>
          <BadgeButton nbNotifs={1} aria-label="Open notifications">
            <NotificationsRounded />
          </BadgeButton>
          <BadgeButton nbNotifs={1} aria-label="Open basket" onClick={openBasket}>
            <ShoppingCartRounded />
          </BadgeButton>
        </Stack>
      </Grid>
    </Grid>
  );
}
