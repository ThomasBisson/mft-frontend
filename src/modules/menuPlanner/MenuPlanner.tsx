import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../../shared/components/structures/copyright/Copyright';
import RecipeCard from './components/ui/RecipeCard';

export default function MenuPlanner() {
  return (
    <Box sx={{ width: '100%' }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Recipes
      </Typography>
      <Grid
        container
        spacing={1}
      >
        {[1,2,3,4,5,6,7,8,9].map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3, xl: 2 }}>
            <RecipeCard title='lol' imagePath='/images/recipes/soupe.jpg' description='desc lol' />
          </Grid>
        ))}
      </Grid>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
          </Stack>
        </Grid>
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
