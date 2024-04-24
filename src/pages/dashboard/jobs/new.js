import { useState } from 'react';
import Head from 'next/head';
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography
} from '@mui/material';
import { AuthGuard } from '../../../components/authentication/auth-guard';
import { DashboardLayout } from '../../../components/dashboard/dashboard-layout';
import { JobCategoryStep } from '../../../components/dashboard/jobs/job-category-step';
import { JobDetailsStep } from '../../../components/dashboard/jobs/job-details-step';
import { JobDescriptionStep } from '../../../components/dashboard/jobs/job-description-step';
import { Check as CheckIcon } from '../../../icons/check';

const StepIcon = (props) => {
  const { active, completed, icon } = props;

  const highlight = active || completed;

  return (
    <Avatar
      sx={{
        backgroundColor: highlight && 'secondary.main',
        color: highlight && 'secondary.contrastText',
        height: 40,
        width: 40
      }}
      variant="rounded"
    >
      {completed
        ? <CheckIcon fontSize="small" />
        : icon}
    </Avatar>
  );
};

const JobCreate = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [complete, setComplete] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    setComplete(true);
  };

  const steps = [
    {
      label: 'Category',
      content: (
        <JobCategoryStep
          onBack={handleBack}
          onNext={handleNext}
        />
      )
    },
    {
      label: 'Job Details',
      content: (
        <JobDetailsStep
          onBack={handleBack}
          onNext={handleNext}
        />
      )
    },
    {
      label: 'Description',
      content: (
        <JobDescriptionStep
          onBack={handleBack}
          onNext={handleComplete}
        />
      )
    }
  ];

  return (
    <>
      <Head>
        <title>
          Dashboard: Job Create | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexGrow: 1
        }}
      >
        <Grid
          container
          sx={{ flexGrow: 1 }}
        >
          <Grid
            item
            sm={4}
            xs={12}
            sx={{
              backgroundImage: 'url(/static/mock-images/jobs/create_job_background.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: {
                xs: 'none',
                md: 'block'
              }
            }}
          />
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              p: {
                xs: 4,
                sm: 6,
                md: 8
              }
            }}
          >
            <Box maxWidth="sm">
              <Typography
                sx={{ mb: 3 }}
                variant="h4"
              >
                Create Job Ad
              </Typography>
              {!complete
                ? (
                  <Stepper
                    activeStep={activeStep}
                    orientation="vertical"
                    sx={{
                      '& .MuiStepConnector-line': {
                        ml: 1,
                        borderLeftColor: 'divider',
                        borderLeftWidth: 2
                      }
                    }}
                  >
                    {steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel StepIconComponent={StepIcon}>
                          <Typography
                            sx={{ ml: 2 }}
                            variant="overline"
                          >
                            {step.label}
                          </Typography>
                        </StepLabel>
                        <StepContent
                          sx={{
                            py: (activeStep === index) && 4,
                            ml: '20px',
                            borderLeftColor: 'divider',
                            borderLeftWidth: 2
                          }}
                        >
                          {step.content}
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                )
                : (
                  <div>
                    <Avatar
                      sx={{
                        backgroundColor: 'success.main',
                        color: 'success.contrastText',
                        height: 40,
                        width: 40
                      }}
                    >
                      <CheckIcon />
                    </Avatar>
                    <Typography
                      variant="h6"
                      sx={{ mt: 2 }}
                    >
                      All done!
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                    >
                      Here’s a preview of your newly created job
                    </Typography>
                    <Card
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        mt: 2,
                        px: 2,
                        py: 1.5
                      }}
                      variant="outlined"
                    >
                      <div>
                        <Typography variant="subtitle1">
                          Senior Backend Engineer
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="caption"
                        >
                          Remote possible
                          {' '}
                          <Typography
                            color="inherit"
                            noWrap
                            variant="caption"
                          >
                            •
                            {' '}
                            $150k
                            {' '}
                            -
                            {' '}
                            $210K
                          </Typography>
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          color="textSecondary"
                          sx={{ mr: 2 }}
                          variant="caption"
                        >
                          1 minute ago
                        </Typography>
                        <Button>
                          Apply
                        </Button>
                      </div>
                    </Card>
                  </div>
                )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

JobCreate.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default JobCreate;
