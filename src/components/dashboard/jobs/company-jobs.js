import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceStrict } from 'date-fns';
import { Box, Button, Card, Divider, Typography } from '@mui/material';

export const CompanyJobs = (props) => {
  const { jobs, ...other } = props;

  return (
    <Card
      variant="outlined"
      {...other}>
      {jobs.map((job, index) => (
        <Fragment key={job.id}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              px: 2,
              py: 1.5
            }}
          >
            <div>
              <Typography variant="subtitle1">
                {job.title}
              </Typography>
              <Typography
                color="textSecondary"
                variant="caption"
              >
                {job.isRemote
                  ? 'Remote possible'
                  : (`${job.country}, ${job.city}`)}
                {' '}
                <Typography
                  color="inherit"
                  noWrap
                  variant="caption"
                >
                  •
                  {' '}
                  {job.currency}
                  {job.salaryMin}
                  {' '}
                  -
                  {' '}
                  {job.currency}
                  {job.salaryMax}
                </Typography>
              </Typography>
            </div>
            <div>
              <Typography
                color="textSecondary"
                sx={{ mr: 2 }}
                variant="caption"
              >
                {formatDistanceStrict(job.publishedAt, new Date(), { addSuffix: true })}
              </Typography>
              <Button>
                Apply
              </Button>
            </div>
          </Box>
          {(index !== jobs.length - 1) && <Divider />}
        </Fragment>
      ))}
    </Card>
  );
};

CompanyJobs.defaultProps = {
  jobs: []
};

CompanyJobs.propTypes = {
  jobs: PropTypes.array
};
