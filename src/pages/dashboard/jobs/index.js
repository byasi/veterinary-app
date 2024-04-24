import { useCallback, useState, useEffect } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Link,
  Typography
} from '@mui/material';
import { jobApi } from '../../../__fake-api__/job-api';
import { AuthGuard } from '../../../components/authentication/auth-guard';
import { DashboardLayout } from '../../../components/dashboard/dashboard-layout';
import { JobsBrowseFilter } from '../../../components/dashboard/jobs/jobs-browse-filter';
import { CompanyJobs } from '../../../components/dashboard/jobs/company-jobs';
import { useMounted } from '../../../hooks/use-mounted';
import { BadgeCheckOutlined as BadgeCheckOutlinedIcon } from '../../../icons/badge-check-outlined';
import { ChevronLeft as ChevronLeftIcon } from '../../../icons/chevron-left';
import { ChevronRight as ChevronRightIcon } from '../../../icons/chevron-right';
import { Star as StarIcon } from '../../../icons/star';
import { Users as UsersIcon } from '../../../icons/users';
import { gtm } from '../../../lib/gtm';
import { getInitials } from '../../../utils/get-initials';

const JobBrowse = () => {
  const isMounted = useMounted();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getCompanies = useCallback(async () => {
    try {
      const data = await jobApi.getCompanies();

      if (isMounted()) {
        setCompanies(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
      getCompanies();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  return (
    <>
      <Head>
        <title>
          Dashboard: Job Browse | Material Kit Pro
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
          <Grid
            alignItems="center"
            container
            sx={{
              backgroundColor: 'neutral.900',
              borderRadius: 1,
              color: '#FFFFFF',
              px: 4,
              py: 8
            }}
          >
            <Grid
              item
              xs={12}
              sm={7}
            >
              <Typography
                color="inherit"
                variant="h3"
              >
                Reach 50K+ potential candidates.
              </Typography>
              <Typography
                color="neutral.500"
                sx={{ mt: 2 }}
                variant="body1"
              >
                Post your job today for free. Promotions start at $99.
              </Typography>
              <Button
                color="secondary"
                size="large"
                sx={{ mt: 3 }}
                variant="contained"
              >
                Post a job
              </Button>
            </Grid>
            <Grid
              item
              sm={5}
              sx={{
                display: {
                  xs: 'none',
                  sm: 'block'
                }
              }}
            >
              <img
                alt=""
                src="/static/mock-images/jobs/job_browse_header.svg"
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 4 }}>
            <JobsBrowseFilter />
          </Box>
          <div>
            {companies.map((company) => (
              <Card
                key={company.id}
                sx={{ mt: 4 }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: {
                        xs: 'column',
                        sm: 'row'
                      }
                    }}
                  >
                    <NextLink
                      href="/dashboard/jobs/companies/1"
                      passHref
                    >
                      <Avatar
                        component="a"
                        src={company.logo}
                        sx={{
                          background: 'transparent',
                          mr: 2,
                          mb: {
                            xs: 2,
                            md: 0
                          }
                        }}
                        variant="rounded"
                      >
                        {getInitials(company.name)}
                      </Avatar>
                    </NextLink>
                    <div>
                      <NextLink
                        href="/dashboard/jobs/companies/1"
                        passHref
                      >
                        <Link
                          color="textPrimary"
                          variant="h6"
                        >
                          {company.name}
                        </Link>
                      </NextLink>
                      <Typography variant="body2">
                        {company.shortDescription}
                      </Typography>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex',
                          flexWrap: 'wrap',
                          ml: -3,
                          '& > *': {
                            ml: 3,
                            mt: 1
                          }
                        }}
                      >
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}
                        >
                          <UsersIcon
                            color="action"
                            fontSize="small"
                            sx={{ mr: 1 }}
                          />
                          <Typography
                            color="textSecondary"
                            noWrap
                            variant="overline"
                          >
                            {company.employees}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}
                        >
                          <StarIcon
                            color="action"
                            fontSize="small"
                            sx={{ mr: 1 }}
                          />
                          <Typography
                            color="textSecondary"
                            noWrap
                            variant="overline"
                          >
                            {company.averageRating}
                            /5
                          </Typography>
                        </Box>
                        {company.isVerified && (
                          <Box
                            sx={{
                              alignItems: 'center',
                              display: 'flex'
                            }}
                          >
                            <BadgeCheckOutlinedIcon
                              color="success"
                              fontSize="small"
                              sx={{ mr: 1 }}
                            />
                            <Typography
                              color="success"
                              noWrap
                              variant="overline"
                            >
                              Verified
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </div>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <CompanyJobs jobs={company.jobs} />
                  </Box>
                </CardContent>
              </Card>
            ))}
          </div>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mt: 4,
              px: 3,
              py: 2
            }}
          >
            <IconButton disabled>
              <ChevronLeftIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <ChevronRightIcon fontSize="small" />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </>
  );
};

JobBrowse.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default JobBrowse;
