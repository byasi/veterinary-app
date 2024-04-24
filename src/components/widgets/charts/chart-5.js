import { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMounted } from '../../../hooks/use-mounted';
import { ArrowRight as ArrowRightIcon } from '../../../icons/arrow-right';
import { Chart } from '../../chart';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const Chart5 = () => {
  const isMounted = useMounted();
  const theme = useTheme();
  const [data, setData] = useState([
    163,
    166,
    161,
    159,
    99,
    163,
    173,
    166,
    167,
    183,
    176,
    172
  ]);

  const getData = useCallback(() => {
    if (isMounted()) {
      setData((prevData) => {
        const newData = [...prevData];

        newData.shift();
        newData.push(0);

        return newData;
      });
    }

    setTimeout(() => {
      if (isMounted()) {
        setData((prevData) => {
          const newData = [...prevData];
          const random = getRandomInt(100, 200);

          newData.pop();
          newData.push(random);

          return newData;
        });
      }
    }, 500);
  }, [isMounted]);

  useEffect(() => {
    setInterval(() => getData(), 2000);
  }, [getData]);

  const labels = data.map((value, i) => i);

  const pages = [
    {
      pathname: '/projects',
      views: '24'
    },
    {
      pathname: '/chat',
      views: '21'
    },
    {
      pathname: '/cart',
      views: '15'
    },
    {
      pathname: '/checkout',
      views: '8'
    }
  ];

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: ['#688dff'],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    grid: {
      show: false
    },
    legend: {
      show: false
    },
    plotOptions: {
      bar: {
        columnWidth: '40'
      }
    },
    states: {
      active: {
        filter: {
          type: 'none'
        }
      },
      hover: {
        filter: {
          type: 'none'
        }
      }
    },
    stroke: {
      colors: ['transparent'],
      show: true,
      width: 2
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      categories: labels,
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    }
  };

  const chartSeries = [{ data }];

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        p: 3
      }}
    >
      <Container maxWidth="sm">
        <Card>
          <CardHeader
            disableTypography
            title={(
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <Typography variant="h6">
                    Active users
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Page views per second
                  </Typography>
                </div>
                <Typography variant="h6">
                  {data[data.length - 1] === 0
                    ? data[data.length - 2]
                    : data[data.length - 1]}
                </Typography>
              </Box>
            )}
          />
          <Chart
            height={200}
            options={chartOptions}
            series={chartSeries}
            type="bar"
          />
          <List>
            {pages.map((page) => (
              <ListItem
                divider
                key={page.pathname}
              >
                <ListItemText
                  primary={page.pathname}
                  primaryTypographyProps={{
                    color: 'textSecondary',
                    variant: 'body2'
                  }}
                />
                <Typography variant="subtitle2">
                  {page.views}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2
            }}
          >
            <Button
              endIcon={<ArrowRightIcon fontSize="small" />}
              size="small"
            >
              See All
            </Button>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};
