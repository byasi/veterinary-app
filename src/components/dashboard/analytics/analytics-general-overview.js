import { Avatar, Box, Button, Card, CardActions, Divider, Grid, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { ArrowRight as ArrowRightIcon } from '../../../icons/arrow-right';
import { ChevronDown as ChevronDownIcon } from '../../../icons/chevron-down';
import { ChevronUp as ChevronUpIcon } from '../../../icons/chevron-up';
import { Chart } from '../../chart';

const LineChart = () => {
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

  const chartSeries = [{ data: [0, 60, 30, 60, 0, 30, 10, 30, 0] }];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="line"
      width={120}
    />
  );
};

const BarChart = () => {
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
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0
        }
      }
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: {
      show: false
    }
  };

  const chartSeries = [{ data: [10, 20, 30, 40, 50, 60, 5] }];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="bar"
      width={120}
    />
  );
};

export const AnalyticsGeneralOverview = () => (
  <Grid
    container
    spacing={4}
  >
    <Grid
      item
      md={3}
      sm={6}
      xs={12}
    >
      <Card>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            px: 3,
            py: 2
          }}
        >
          <div>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Impressions
            </Typography>
            <Typography
              sx={{ mt: 1 }}
              variant="h5"
            >
              1.9M
            </Typography>
          </div>
          <LineChart />
        </Box>
        <Divider />
        <CardActions>
          <Button endIcon={<ArrowRightIcon fontSize="small" />}>
            See all visits
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid
      item
      md={3}
      sm={6}
      xs={12}
    >
      <Card>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            px: 3,
            py: 2
          }}
        >
          <div>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Spent
            </Typography>
            <Typography
              sx={{ mt: 1 }}
              variant="h5"
            >
              $41.2K
            </Typography>
          </div>
          <LineChart />
        </Box>
        <Divider />
        <CardActions
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <Avatar
            sx={{
              backgroundColor: (theme) => alpha(theme.palette.success.main, 0.08),
              color: 'success.main',
              height: 36,
              width: 36
            }}
          >
            <ChevronUpIcon fontSize="small" />
          </Avatar>
          <Typography
            color="textSecondary"
            sx={{ ml: 1 }}
            variant="caption"
          >
            12% more then last month
          </Typography>
        </CardActions>
      </Card>
    </Grid>
    <Grid
      item
      md={3}
      sm={6}
      xs={12}
    >
      <Card>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            px: 3,
            py: 2
          }}
        >
          <div>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Engagements
            </Typography>
            <Typography
              sx={{ mt: 1 }}
              variant="h5"
            >
              36,6K
            </Typography>
          </div>
          <LineChart />
        </Box>
        <Divider />
        <CardActions
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <Avatar
            sx={{
              backgroundColor: (theme) => alpha(theme.palette.error.main, 0.08),
              color: 'error.main',
              height: 36,
              width: 36
            }}
          >
            <ChevronDownIcon fontSize="small" />
          </Avatar>
          <Typography
            color="textSecondary"
            sx={{ ml: 1 }}
            variant="caption"
          >
            30% less then last month
          </Typography>
        </CardActions>
      </Card>
    </Grid>
    <Grid
      item
      md={3}
      sm={6}
      xs={12}
    >
      <Card>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            px: 3,
            py: 2
          }}
        >
          <div>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Conversions
            </Typography>
            <Typography
              sx={{ mt: 1 }}
              variant="h5"
            >
              131,3K
            </Typography>
          </div>
          <BarChart />
        </Box>
        <Divider />
        <CardActions
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <Avatar
            sx={{
              backgroundColor: (theme) => alpha(theme.palette.success.main, 0.08),
              color: 'success.main',
              height: 36,
              width: 36
            }}
          >
            <ChevronUpIcon fontSize="small" />
          </Avatar>
          <Typography
            color="textSecondary"
            sx={{ ml: 1 }}
            variant="caption"
          >
            12% more then last month
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
);
