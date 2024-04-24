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
    },
    {
      color: '#9DA4DD',
      data: 25486,
      label: 'Other'
    }
  ]
};

export const FinanceCostBreakdown = (props) => {
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
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries = data.series.map((item) => item.data);

  return (
    <Card {...props}>
      <CardHeader title="Cost Breakdown" />
      <Divider />
      <CardContent>
        <Chart
          height={240}
          options={chartOptions}
          series={chartSeries}
          type="pie"
        />
      </CardContent>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Top Channels
            </TableCell>
            <TableCell align="right">
              Value
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.series.map((item) => (
            <TableRow key={item.label}>
              <TableCell>
                <Box
                  key={item.label}
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
                    {item.label}
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
