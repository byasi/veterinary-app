import numeral from 'numeral';
import { Box, Card, CardContent, CardHeader, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../chart';

const data = {
  series: [
    {
      color: '#FFB547',
      data: 14859,
      label: 'Strategy'
    },
    {
      color: '#7BC67E',
      data: 35690,
      label: 'Outsourcing'
    },
    {
      color: '#7783DB',
      data: 45120,
      label: 'Marketing'
    }
  ]
};

export const Chart10 = () => {
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
    labels: data.series.map((item) => item.label),
    legend: {
      show: false
    },
    stroke: {
      colors: [theme.palette.background.paper],
      width: 1
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
      <Container maxWidth="md">
        <Card>
          <CardHeader title="Cost Breakdown" />
          <CardContent>
            <Chart
              height={260}
              options={chartOptions}
              series={chartSeries}
              type="pie"
            />
            {data.series.map((item) => (
              <Box
                key={item.label}
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  p: 1
                }}
              >
                <Box
                  sx={{
                    backgroundColor: item.color,
                    borderRadius: '50%',
                    height: 8,
                    width: 8
                  }}
                />
                <Typography
                  sx={{ ml: 2 }}
                  variant="subtitle2"
                >
                  {item.label}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                >
                  {numeral(item.data).format('$0,0.00')}
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
