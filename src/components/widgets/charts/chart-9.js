import { Box, Card, CardContent, CardHeader } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../chart';

export const Chart9 = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: ['#ffb547', '#7783DB'],
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'solid',
      opacity: 0
    },
    grid: {
      borderColor: theme.palette.divider
    },
    markers: {
      strokeColors: theme.palette.background.paper,
      size: 6
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    }
  };

  const chartSeries = [
    {
      name: 'New Customers',
      data: [31, 40, 28, 51, 42, 109, 100, 120, 80, 42, 90, 140]
    },
    {
      name: 'Up/Cross-Selling',
      data: [11, 32, 45, 32, 34, 52, 41, 80, 96, 140, 30, 100]
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        p: 3
      }}
    >
      <Card>
        <CardHeader title="Sales Revenue" />
        <CardContent>
          <Chart
            height={360}
            options={chartOptions}
            series={chartSeries}
            type="area"
          />
        </CardContent>
      </Card>
    </Box>
  );
};
