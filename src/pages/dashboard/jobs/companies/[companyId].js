import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Link,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { jobApi } from '../../../../__fake-api__/job-api';
import { AuthGuard } from '../../../../components/authentication/auth-guard';
import { DashboardLayout } from '../../../../components/dashboard/dashboard-layout';
import { CompanyOverview } from '../../../../components/dashboard/jobs/company-overview';
import { CompanyReviews } from '../../../../components/dashboard/jobs/company-reviews';
import { CompanySummary } from '../../../../components/dashboard/jobs/company-summary';
import { CompanyActivity } from '../../../../components/dashboard/jobs/company-activity';
import { CompanyTeam } from '../../../../components/dashboard/jobs/company-team';
import { CompanyAssets } from '../../../../components/dashboard/jobs/company-assets';
import { useMounted } from '../../../../hooks/use-mounted';
import { gtm } from '../../../../lib/gtm';
import { getInitials } from '../../../../utils/get-initials';

const tabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Reviews', value: 'reviews' },
  { label: 'Activity', value: 'activity' },
  { label: 'Team', value: 'team' },
  { label: 'Assets', value: 'assets' }
];

const CompanyDetails = () => {
  const isMounted = useMounted();
  const [company, setCompany] = useState(null);
  const [currentTab, setCurrentTab] = useState('overview');

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getCompany = useCallback(async () => {
    try {
      const data = await jobApi.getCompany();

      if (isMounted()) {
                setCompany(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
      getCompany();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  if (!company) {
    return null;
  }

  return (
    <>
      <Head>
        <title>
          Dashboard: Company Details | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <NextLink
              href="/dashboard/jobs"
              passHref
            >
              <Link
                color="textPrimary"
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
                  Jobs
                </Typography>
              </Link>
            </NextLink>
          </Box>
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              xs={12}
              lg={8}
            >
              <Card>
                <CardHeader
                  disableTypography
                  title={(
                    <Box sx={{ display: 'flex' }}>
                      <Avatar
                        src={company.logo}
                        sx={{
                          background: 'transparent',
                          mr: 2
                        }}
                        variant="rounded"
                      >
                        {getInitials(company.name)}
                      </Avatar>
                      <div>
                        <Typography variant="h6">
                          {company.name}
                        </Typography>
                        <Typography
                          sx={{ mt: 1 }}
                          variant="body2"
                        >
                          {company.shortDescription}
                        </Typography>
                      </div>
                    </Box>
                  )}
                />
                <Divider />
                <Tabs
                  indicatorColor="primary"
                  onChange={handleTabsChange}
                  scrollButtons="auto"
                  sx={{ px: 3 }}
                  textColor="primary"
                  value={currentTab}
                  variant="scrollable"
                >
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.value}
                      label={tab.label}
                      value={tab.value}
                    />
                  ))}
                </Tabs>
                <Divider />
                <CardContent>
                  {currentTab === 'overview' && <CompanyOverview company={company} />}
                  {currentTab === 'reviews' && (
                    <CompanyReviews
                      reviews={company.reviews}
                      averageRating={company.averageRating}
                    />
                  )}
                  {currentTab === 'activity' && (
                    <CompanyActivity activities={company.activities} />
                  )}
                  {currentTab === 'team' && <CompanyTeam members={company.members} />}
                  {currentTab === 'assets' && <CompanyAssets assets={company.assets} />}
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              lg={4}
            >
              <CompanySummary company={company} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

CompanyDetails.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default CompanyDetails;
