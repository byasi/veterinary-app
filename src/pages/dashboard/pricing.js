import { useEffect } from 'react';
import Head from 'next/head';
import { Badge, Box, Container, Divider, Grid, Switch, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
import { PricingPlan } from '../../components/pricing/pricing-plan';
import { gtm } from '../../lib/gtm';

const Pricing = () => {
  const theme = useTheme();

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Pricing | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          backgroundColor: 'background.paper',
          flexGrow: 1,
          pb: 6
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.default',
            py: 6
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              alignItems="center"
              spacing={2}
              flexWrap="nowrap"
            >
              <Grid
                item
                md={7}
                xs={12}
              >
                <Typography variant="h3">
                  Start today. Boost up your services!
                </Typography>
                <Typography
                  color="textSecondary"
                  sx={{ my: 2 }}
                  variant="body1"
                >
                  Join 3,000+ developers &amp; designers using Devias to
                  power modern web projects.
                </Typography>
                <Switch />
                <Badge
                  badgeContent="25% OFF"
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      right: -38,
                      top: '25%'
                    }
                  }}
                >
                  <Typography variant="body1">
                    Yearly Payment
                  </Typography>
                </Badge>
              </Grid>
              <Grid
                item
                md={5}
                sx={{
                  display: {
                    md: 'block',
                    xs: 'none'
                  }
                }}
              >
                <Box
                  sx={{
                    height: 420,
                    maxWidth: 419,
                    position: 'relative',
                    '& img': {
                      height: 'auto',
                      position: 'absolute',
                      top: 0,
                      width: '100%'
                    }
                  }}
                >
                  <img
                    alt="Pricing hero"
                    src={`/static/pricing/pricing_${theme.palette.mode}.svg`}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Divider />
        <Container
          maxWidth="lg"
          sx={{ py: 6 }}
        >
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <PricingPlan
                cta="Start Free Trial"
                currency="$"
                description="To familiarize yourself with our tools."
                features={[
                  'Create contracts',
                  'Chat support',
                  'Email alerts'
                ]}
                image="/static/pricing/plan1.svg"
                name="Startup"
                price="0"
                sx={{
                  height: '100%',
                  maxWidth: 460,
                  mx: 'auto'
                }}
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <PricingPlan
                cta="Start Free Trial"
                currency="$"
                description="To familiarize yourself with our tools."
                features={[
                  'All previous',
                  'Highlights reporting',
                  'Data history',
                  'Unlimited users'
                ]}
                image="/static/pricing/plan2.svg"
                name="Standard"
                popular
                price="4.99"
                sx={{
                  height: '100%',
                  maxWidth: 460,
                  mx: 'auto'
                }}
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <PricingPlan
                cta="Contact Us"
                currency="$"
                description="To familiarize yourself with our tools."
                features={[
                  'All previous',
                  'Unlimited contacts',
                  'Analytics platform',
                  'Public API access',
                  'Send and sign unlimited contracts'
                ]}
                image="/static/pricing/plan3.svg"
                name="Business"
                price="29.99"
                sx={{
                  height: '100%',
                  maxWidth: 460,
                  mx: 'auto'
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Typography
          align="center"
          color="textSecondary"
          component="p"
          variant="caption"
        >
          30% of our income goes into Whale Charity
        </Typography>
      </Box>
    </>
  );
};

Pricing.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Pricing;
