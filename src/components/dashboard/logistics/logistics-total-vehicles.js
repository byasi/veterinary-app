import { Box, Card, CardHeader, Divider, Grid, List, ListItem, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../chart';

const data = {
  series: [
    {
      color: '#688eff',
      data: 38,
      label: 'On route'
    },
    {
      color: '#4CAF50',
      data: 50,
      label: 'Available'
    },
    {
      color: '#FF9800',
      data: 12,
      label: 'Out of service'
    }
  ]
};

export const LogisticsTotalVehicles = (props) => {
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
    fill: {
      opacity: 1
    },
    labels: ['On route', 'Available', 'Out of service'],
    plotOptions: {
      radialBar: {
        track: {
          background: theme.palette.background.default
        }
      }
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries = data.series.map((item) => item.data);

  return (
    <Card
      sx={{ height: '100%' }}
      {...props}>
      <CardHeader title="Total Vehicles" />
      <Divider />
      <Grid
        container
        spacing={3}
        sx={{ p: 3 }}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Chart
            height={300}
            options={chartOptions}
            series={chartSeries}
            type="radialBar"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Total
          </Typography>
          <Typography variant="h5">
            100
          </Typography>
          <Divider sx={{ mt: 1 }} />
          <List disablePadding>
            {data.series.map((item, index) => (
              <ListItem
                disableGutters
                divider={index + 1 < data.series.length}
                key={item.label}
                sx={{ display: 'flex' }}
              >
                <Box
                  sx={{
                    border: 3,
                    borderColor: item.color,
                    borderRadius: '50%',
                    height: 16,
                    mr: 1,
                    width: 16
                  }}
                />
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  {item.label}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography variant="subtitle2">
                  {item.data}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Card>
  );
};
