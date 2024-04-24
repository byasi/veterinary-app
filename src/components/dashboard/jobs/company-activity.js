import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Avatar, Box, Button, Link, Typography } from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@mui/lab';
import { getInitials } from '../../../utils/get-initials';

const getActivityContent = (activity) => {
  switch (activity.action) {
    case 'new_job':
      return (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          <Typography
            sx={{ mr: 0.5 }}
            variant="subtitle2"
          >
            {activity.author}
          </Typography>
          <Typography
            sx={{ mr: 0.5 }}
            variant="body2"
          >
            added a new job
          </Typography>
          <Typography
            color="primary"
            variant="subtitle2"
          >
            <NextLink
              href="/dashboard/jobs"
              passHref
            >
              <Link>
                {activity.addedJob}
              </Link>
            </NextLink>
          </Typography>
        </Box>
      );
    case 'new_team_member':
      return (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          <Typography
            sx={{ mr: 0.5 }}
            variant="subtitle2"
          >
            {activity.author}
          </Typography>
          <Typography
            sx={{ mr: 0.5 }}
            variant="body2"
          >
            added
          </Typography>
          <Typography
            sx={{ mr: 0.5 }}
            variant="subtitle2"
          >
            {activity.addedMember}
          </Typography>
          <Typography variant="body2">
            as a team member
          </Typography>
        </Box>
      );
    case 'created':
      return (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          <Typography
            sx={{ mr: 0.5 }}
            variant="subtitle2"
          >
            {activity.author}
          </Typography>
          <Typography
            sx={{ mr: 0.5 }}
            variant="body2"
          >
            created
          </Typography>
          <Typography variant="subtitle2">
            {activity.createdCompany}
          </Typography>
        </Box>
      );
    default:
      return null;
  }
};

export const CompanyActivity = (props) => {
  const { activities, ...other } = props;

  return (
    <div {...other}>
      <div>
        <Typography variant="h6">
          Activity
        </Typography>
      </div>
      <Timeline
        sx={{
          mb: 0,
          mt: 3,
          p: 0
        }}
      >
        {activities.map((activity, index) => (
          <TimelineItem
            key={activity.id}
            sx={{
              '&:before': {
                display: 'none'
              }
            }}
          >
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  border: 0,
                  p: 0
                }}
              >
                <Avatar src={activity.avatar}>
                  {getInitials(activity.author)}
                </Avatar>
              </TimelineDot>
              {activities.length - 1 > index && (
                <TimelineConnector
                  sx={{
                    backgroundColor: 'divider',
                    minHeight: 30
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent>
              {getActivityContent(activity)}
              <Typography
                color="textSecondary"
                variant="caption"
                sx={{ mt: 1 }}
              >
                {format(activity.date, 'MMM dd, HH:mm a')}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <Box sx={{ mt: 3 }}>
        <Button>
          Load more
        </Button>
      </Box>
    </div>
  );
};

CompanyActivity.defaultProps = {
  activities: []
};

CompanyActivity.propTypes = {
  activities: PropTypes.array
};
