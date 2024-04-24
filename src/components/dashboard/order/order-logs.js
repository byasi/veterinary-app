import PropTypes from 'prop-types';
import { format, subHours } from 'date-fns';
import { Avatar, Button, Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@mui/lab';
import { ShoppingCart as ShoppingCartIcon } from '../../../icons/shopping-cart';

const activities = [
  {
    log: 'Stripe charge complete (Charge ID: 5ecb8a6879877087d4aa2690)',
    date: subHours(Date.now(), 18).getTime()
  },
  {
    log: 'Order status changed from Pending payment to Completed.',
    date: subHours(Date.now(), 21).getTime()
  }

];

export const OrderLogs = (props) => {
  const { order, ...other } = props;

  return (
    <Card {...other}>
      <CardHeader title="Logs" />
      <Divider />
      <CardContent>
        <Timeline
          sx={{
            m: 0,
            p: 0
          }}
        >
          {activities.map((activity, index) => (
            <TimelineItem
              key={activity.date}
              sx={{
                '&::before': {
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
                  <Avatar>
                    <ShoppingCartIcon fontSize="small" />
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
                <Typography variant="body2">
                  {activity.log}
                </Typography>
                <Typography
                  color="textSecondary"
                  sx={{ mt: 1 }}
                  variant="caption"
                >
                  {format(activity.date, 'MMM dd, h:mm a')}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        <Button sx={{ mt: 2 }}>
          Load more
        </Button>
      </CardContent>
    </Card>
  );
};

OrderLogs.propTypes = {
    order: PropTypes.object.isRequired
};
