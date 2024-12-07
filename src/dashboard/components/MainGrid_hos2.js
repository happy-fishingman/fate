import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import CustomizedDataGrid from './CustomizedDataGrid_hos2';
import HighlightedCard_hos from './HighlightedCard_hos';
import HighlightedCard2 from './HighlightedCard2';
import HighlightedCard3_hos from './HighlightedCard3_hos';
import PageViewsBarChart from './PageViewsBarChart';
import SessionsChart from './SessionsChart';
import StatCard from './StatCard';

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {/* <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <HighlightedCard_hos />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <HighlightedCard2 />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <HighlightedCard3_hos />
        </Grid> */}
        {/* {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))} */}

        {/* <Grid size={{ xs: 12, md: 6 }}>
          <SessionsChart />
        </Grid> */}
        {/* <Grid size={{ xs: 12, md: 12 }}>
          <PageViewsBarChart />
        </Grid> */}
      </Grid>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 12 }}>
          <CustomizedDataGrid />
        </Grid>
        {/* <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
            <CustomizedTreeView />
            <ChartUserByCountry />
          </Stack>
        </Grid> */}
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
