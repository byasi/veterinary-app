import { Box, Card, CardHeader, IconButton } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { DotsHorizontal as DotsHorizontalIcon } from '../../../icons/dots-horizontal';
import { Chart } from '../../chart';
import { Scrollbar } from '../../scrollbar';

const data = {
  series: [
    { data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
    { data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] }
  ],
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

export const Chart6 = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: ['#00ab57', alpha('#00ab57', 0.25)],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2
    },
    states: {
      active: {
        filter: {
          type: 'none'
        }
      },
      hover: {
        filter: {
          type: 'none'
        }
      }
    },
    legend: {
      show: false
    },
    plotOptions: {
      bar: {
        columnWidth: '20px'
      }
    },
    stroke: {
      colors: ['transparent'],
      show: true,
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
          title="Financial Stats"
        />
        <Scrollbar>
          <Box
            sx={{
              minWidth: 700,
              px: 2
            }}
          >
            <Chart
              height={375}
              options={chartOptions}
              series={chartSeries}
              type="bar"
            />
          </Box>
        </Scrollbar>
      </Card>
    </Box>
  );
};
