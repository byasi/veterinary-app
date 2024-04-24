import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
import { FinanceCostBreakdown } from '../../components/dashboard/finance/finance-cost-breakdown';
import { FinanceOverview } from '../../components/dashboard/finance/finance-overview';
import { FinanceIncrementalSales } from '../../components/dashboard/finance/finance-incremental-sales';
import { FinanceProfitableProducts } from '../../components/dashboard/finance/finance-profitable-products';
import { FinanceSalesByContinent } from '../../components/dashboard/finance/finance-sales-by-continent';
import { FinanceSalesRevenue } from '../../components/dashboard/finance/finance-sales-revenue';
import { Download as DownloadIcon } from '../../icons/download';
import { Reports as ReportsIcon } from '../../icons/reports';
import { Cog as CogIcon } from '../../icons/cog';
import { gtm } from '../../lib/gtm';

const Finance = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Dashboard: Finance | Material Kit Pro
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
                  Finance
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
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
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              xs={12}
            >
              <FinanceOverview />
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <FinanceSalesRevenue />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <FinanceCostBreakdown />
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <FinanceSalesByContinent />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <FinanceIncrementalSales />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <FinanceProfitableProducts />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Finance.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Finance;
