import numeral from 'numeral';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../chart';

const data = {
  series: [
    {
      color: '#2F3EB1',
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
      color: '#9DA4DD',
      category: 'Facebook',
      data: 90590
    },
    {
      color: '#0C7CD5',
      category: 'Google Ads Search',
      data: 13219
    }
  ]
};

export const FinanceIncrementalSales = (props) => {
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
          show: true
        }
      },
      xaxis: {
        lines: {
          show: true
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
    <Card {...props}>
      <CardHeader title="Incremental Sales" />
      <Divider />
      <CardContent>
        <Chart
          height={350}
          options={chartOptions}
          series={chartSeries}
          type="bar"
        />
      </CardContent>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Label
            </TableCell>
            <TableCell align="right">
              Value
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.series.map((item) => (
            <TableRow key={item.data}>
              <TableCell>
                <Box
                  key={item.category}
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
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
                  <Typography variant="subtitle2">
                    {item.category}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  {numeral(item.data).format('$0,0.00')}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
