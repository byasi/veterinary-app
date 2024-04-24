import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Button, Container, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
import { AnalyticsGeneralOverview } from '../../components/dashboard/analytics/analytics-general-overview';
import { AnalyticsMostVisited } from '../../components/dashboard/analytics/analytics-most-visited';
import { AnalyticsSocialSources } from '../../components/dashboard/analytics/analytics-social-sources';
import { AnalyticsVisitsByCountry } from '../../components/dashboard/analytics/analytics-visits-by-country';
import { AnalyticsTrafficSources } from '../../components/dashboard/analytics/analytics-traffic-sources';
import { Reports as ReportsIcon } from '../../icons/reports';
import { gtm } from '../../lib/gtm';

const Analytics = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Dashboard: Analytics | Material Kit Pro
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
                  Analytics
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex',
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
                <TextField
                  defaultValue="week"
                  label="Period"
                  select
                  size="small"
                  sx={{ m: 1 }}
                >
                  <MenuItem value="week">Last week</MenuItem>
                  <MenuItem value="month">Last month</MenuItem>
                  <MenuItem value="year">Last year</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Box>
          <AnalyticsGeneralOverview />
          <Box sx={{ mt: 4 }}>
            <Grid
              container
              spacing={4}
            >
              <Grid
                item
                md={8}
                xs={12}
              >
                <AnalyticsTrafficSources sx={{ height: '100%' }} />
              </Grid>
              <Grid
                item
                md={4}
                xs={12}
              >
                <AnalyticsVisitsByCountry />
              </Grid>
              <Grid
                item
                md={8}
                xs={12}
              >
                <AnalyticsMostVisited />
              </Grid>
              <Grid
                item
                md={4}
                xs={12}
              >
                <AnalyticsSocialSources />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Analytics.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Analytics;
