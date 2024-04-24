import { Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../chart';

const items = [
  {
    color: '#4CAF50',
    label: 'Very good',
    subtitle: 'Excellent',
    value: 85
  },
  {
    color: '#FF9800',
    label: 'Good',
    subtitle: 'Good condition',
    value: 10
  },
  {
    color: '#F44336',
    label: 'Needs attention ',
    subtitle: 'Needs attention',
    value: 5
  }
];

export const LogisticsVehiclesCondition = (props) => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    fill: {
      opacity: 1
    },
    labels: ['Health'],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            show: true,
            color: theme.palette.text.secondary,
            fontSize: '12px',
            fontWeight: 400,
            offsetY: 20
          },
          value: {
            color: theme.palette.text.primary,
            fontSize: '18px',
            fontWeight: 600,
            offsetY: -20
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
    states: {
      active: {
        filter: {
          type: 'none',
          value: 0
        }
      },
      hover: {
        filter: {
          type: 'none',
          value: 0
        }
      }
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  return (
    <Card {...props}>
      <CardHeader title="Vehicles Condition" />
      <Divider />
      <Grid
        container
        spacing={3}
        sx={{ p: 3 }}
      >
        {items.map((item) => (
          <Grid
            item
            key={item.label}
            md={4}
            xs={12}
          >
            <Card
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                p: 2
              }}
              variant="outlined"
            >
              <Typography
                sx={{ color: item.color }}
                variant="h6"
              >
                {item.label}
              </Typography>
              <Chart
                height={200}
                options={{
                  ...chartOptions,
                  colors: [item.color]
                }}
                series={[item.value]}
                type="radialBar"
              />
              <Typography variant="h6">
                {item.value}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {item.subtitle}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};
