import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTheme } from '@mui/material/styles';



export default function PieColor() {
    const theme = useTheme();
    const colorPalette = [
      
      (theme.vars || theme).palette.primary.light,
      (theme.vars || theme).palette.primary.main,
      (theme.vars || theme).palette.primary.dark,
      
    ];
    const anaemia = [
        {
          label: '是',
          value: 56.85,
        },
        {
          label: '否',
          value: 43.15,
        },
      ];
      const diabetes = [
        {
          label: '是',
          value: 41.81,
        },
        {
          label: '否',
          value: 58.19,
        },
      ];
      const high_blood_pressure = [
        {
          label: '是',
          value: 35.11,
        },
        {
          label: '否',
          value: 64.89,
        },
      ];
  return (
    <Stack direction="row" width="100%" textAlign="center" spacing={2}>
      <Box flexGrow={1}>
        <Typography>贫血</Typography>
        <PieChart
          colors={colorPalette}
          series={[
            {
              data: anaemia,
            },
          ]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>糖尿病</Typography>
        <PieChart
          colors={colorPalette}
          series={[
            {
              data: diabetes,
            },
          ]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography>高血压</Typography>
        <PieChart
          colors={colorPalette}
          series={[
            {
              data: high_blood_pressure,
            },
          ]}
          {...pieParams}
        />
      </Box>
    </Stack>
  );
}

const pieParams = {
  height: 200,
  margin: { right: 5 },
  slotProps: { legend: { hidden: true } },
};