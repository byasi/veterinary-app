import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { ArrowRight as ArrowRightIcon } from '../../../icons/arrow-right';
import { ChevronDown as ChevronDownIcon } from '../../../icons/chevron-down';
import { ChevronUp as ChevronUpIcon } from '../../../icons/chevron-up';
import { Chart } from '../../chart';

export const QuickStats6 = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: ['#27c6db'],
    fill: {
      opacity: 1
    },
    labels: [''],
    plotOptions: {
      radialBar: {
        dataLabels: {
          value: {
            show: false
          }
        },
        hollow: {
          size: '60%'
        },
        track: {
          background: theme.palette.background.default
        }
      }
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries = [83];

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        p: 3
      }}
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Card>
            <CardContent
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <Chart
                height={160}
                options={chartOptions}
                series={chartSeries}
                type="radialBar"
                width={160}
              />
              <Box
                sx={{
                  display: 'flex',
                  flex: 1
                }}
              >
                <div>
                  <Typography
                    color="primary"
                    variant="h4"
                  >
                    0.299 BTC
                  </Typography>
                  <Typography
                    color="textPrimary"
                    sx={{ mt: 1 }}
                    variant="subtitle2"
                  >
                    Weekly earnings
                  </Typography>
                </div>
                <Box sx={{ flexGrow: 1 }} />
                <Avatar
                  sx={{
                    backgroundColor: alpha(theme.palette.success.main, 0.08),
                    color: 'success.main'
                  }}
                  variant="rounded"
                >
                  <ChevronUpIcon fontSize="small" />
                </Avatar>
              </Box>
            </CardContent>
            <Divider />
            <CardActions>
              <Button endIcon={<ArrowRightIcon fontSize="small" />}>
                See all activity
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Card>
            <CardContent
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <Chart
                height={160}
                options={chartOptions}
                series={chartSeries}
                type="radialBar"
                width={160}
              />
              <Box
                sx={{
                  display: 'flex',
                  flex: 1
                }}
              >
                <div>
                  <Typography variant="h4">
                    $2,150,000.00
                  </Typography>
                  <Typography
                    sx={{ mt: 1 }}
                    variant="subtitle2"
                  >
                    Your private wallet
                  </Typography>
                </div>
                <Box sx={{ flexGrow: 1 }} />
                <Avatar
                  sx={{
                    backgroundColor: alpha(theme.palette.error.main, 0.08),
                    color: 'error.main'
                  }}
                  variant="rounded"
                >
                  <ChevronDownIcon fontSize="small" />
                </Avatar>
              </Box>
            </CardContent>
            <Divider />
            <CardActions>
              <Button endIcon={<ArrowRightIcon fontSize="small" />}>
                Withdraw money
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
