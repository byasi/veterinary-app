import numeral from 'numeral';
import { Box, Card, CardContent, CardHeader, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../chart';

const data = {
  series: [
    {
      color: '#7783DB',
      category: 'Email',
      data: 37530
    },
    {
      color: '#7BC67E',
      category: 'GDN',
      data: 52717
    },
    {
      color: '#FFB547',
      category: 'Instagram',
      data: 62935
    },
    {
      color: '#F06191',
      category: 'Facebook',
      data: 90590
    },
    {
      color: '#64B6F7',
      category: 'Google Ads Search',
      data: 13219
    }
  ]
};

export const Chart11 = () => {
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
    grid: {
      borderColor: theme.palette.divider,
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    legend: {
      show: false
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '45',
        distributed: true
      }
    },
    theme: {
      mode: theme.palette.mode
    },
    tooltip: {
      y: {
        formatter: (value) => numeral(value).format('$0,0.00')
      }
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
      categories: data.series.map((item) => item.category)
    },
    yaxis: {
      labels: {
        show: false
      }
    }
  };

  const chartSeries = [
    {
      data: data.series.map((item) => item.data),
      name: 'Sales'
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        p: 3
      }}
    >
      <Container maxWidth="md">
        <Card>
          <CardHeader title="Incremental Sales" />
          <CardContent>
            {data.series.map((item) => (
              <Box
                key={item.category}
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
                  {item.category}
                </Typography>
              </Box>
            ))}
            <Chart
              width={350}
              options={chartOptions}
              series={chartSeries}
              type="bar"
            />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
