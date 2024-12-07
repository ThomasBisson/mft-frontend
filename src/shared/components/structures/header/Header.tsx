import * as React from 'react';
import { Grid2 as Grid, Stack } from '@mui/material';
import { NotificationsRounded, ShoppingCartRounded } from '@mui/icons-material';

import { useAppDispatch } from '../../../hooks/redux-hooks';
import { open } from '../../../store/basketSlice';

import Search from '../../ui/Search';
import BadgeButton from '../../ui/BadgeButton';

export default function Header() {
  const dispatch = useAppDispatch();

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
          <BadgeButton nbNotifs={1} aria-label="Open basket" onClick={() => dispatch(open())}>
            <ShoppingCartRounded />
          </BadgeButton>
        </Stack>
      </Grid>
    </Grid>
  );
}
