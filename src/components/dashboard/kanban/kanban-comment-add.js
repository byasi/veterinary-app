import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Avatar, Box, TextField } from '@mui/material';
import { addComment } from '../../../slices/kanban';
import { useDispatch } from '../../../store';

export const KanbanCommentAdd = (props) => {
  const { cardId, ...other } = props;
  const dispatch = useDispatch();
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user = {
    avatar: '/static/mock-images/avatars/avatar-anika_visser.png'
  };
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyUp = async (event) => {
    try {
      if (event.code === 'Enter' && message) {
        await dispatch(addComment(cardId, message));
        setMessage('');
        toast.success('Comment added!');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex'
      }}
      {...other}>
      <Avatar
        src={user.avatar}
        sx={{ mr: 2 }}
      />
      <TextField
        fullWidth
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder="Write a comment..."
        size="small"
        value={message}
      />
    </Box>
  );
};

KanbanCommentAdd.propTypes = {
  cardId: PropTypes.string.isRequired
};
