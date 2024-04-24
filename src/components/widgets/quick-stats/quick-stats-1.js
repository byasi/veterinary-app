import { Box, Card, CardHeader, Divider, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DotsHorizontal as DotsHorizontalIcon } from '../../../icons/dots-horizontal';
import { Chart } from '../../chart';

const data = {
  series: [
    {
      color: '#169BE0',
      data: 56,
      name: 'Subscriptions'
    },
    {
      color: '#DB9846',
      data: 24,
      name: 'Affiliate'
    },
    {
      color: '#FF5C7C',
      data: 20,
      name: 'Sales'
    }
  ]
};

export const QuickStats1 = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: data.series.map((item) => item.color),
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    labels: data.series.map((item) => item.name),
    legend: {
      show: false
    },
    stroke: {
      show: false
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries = data.series.map((item) => item.data);

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
          title="Earnings Source"
        />
        <Divider />
        <Box sx={{ p: 2 }}>
          <Chart
            height={300}
            options={chartOptions}
            series={chartSeries}
            type="donut"
          />
        </Box>
        <Divider />
        <Box sx={{ display: 'flex' }}>
          {data.series.map((item) => (
            <Box
              key={item.name}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'center',
                px: 2,
                py: 3,
                textAlign: 'center',
                '&:not(:last-of-type)': {
                  borderRight: 1,
                  borderColor: 'divider'
                }
              }}
            >
              <Typography variant="h4">
                {item.data}
                %
              </Typography>
              <Typography
                color="textSecondary"
                variant="overline"
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  );
};
