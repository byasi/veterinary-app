import { Box, Card, CardContent, CardHeader, Divider, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DotsHorizontal as DotsHorizontalIcon } from '../../../icons/dots-horizontal';
import { Chart } from '../../chart';
import { Scrollbar } from '../../scrollbar';

const data = {
  series: [{ data: [10, 5, 11, 20, 13, 28, 18, 4, 13, 12, 13, 5] }],
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
};

export const Chart4 = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: ['#00ab57'],
    dataLabels: {
      enabled: false
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: 'vertical'
      },
      type: 'gradient'
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2
    },
    markers: {
      size: 6,
      strokeColors: theme.palette.background.default,
      strokeWidth: 3
    },
    stroke: {
      curve: 'smooth'
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
      categories: data.categories,
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      labels: {
                formatter: (value) => (value > 0 ? `${value}K` : value),
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };

  const chartSeries = data.series;

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        p: 3
      }}
    >
      <Card>
        <CardHeader
          action={(
            <IconButton>
              <DotsHorizontalIcon fontSize="small" />
            </IconButton>
          )}
          title="Performance Over Time"
        />
        <Divider />
        <CardContent>
          <Scrollbar>
            <Box
              sx={{
                height: 375,
                minWidth: 500,
                position: 'relative'
              }}
            >
              <Chart
                width={350}
                options={chartOptions}
                series={chartSeries}
                type="area"
              />
            </Box>
          </Scrollbar>
        </CardContent>
      </Card>
    </Box>
  );
};
