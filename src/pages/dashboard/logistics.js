import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
import { LogisticsOverview } from '../../components/dashboard/logistics/logistics-overview';
import { LogisticsTotalVehicles } from '../../components/dashboard/logistics/logistics-total-vehicles';
import { LogisticsVehiclesCondition } from '../../components/dashboard/logistics/logistics-vehicles-condition';
import { LogisticsOnRouteVehicles } from '../../components/dashboard/logistics/logistics-on-route-vehicles';
import { Cog as CogIcon } from '../../icons/cog';
import { Download as DownloadIcon } from '../../icons/download';
import { Reports as ReportsIcon } from '../../icons/reports';
import { gtm } from '../../lib/gtm';

const Logistics = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Dashboard: Logistics | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid
              container
              justifyContent="space-between"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h4">
                  Logistics
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  flexWrap: 'wrap',
                  m: -1
                }}
              >
                <Button
                  startIcon={<ReportsIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="outlined"
                >
                  Reports
                </Button>
                <Button
                  startIcon={<CogIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="outlined"
                >
                  Settings
                </Button>
                <Button
                  startIcon={<DownloadIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="contained"
                >
                  Export
                </Button>
              </Grid>
            </Grid>
          </Box>
          <LogisticsOverview />
          <Box sx={{ mt: 4 }}>
            <Grid
              container
              spacing={4}
            >
              <Grid
                item
                xl={6}
                xs={12}
              >
                <LogisticsTotalVehicles />
              </Grid>
              <Grid
                item
                xl={6}
                xs={12}
              >
                <LogisticsVehiclesCondition />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <LogisticsOnRouteVehicles />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Logistics.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Logistics;
