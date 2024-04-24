import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import { useSelector } from '../../../store';

const memberSelector = (state, memberId) => {
  const { members } = state.kanban;

  return members.byId[memberId];
};

export const KanbanComment = (props) => {
  const { createdAt, memberId, message, ...other } = props;
  const member = useSelector((state) => memberSelector(state, memberId));

  return (
    <Box
      sx={{
        display: 'flex',
        mb: 2
      }}
      {...other}>
      <Avatar src={member.avatar} />
      <Box
        sx={{
          ml: 2,
          flexGrow: 1
        }}
      >
        <Typography variant="subtitle2">
          {member.name}
        </Typography>
        <Paper
          sx={{
            backgroundColor: 'background.default',
            mt: 1,
            p: 2
          }}
          variant="outlined"
        >
          <Typography variant="body2">
            {message}
          </Typography>
        </Paper>
        <Typography
          color="textSecondary"
          component="p"
          sx={{ mt: 1 }}
          variant="caption"
        >
          {format(createdAt, 'MMM dd, yyyy \'at\' hh:mm a')}
        </Typography>
      </Box>
    </Box>
  );
};

KanbanComment.propTypes = {
  createdAt: PropTypes.number.isRequired,
  memberId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
