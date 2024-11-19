import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';

export default function PageViewsBarChart() {
  const theme = useTheme();
  const colorPalette = [
    (theme.vars || theme).palette.primary.dark,
    (theme.vars || theme).palette.primary.main,
    (theme.vars || theme).palette.primary.light,
  ];

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          数据统计
        </Typography>
        <Stack sx={{ justifyContent: 'space-between' }}>
          <Stack
            direction="row"
            sx={{
              alignContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="h4" component="p">
              14k
            </Typography>
            {/* <Chip size="small" color="error" label="-8%" /> */}
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            各保险定价区间人数统计
          </Typography>
        </Stack>
        <BarChart
          borderRadius={8}
          colors={colorPalette}
          xAxis={[
            {
              scaleType: 'band',
              categoryGapRatio: 0.5,
              data: ['¥100', '¥120', '¥140', '¥160', '¥180', '¥200','¥220','¥240','¥260','¥280','¥300','¥300+'],
            },
          ]}
          series={[
            {
              id: 'Senior',
              label: '老年',
              data: [0, 0, 7868, 7456, 11814, 10532, 6952, 6828, 3698, 2617, 1995,7474],
              stack: 'A',
            },
            {
              id: 'Middle-aged',
              label: '中年',
              data: [3344, 12995, 12208, 9571, 8289, 4691, 2819, 2162, 1343, 1003, 659,1829],
              stack: 'A',
            },
            {
              id: 'Youth',
              label: '青壮年',
              data: [2661, 2759, 2012, 1173, 669, 407, 284, 176, 119, 61, 48,35,30,40],
              stack: 'A',
            },
          ]}
          height={250}
          margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
          grid={{ horizontal: true }}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
