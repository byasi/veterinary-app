import { useCallback, useEffect, useState } from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import { format } from 'date-fns';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { orderApi } from '../../../__fake-api__/order-api';
import { AuthGuard } from '../../../components/authentication/auth-guard';
import { DashboardLayout } from '../../../components/dashboard/dashboard-layout';
import { OrderItems } from '../../../components/dashboard/order/order-items';
import { OrderLogs } from '../../../components/dashboard/order/order-logs';
import { OrderSummary } from '../../../components/dashboard/order/order-summary';
import { useMounted } from '../../../hooks/use-mounted';
import { Calendar as CalendarIcon } from '../../../icons/calendar';
import { ChevronDown as ChevronDownIcon } from '../../../icons/chevron-down';
import { PencilAlt as PencilAltIcon } from '../../../icons/pencil-alt';
import { gtm } from '../../../lib/gtm';

const OrderDetails = () => {
  const isMounted = useMounted();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getOrder = useCallback(async () => {
    try {
      const data = await orderApi.getOrder();

      if (isMounted()) {
        setOrder(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
      getOrder();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  if (!order) {
    return null;
  }

  return (
    <>
      <Head>
        <title>
          Dashboard: Order Details | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ mb: 4 }}>
            <NextLink
              href="/dashboard/orders"
              passHref
            >
              <Link
                color="textPrimary"
                component="a"
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <ArrowBackIcon
                  fontSize="small"
                  sx={{ mr: 1 }}
                />
                <Typography variant="subtitle2">
                  Orders
                </Typography>
              </Link>
            </NextLink>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Grid
              container
              justifyContent="space-between"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h4">
                  {order.number}
                </Typography>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1,
                    mt: 1
                  }}
                >
                  <Typography
                    color="textSecondary"
                    variant="body2"
                    sx={{ ml: 1 }}
                  >
                    Placed on
                  </Typography>
                  <CalendarIcon
                    color="action"
                    fontSize="small"
                    sx={{ ml: 1 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ ml: 1 }}
                  >
                    {format(order.createdAt, 'dd/MM/yyyy HH:mm')}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                sx={{ ml: -2 }}
              >
                <Button
                  endIcon={(
                    <PencilAltIcon fontSize="small" />
                  )}
                  variant="outlined"
                  sx={{ ml: 2 }}
                >
                  Edit
                </Button>
                <Button
                  endIcon={(
                    <ChevronDownIcon fontSize="small" />
                  )}
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  Action
                </Button>
              </Grid>
            </Grid>
          </Box>
          <OrderSummary order={order} />
          <Box sx={{ mt: 4 }}>
            <OrderItems orderItems={order.items} />
          </Box>
          <Box sx={{ mt: 4 }}>
            <OrderLogs order={order} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

OrderDetails.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default OrderDetails;

