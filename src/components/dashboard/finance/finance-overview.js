import numeral from 'numeral';
import { Box, Grid, Typography, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../chart';

const ChartLine = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    colors: ['#2F3EB1'],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    grid: {
      show: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    theme: {
      mode: theme.palette.mode
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    }
  };

  const chartSeries = [{ data: [256, 282, 221, 245, 235, 274, 234, 256] }];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="area"
    />
  );
};

const data = {
  sales: {
    actualYear: 152996,
    lastYear: 121420
  },
  profit: {
    actualYear: 32100,
    lastYear: 25200
  },
  cost: {
    actualYear: 99700,
    lastYear: 68300
  }
};

export const FinanceOverview = (props) => (
  <Card {...props}>
    <Grid container>
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          alignItems: 'center',
          borderRight: (theme) => ({
            md: `1px solid ${theme.palette.divider}`
          }),
          borderBottom: (theme) => ({
            md: 'none',
            xs: `1px solid ${theme.palette.divider}`
          }),
          display: 'flex',
          justifyContent: 'space-between',
          p: 3
        }}
      >
        <div>
          <Typography
            color="textSecondary"
            variant="overline"
          >
            Sales
          </Typography>
          <Typography variant="h5">
            {numeral(data.sales.actualYear).format('$0,0.00')}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            vs.
            {numeral(data.sales.lastYear).format('$0,0.00')}
            &nbsp;
            last year
          </Typography>
        </div>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            height: 54,
            width: 177
          }}
        >
          <ChartLine />
        </Box>
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          alignItems: 'center',
          borderRight: (theme) => ({
            md: `1px solid ${theme.palette.divider}`
          }),
          borderBottom: (theme) => ({
            xs: `1px solid ${theme.palette.divider}`,
            md: 'none'
          }),
          display: 'flex',
          justifyContent: 'space-between',
          p: 3
        }}
      >
        <div>
          <Typography
            color="textSecondary"
            variant="overline"
          >
            Cost
          </Typography>
          <Typography variant="h5">
            {numeral(data.cost.actualYear).format('$0,0.00')}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            vs.
            {numeral(data.cost.lastYear).format('$0,0.00')}
            &nbsp;
            last year
          </Typography>
        </div>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            height: 54,
            width: 177
          }}
        >
          <ChartLine />
        </Box>
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          p: 3
        }}
      >
        <div>
          <Typography
            color="textSecondary"
            variant="overline"
          >
            Profit
          </Typography>
          <Typography variant="h5">
            {numeral(data.profit.actualYear).format('$0,0.00')}

          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            vs.
            {numeral(data.profit.lastYear).format('$0,0.00')}
            &nbsp;
            last year
          </Typography>
        </div>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            height: 54,
            width: 177
          }}
        >
          <ChartLine />
        </Box>
      </Grid>
    </Grid>
  </Card>
);
