import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

function getDaysInMonth(month, year) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

function renderSparklineCell(params) {
  const data = getDaysInMonth(4, 2024);
  const { value, colDef } = params;

  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <SparkLineChart
        data={value}
        width={colDef.computedWidth || 100}
        height={32}
        plotType="bar"
        showHighlight
        showTooltip
        colors={['hsl(210, 98%, 42%)']}
        xAxis={{
          scaleType: 'band',
          data,
        }}
      />
    </div>
  );
}

function renderStatus(status) {
  const colors = {
    Online: 'success',
    Offline: 'default',
  };

  return <Chip label={status} color={colors[status]} size="small" />;
}

export function renderAvatar(params) {
  if (params.value == null) {
    return '';
  }

  return (
    <Avatar
      sx={{
        backgroundColor: params.value.color,
        width: '24px',
        height: '24px',
        fontSize: '0.85rem',
      }}
    >
      {params.value.name.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}

// export const columns = [
//   { field: 'pageTitle', headerName: 'Page Title', flex: 1.5, minWidth: 200 },
//   {
//     field: 'status',
//     headerName: 'Status',
//     flex: 0.5,
//     minWidth: 80,
//     renderCell: (params) => renderStatus(params.value),
//   },
//   {
//     field: 'users',
//     headerName: 'Users',
//     headerAlign: 'right',
//     align: 'right',
//     flex: 1,
//     minWidth: 80,
//   },
//   {
//     field: 'eventCount',
//     headerName: 'Event Count',
//     headerAlign: 'right',
//     align: 'right',
//     flex: 1,
//     minWidth: 100,
//   },
//   {
//     field: 'viewsPerUser',
//     headerName: 'Views per User',
//     headerAlign: 'right',
//     align: 'right',
//     flex: 1,
//     minWidth: 120,
//   },
//   {
//     field: 'averageTime',
//     headerName: 'Average Time',
//     headerAlign: 'right',
//     align: 'right',
//     flex: 1,
//     minWidth: 100,
//   },
//   {
//     field: 'conversions',
//     headerName: 'Daily Conversions',
//     flex: 1,
//     minWidth: 150,
//     renderCell: renderSparklineCell,
//   },
// ];

// export const columns = [
//   { field: 'pageTitle', headerName: 'Page Title', flex: 1.5, minWidth: 200 },
//   {
//     field: 'status',
//     headerName: 'Status',
//     flex: 0.5,
//     minWidth: 80,
//     renderCell: (params) => renderStatus(params.value),
//   },
//   {
//     field: 'users',
//     headerName: 'Users',
//     headerAlign: 'right',
//     align: 'right',
//     flex: 1,
//     minWidth: 80,
//   },
//   {
//     field: 'eventCount',
//     headerName: 'Event Count',
//     headerAlign: 'right',
//     align: 'right',
//     flex: 1,
//     minWidth: 100,
//   },
//   {
//     field: 'viewsPerUser',
//     headerName: 'Views per User',
//     headerAlign: 'right',
//     align: 'right',
//     flex: 1,
//     minWidth: 120,
//   },
//   {
//     field: 'averageTime',
//     headerName: 'Average Time',
//     headerAlign: 'right',
//     align: 'right',
//     flex: 1,
//     minWidth: 100,
//   },
//   {
//     field: 'conversions',
//     headerName: 'Daily Conversions',
//     flex: 1,
//     minWidth: 150,
//     renderCell: renderSparklineCell,
//   },
// ];

export const columns = [
  { field: 'BeneID', headerName: 'BeneID', flex: 1, minWidth: 100 },
  { field: 'Age', headerName: 'Age', flex: 1, minWidth: 100 },
  { field: 'Gender', headerName: 'Gender', flex: 1, minWidth: 100 },
  { field: 'Race', headerName: 'Race', flex: 1, minWidth: 100 },
  { field: 'State', headerName: 'State', flex: 1, minWidth: 100 },
  { field: 'County', headerName: 'County', flex: 1, minWidth: 100 },
  { field: 'IPAnnualReimbursementAmt', headerName: 'IPAnnualReimbursementAmt', flex: 1, minWidth: 100 },
  { field: 'IPAnnualDeductibleAmt', headerName: 'IPAnnualDeductibleAmt', flex: 1, minWidth: 100 },
  { field: 'OPAnnualReimbursementAmt', headerName: 'OPAnnualReimbursementAmt', flex: 1, minWidth: 100 },
  { field: 'OPAnnualDeductibleAmt', headerName: 'OPAnnualDeductibleAmt', flex: 1, minWidth: 100 },
  { field: 'InsurancePrice', headerName: 'InsurancePrice', flex: 1, minWidth: 100 },
];

export const rows = [
  {
    id: 1,
    BeneID: 11001,
    Age: 57,
    Gender: 1,
    Race: 1,
    State: 39,
    County: 230,
    IPAnnualReimbursementAmt: 36000,
    IPAnnualDeductibleAmt: 3204,
    OPAnnualReimbursementAmt: 60,
    OPAnnualDeductibleAmt: 70,
    InsurancePrice: 383.04
  },
  {
    id: 2,
    BeneID: 11002,
    Age: 64,
    Gender: 2,
    Race: 1,
    State: 39,
    County: 280,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 30,
    OPAnnualDeductibleAmt: 50,
    InsurancePrice: 114.03
  },
  {
    id: 3,
    BeneID: 11003,
    Age: 64,
    Gender: 1,
    Race: 1,
    State: 52,
    County: 590,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 90,
    OPAnnualDeductibleAmt: 40,
    InsurancePrice: 144.13
  },
  {
    id: 4,
    BeneID: 11004,
    Age: 78,
    Gender: 1,
    Race: 1,
    State: 39,
    County: 270,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 1810,
    OPAnnualDeductibleAmt: 760,
    InsurancePrice: 244.34
  },
  {
    id: 5,
    BeneID: 11005,
    Age: 65,
    Gender: 1,
    Race: 1,
    State: 24,
    County: 680,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 1790,
    OPAnnualDeductibleAmt: 1200,
    InsurancePrice: 183.22
  },
  {
    id: 6,
    BeneID: 11006,
    Age: 24,
    Gender: 2,
    Race: 1,
    State: 23,
    County: 810,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 500,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 76.38
  },
  {
    id: 7,
    BeneID: 11007,
    Age: 60,
    Gender: 1,
    Race: 2,
    State: 45,
    County: 610,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 1490,
    OPAnnualDeductibleAmt: 160,
    InsurancePrice: 182.68
  },
  {
    id: 8,
    BeneID: 11008,
    Age: 66,
    Gender: 2,
    Race: 1,
    State: 15,
    County: 140,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 30,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 156.80
  },
  {
    id: 9,
    BeneID: 11009,
    Age: 71,
    Gender: 1,
    Race: 1,
    State: 44,
    County: 230,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 100,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 180.18
  },
  {
    id: 10,
    BeneID: 11010,
    Age: 64,
    Gender: 2,
    Race: 1,
    State: 41,
    County: 30,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 1170,
    OPAnnualDeductibleAmt: 660,
    InsurancePrice: 184.53
  },
  {
    id: 11,
    BeneID: 11011,
    Age: 86,
    Gender: 2,
    Race: 2,
    State: 1,
    County: 360,
    IPAnnualReimbursementAmt: 5000,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 250,
    OPAnnualDeductibleAmt: 320,
    InsurancePrice: 251.97
  },
  {
    id: 12,
    BeneID: 11012,
    Age: 66,
    Gender: 1,
    Race: 1,
    State: 14,
    County: 982,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 2890,
    OPAnnualDeductibleAmt: 1740,
    InsurancePrice: 293.24
  },
  {
    id: 13,
    BeneID: 11013,
    Age: 73,
    Gender: 2,
    Race: 1,
    State: 7,
    County: 10,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 440,
    OPAnnualDeductibleAmt: 600,
    InsurancePrice: 171.75
  },
  {
    id: 14,
    BeneID: 11014,
    Age: 62,
    Gender: 2,
    Race: 1,
    State: 45,
    County: 780,
    IPAnnualReimbursementAmt: 21260,
    IPAnnualDeductibleAmt: 2136,
    OPAnnualReimbursementAmt: 120,
    OPAnnualDeductibleAmt: 100,
    InsurancePrice: 217.94
  },
  {
    id: 15,
    BeneID: 11015,
    Age: 64,
    Gender: 2,
    Race: 1,
    State: 13,
    County: 270,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 60,
    OPAnnualDeductibleAmt: 30,
    InsurancePrice: 125.48
  },
  {
    id: 16,
    BeneID: 11016,
    Age: 81,
    Gender: 2,
    Race: 2,
    State: 34,
    County: 400,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 2320,
    OPAnnualDeductibleAmt: 1480,
    InsurancePrice: 262.45
  },
  {
    id: 17,
    BeneID: 11017,
    Age: 60,
    Gender: 2,
    Race: 1,
    State: 31,
    County: 270,
    IPAnnualReimbursementAmt: 22000,
    IPAnnualDeductibleAmt: 2136,
    OPAnnualReimbursementAmt: 1400,
    OPAnnualDeductibleAmt: 840,
    InsurancePrice: 336.78
  },
  {
    id: 18,
    BeneID: 11018,
    Age: 61,
    Gender: 1,
    Race: 2,
    State: 24,
    County: 120,
    IPAnnualReimbursementAmt: 8000,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 860,
    OPAnnualDeductibleAmt: 50,
    InsurancePrice: 219.46
  },
  {
    id: 19,
    BeneID: 11019,
    Age: 76,
    Gender: 1,
    Race: 3,
    State: 7,
    County: 50,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 780,
    OPAnnualDeductibleAmt: 290,
    InsurancePrice: 226.75
  },
  {
    id: 20,
    BeneID: 11020,
    Age: 61,
    Gender: 1,
    Race: 1,
    State: 5,
    County: 470,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 60,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 144.09
  },
  {
    id: 21,
    BeneID: 11021,
    Age: 73,
    Gender: 1,
    Race: 3,
    State: 7,
    County: 20,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 520,
    OPAnnualDeductibleAmt: 150,
    InsurancePrice: 256.33
  },
  {
    id: 22,
    BeneID: 11022,
    Age: 42,
    Gender: 1,
    Race: 2,
    State: 49,
    County: 892,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 100,
    OPAnnualDeductibleAmt: 30,
    InsurancePrice: 100.10
  },
  {
    id: 23,
    BeneID: 11023,
    Age: 69,
    Gender: 2,
    Race: 3,
    State: 5,
    County: 200,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 370,
    OPAnnualDeductibleAmt: 90,
    InsurancePrice: 171.63
  },
  {
    id: 24,
    BeneID: 11024,
    Age: 58,
    Gender: 2,
    Race: 1,
    State: 46,
    County: 170,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 14590,
    OPAnnualDeductibleAmt: 3160,
    InsurancePrice: 222.08
  },
  {
    id: 25,
    BeneID: 11025,
    Age: 62,
    Gender: 2,
    Race: 1,
    State: 45,
    County: 610,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 40,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 171.07
  },
  {
    id: 26,
    BeneID: 11027,
    Age: 60,
    Gender: 2,
    Race: 1,
    State: 6,
    County: 500,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 40,
    OPAnnualDeductibleAmt: 10,
    InsurancePrice: 114.05
  },
  {
    id: 27,
    BeneID: 11028,
    Age: 59,
    Gender: 1,
    Race: 1,
    State: 38,
    County: 230,
    IPAnnualReimbursementAmt: 6000,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 0,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 208.35
  },
  {
    id: 28,
    BeneID: 11029,
    Age: 72,
    Gender: 1,
    Race: 5,
    State: 10,
    County: 50,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 820,
    OPAnnualDeductibleAmt: 320,
    InsurancePrice: 257.09
  },
  {
    id: 29,
    BeneID: 11031,
    Age: 56,
    Gender: 2,
    Race: 1,
    State: 38,
    County: 200,
    IPAnnualReimbursementAmt: 23650,
    IPAnnualDeductibleAmt: 2136,
    OPAnnualReimbursementAmt: 40,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 207.28
  },
  {
    id: 30,
    BeneID: 11032,
    Age: 63,
    Gender: 2,
    Race: 1,
    State: 26,
    County: 710,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 0,
    OPAnnualDeductibleAmt: 200,
    InsurancePrice: 114
  },
  {
    id: 31,
    BeneID: 11033,
    Age: 88,
    Gender: 2,
    Race: 1,
    State: 5,
    County: 400,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 100,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 142.64
  },
  {
    id: 32,
    BeneID: 11034,
    Age: 54,
    Gender: 2,
    Race: 1,
    State: 34,
    County: 760,
    IPAnnualReimbursementAmt: 131140,
    IPAnnualDeductibleAmt: 2136,
    OPAnnualReimbursementAmt: 1650,
    OPAnnualDeductibleAmt: 80,
    InsurancePrice: 665.57
  },
  {
    id: 33,
    BeneID: 11036,
    Age: 35,
    Gender: 1,
    Race: 1,
    State: 3,
    County: 90,
    IPAnnualReimbursementAmt: 30000,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 100,
    OPAnnualDeductibleAmt: 20,
    InsurancePrice: 229.50
  },
  {
    id: 34,
    BeneID: 11037,
    Age: 60,
    Gender: 2,
    Race: 1,
    State: 38,
    County: 10,
    IPAnnualReimbursementAmt: 3150,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 160,
    OPAnnualDeductibleAmt: 50,
    InsurancePrice: 210.23
  },
  {
    id: 35,
    BeneID: 11038,
    Age: 63,
    Gender: 1,
    Race: 1,
    State: 20,
    County: 130,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 480,
    OPAnnualDeductibleAmt: 300,
    InsurancePrice: 168.81
  },
  {
    id: 36,
    BeneID: 11039,
    Age: 81,
    Gender: 1,
    Race: 1,
    State: 14,
    County: 141,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 110,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 240.26
  },
  {
    id: 37,
    BeneID: 11040,
    Age: 41,
    Gender: 2,
    Race: 1,
    State: 5,
    County: 90,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 400,
    OPAnnualDeductibleAmt: 200,
    InsurancePrice: 104.92
  },
  {
    id: 38,
    BeneID: 11041,
    Age: 78,
    Gender: 2,
    Race: 1,
    State: 10,
    County: 150,
    IPAnnualReimbursementAmt: 23000,
    IPAnnualDeductibleAmt: 2136,
    OPAnnualReimbursementAmt: 620,
    OPAnnualDeductibleAmt: 370,
    InsurancePrice: 395.30
  },
  {
    id: 39,
    BeneID: 11042,
    Age: 81,
    Gender: 2,
    Race: 1,
    State: 33,
    County: 400,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 120,
    OPAnnualDeductibleAmt: 30,
    InsurancePrice: 156.94
  },
  {
    id: 40,
    BeneID: 11043,
    Age: 47,
    Gender: 2,
    Race: 1,
    State: 18,
    County: 170,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 720,
    OPAnnualDeductibleAmt: 60,
    InsurancePrice: 153.09
  },
  {
    id: 41,
    BeneID: 11044,
    Age: 81,
    Gender: 2,
    Race: 1,
    State: 33,
    County: 700,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 400,
    OPAnnualDeductibleAmt: 300,
    InsurancePrice: 157.38
  },
  {
    id: 42,
    BeneID: 11045,
    Age: 89,
    Gender: 2,
    Race: 1,
    State: 45,
    County: 390,
    IPAnnualReimbursementAmt: 9280,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 2370,
    OPAnnualDeductibleAmt: 540,
    InsurancePrice: 260.61
  },
  {
    id: 43,
    BeneID: 11046,
    Age: 73,
    Gender: 2,
    Race: 1,
    State: 39,
    County: 620,
    IPAnnualReimbursementAmt: 7020,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 0,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 176.14
  },
  {
    id: 44,
    BeneID: 11047,
    Age: 78,
    Gender: 2,
    Race: 1,
    State: 27,
    County: 260,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 560,
    OPAnnualDeductibleAmt: 100,
    InsurancePrice: 186.29
  },
  {
    id: 45,
    BeneID: 11048,
    Age: 62,
    Gender: 1,
    Race: 1,
    State: 33,
    County: 20,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 80,
    OPAnnualDeductibleAmt: 40,
    InsurancePrice: 120.10
  },
  {
    id: 46,
    BeneID: 11049,
    Age: 37,
    Gender: 2,
    Race: 1,
    State: 45,
    County: 930,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 680,
    OPAnnualDeductibleAmt: 280,
    InsurancePrice: 133.90
  },
  {
    id: 47,
    BeneID: 11050,
    Age: 68,
    Gender: 1,
    Race: 1,
    State: 45,
    County: 734,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 340,
    OPAnnualDeductibleAmt: 120,
    InsurancePrice: 210.71
  },
  {
    id: 48,
    BeneID: 11051,
    Age: 57,
    Gender: 2,
    Race: 1,
    State: 51,
    County: 250,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 1000,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 115.14
  },
  {
    id: 49,
    BeneID: 11052,
    Age: 71,
    Gender: 2,
    Race: 1,
    State: 5,
    County: 510,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 70,
    OPAnnualDeductibleAmt: 40,
    InsurancePrice: 156.86
  },
  {
    id: 50,
    BeneID: 11053,
    Age: 42,
    Gender: 2,
    Race: 1,
    State: 18,
    County: 60,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 800,
    OPAnnualDeductibleAmt: 140,
    InsurancePrice: 153.22
  },
  {
    id: 51,
    BeneID: 11054,
    Age: 43,
    Gender: 2,
    Race: 1,
    State: 49,
    County: 563,
    IPAnnualReimbursementAmt: 4000,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 400,
    OPAnnualDeductibleAmt: 100,
    InsurancePrice: 212.44
  },
  {
    id: 52,
    BeneID: 11055,
    Age: 61,
    Gender: 2,
    Race: 1,
    State: 29,
    County: 10,
    IPAnnualReimbursementAmt: 16040,
    IPAnnualDeductibleAmt: 2136,
    OPAnnualReimbursementAmt: 100,
    OPAnnualDeductibleAmt: 20,
    InsurancePrice: 279.63
  },
  {
    id: 53,
    BeneID: 11056,
    Age: 69,
    Gender: 1,
    Race: 1,
    State: 5,
    County: 200,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 3800,
    OPAnnualDeductibleAmt: 680,
    InsurancePrice: 186.84
  },
  {
    id: 54,
    BeneID: 11057,
    Age: 67,
    Gender: 2,
    Race: 1,
    State: 5,
    County: 570,
    IPAnnualReimbursementAmt: 41080,
    IPAnnualDeductibleAmt: 2136,
    OPAnnualReimbursementAmt: 200,
    OPAnnualDeductibleAmt: 50,
    InsurancePrice: 444.52
  },
  {
    id: 55,
    BeneID: 11058,
    Age: 63,
    Gender: 2,
    Race: 1,
    State: 52,
    County: 40,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 160,
    OPAnnualDeductibleAmt: 530,
    InsurancePrice: 194.11
  },
  {
    id: 56,
    BeneID: 11059,
    Age: 52,
    Gender: 1,
    Race: 1,
    State: 10,
    County: 280,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 1210,
    OPAnnualDeductibleAmt: 290,
    InsurancePrice: 133.60
  },
  {
    id: 57,
    BeneID: 11060,
    Age: 70,
    Gender: 1,
    Race: 1,
    State: 42,
    County: 340,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 1290,
    OPAnnualDeductibleAmt: 1580,
    InsurancePrice: 182.32
  },
  {
    id: 58,
    BeneID: 11061,
    Age: 69,
    Gender: 1,
    Race: 1,
    State: 45,
    County: 100,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 820,
    OPAnnualDeductibleAmt: 230,
    InsurancePrice: 181.48
  },
  {
    id: 59,
    BeneID: 11062,
    Age: 76,
    Gender: 2,
    Race: 1,
    State: 31,
    County: 290,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 110,
    OPAnnualDeductibleAmt: 140,
    InsurancePrice: 156.92
  },
  {
    id: 60,
    BeneID: 11063,
    Age: 57,
    Gender: 1,
    Race: 1,
    State: 39,
    County: 620,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 60,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 156.09
  },
  {
    id: 61,
    BeneID: 11064,
    Age: 56,
    Gender: 2,
    Race: 1,
    State: 33,
    County: 700,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 90,
    OPAnnualDeductibleAmt: 20,
    InsurancePrice: 114.10
  },
  {
    id: 62,
    BeneID: 11065,
    Age: 75,
    Gender: 1,
    Race: 1,
    State: 14,
    County: 141,
    IPAnnualReimbursementAmt: 5000,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 300,
    OPAnnualDeductibleAmt: 1170,
    InsurancePrice: 278.62
  },
  {
    id: 63,
    BeneID: 11066,
    Age: 64,
    Gender: 1,
    Race: 1,
    State: 23,
    County: 620,
    IPAnnualReimbursementAmt: 15000,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 560,
    OPAnnualDeductibleAmt: 660,
    InsurancePrice: 244.62
  },
  {
    id: 64,
    BeneID: 11067,
    Age: 36,
    Gender: 2,
    Race: 1,
    State: 5,
    County: 660,
    IPAnnualReimbursementAmt: 4000,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 2150,
    OPAnnualDeductibleAmt: 570,
    InsurancePrice: 169.42
  },
  {
    id: 65,
    BeneID: 11068,
    Age: 35,
    Gender: 2,
    Race: 1,
    State: 34,
    County: 350,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 20,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 123.52
  },
  {
    id: 66,
    BeneID: 11069,
    Age: 80,
    Gender: 2,
    Race: 1,
    State: 26,
    County: 470,
    IPAnnualReimbursementAmt: 17000,
    IPAnnualDeductibleAmt: 2136,
    OPAnnualReimbursementAmt: 1570,
    OPAnnualDeductibleAmt: 170,
    InsurancePrice: 260.20
  },
  {
    id: 67,
    BeneID: 11070,
    Age: 52,
    Gender: 1,
    Race: 1,
    State: 36,
    County: 770,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 900,
    OPAnnualDeductibleAmt: 210,
    InsurancePrice: 133.19
  },
  {
    id: 68,
    BeneID: 11071,
    Age: 46,
    Gender: 1,
    Race: 2,
    State: 33,
    County: 510,
    IPAnnualReimbursementAmt: 5000,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 2230,
    OPAnnualDeductibleAmt: 1720,
    InsurancePrice: 180.15
  },
  {
    id: 69,
    BeneID: 11072,
    Age: 64,
    Gender: 2,
    Race: 3,
    State: 5,
    County: 90,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 4460,
    OPAnnualDeductibleAmt: 260,
    InsurancePrice: 166.72
  },
  {
    id: 70,
    BeneID: 11073,
    Age: 69,
    Gender: 1,
    Race: 2,
    State: 11,
    County: 90,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 10,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 165.02
  },
  {
    id: 71,
    BeneID: 11074,
    Age: 67,
    Gender: 1,
    Race: 5,
    State: 5,
    County: 200,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 1470,
    OPAnnualDeductibleAmt: 1250,
    InsurancePrice: 258.75
  },
  {
    id: 72,
    BeneID: 11075,
    Age: 75,
    Gender: 2,
    Race: 1,
    State: 10,
    County: 120,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 1180,
    OPAnnualDeductibleAmt: 870,
    InsurancePrice: 173.02
  },
  {
    id: 73,
    BeneID: 11076,
    Age: 58,
    Gender: 2,
    Race: 1,
    State: 5,
    County: 200,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 50,
    OPAnnualDeductibleAmt: 20,
    InsurancePrice: 114.06
  },
  {
    id: 74,
    BeneID: 11077,
    Age: 62,
    Gender: 2,
    Race: 5,
    State: 10,
    County: 120,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 3750,
    OPAnnualDeductibleAmt: 600,
    InsurancePrice: 165.59
  },
  {
    id: 75,
    BeneID: 11078,
    Age: 71,
    Gender: 2,
    Race: 1,
    State: 44,
    County: 180,
    IPAnnualReimbursementAmt: 19210,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 260,
    OPAnnualDeductibleAmt: 40,
    InsurancePrice: 250.26
  },
  {
    id: 76,
    BeneID: 11079,
    Age: 58,
    Gender: 1,
    Race: 1,
    State: 36,
    County: 460,
    IPAnnualReimbursementAmt: 5000,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 840,
    OPAnnualDeductibleAmt: 40,
    InsurancePrice: 208.04
  },
  {
    id: 77,
    BeneID: 11080,
    Age: 37,
    Gender: 2,
    Race: 1,
    State: 5,
    County: 580,
    IPAnnualReimbursementAmt: 5000,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 160,
    OPAnnualDeductibleAmt: 10,
    InsurancePrice: 115.39
  },
  {
    id: 78,
    BeneID: 11081,
    Age: 67,
    Gender: 1,
    Race: 1,
    State: 52,
    County: 430,
    IPAnnualReimbursementAmt: 13600,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 0,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 250.49
  },
  {
    id: 79,
    BeneID: 11082,
    Age: 60,
    Gender: 2,
    Race: 1,
    State: 15,
    County: 880,
    IPAnnualReimbursementAmt: 11000,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 0,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 186.01
  },
  {
    id: 80,
    BeneID: 11083,
    Age: 68,
    Gender: 2,
    Race: 1,
    State: 6,
    County: 150,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 400,
    OPAnnualDeductibleAmt: 10,
    InsurancePrice: 143.07
  },
  {
    id: 81,
    BeneID: 11084,
    Age: 72,
    Gender: 1,
    Race: 1,
    State: 33,
    County: 400,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 1090,
    OPAnnualDeductibleAmt: 1340,
    InsurancePrice: 212.29
  },
  {
    id: 82,
    BeneID: 11085,
    Age: 37,
    Gender: 2,
    Race: 1,
    State: 11,
    County: 470,
    IPAnnualReimbursementAmt: 19000,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 1670,
    OPAnnualDeductibleAmt: 520,
    InsurancePrice: 217.81
  },
  {
    id: 83,
    BeneID: 11086,
    Age: 61,
    Gender: 1,
    Race: 1,
    State: 5,
    County: 400,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 50,
    OPAnnualDeductibleAmt: 60,
    InsurancePrice: 120.06
  },
  {
    id: 84,
    BeneID: 11087,
    Age: 73,
    Gender: 2,
    Race: 1,
    State: 36,
    County: 130,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 850,
    OPAnnualDeductibleAmt: 100,
    InsurancePrice: 186.82
  },
  {
    id: 85,
    BeneID: 11088,
    Age: 63,
    Gender: 2,
    Race: 1,
    State: 10,
    County: 280,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 1730,
    OPAnnualDeductibleAmt: 280,
    InsurancePrice: 197.15
  },
  {
    id: 86,
    BeneID: 11089,
    Age: 74,
    Gender: 2,
    Race: 3,
    State: 12,
    County: 20,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 480,
    OPAnnualDeductibleAmt: 620,
    InsurancePrice: 243.41
  },
  {
    id: 87,
    BeneID: 11090,
    Age: 64,
    Gender: 2,
    Race: 1,
    State: 36,
    County: 690,
    IPAnnualReimbursementAmt: 1000,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 300,
    OPAnnualDeductibleAmt: 40,
    InsurancePrice: 161.67
  },
  {
    id: 88,
    BeneID: 11092,
    Age: 57,
    Gender: 1,
    Race: 1,
    State: 30,
    County: 50,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 0,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 120
  },
  {
    id: 89,
    BeneID: 11093,
    Age: 78,
    Gender: 2,
    Race: 1,
    State: 6,
    County: 500,
    IPAnnualReimbursementAmt: 20180,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 33210,
    OPAnnualDeductibleAmt: 5858,
    InsurancePrice: 490.50
  },
  {
    id: 90,
    BeneID: 11094,
    Age: 89,
    Gender: 2,
    Race: 1,
    State: 27,
    County: 310,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 9280,
    OPAnnualDeductibleAmt: 1670,
    InsurancePrice: 171.30
  },
  {
    id: 91,
    BeneID: 11095,
    Age: 75,
    Gender: 2,
    Race: 1,
    State: 10,
    County: 570,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 430,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 186.05
  },
  {
    id: 92,
    BeneID: 11096,
    Age: 72,
    Gender: 2,
    Race: 1,
    State: 7,
    County: 10,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 380,
    OPAnnualDeductibleAmt: 40,
    InsurancePrice: 143.04
  },
  {
    id: 93,
    BeneID: 11097,
    Age: 59,
    Gender: 1,
    Race: 1,
    State: 10,
    County: 500,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 30,
    OPAnnualDeductibleAmt: 300,
    InsurancePrice: 180.05
  },
  {
    id: 94,
    BeneID: 11098,
    Age: 75,
    Gender: 1,
    Race: 1,
    State: 5,
    County: 470,
    IPAnnualReimbursementAmt: 16000,
    IPAnnualDeductibleAmt: 2136,
    OPAnnualReimbursementAmt: 30,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 344.61
  },
  {
    id: 95,
    BeneID: 11099,
    Age: 69,
    Gender: 2,
    Race: 1,
    State: 18,
    County: 550,
    IPAnnualReimbursementAmt: 3150,
    IPAnnualDeductibleAmt: 1068,
    OPAnnualReimbursementAmt: 1190,
    OPAnnualDeductibleAmt: 430,
    InsurancePrice: 178.42
  },
  {
    id: 96,
    BeneID: 11101,
    Age: 66,
    Gender: 1,
    Race: 3,
    State: 3,
    County: 60,
    IPAnnualReimbursementAmt: 8400,
    IPAnnualDeductibleAmt: 2136,
    OPAnnualReimbursementAmt: 3220,
    OPAnnualDeductibleAmt: 730,
    InsurancePrice: 313.09
  },
  {
    id: 97,
    BeneID: 11102,
    Age: 71,
    Gender: 1,
    Race: 1,
    State: 3,
    County: 10,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 1850,
    OPAnnualDeductibleAmt: 530,
    InsurancePrice: 229.16
  },
  {
    id: 98,
    BeneID: 11103,
    Age: 57,
    Gender: 1,
    Race: 1,
    State: 45,
    County: 390,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 40,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 144.06
  },
  {
    id: 99,
    BeneID: 11104,
    Age: 69,
    Gender: 2,
    Race: 1,
    State: 10,
    County: 280,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 200,
    OPAnnualDeductibleAmt: 0,
    InsurancePrice: 171.34
  },
  {
    id: 100,
    BeneID: 11105,
    Age: 38,
    Gender: 1,
    Race: 1,
    State: 19,
    County: 360,
    IPAnnualReimbursementAmt: 0,
    IPAnnualDeductibleAmt: 0,
    OPAnnualReimbursementAmt: 560,
    OPAnnualDeductibleAmt: 1340,
    InsurancePrice: 140.78
  },
];