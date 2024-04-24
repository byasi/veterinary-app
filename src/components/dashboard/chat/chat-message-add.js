import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, IconButton, TextField, Tooltip } from '@mui/material';
import { PaperAirplane as PaperAirplaneIcon } from '../../../icons/paper-airplane';
import { Photograph as PhotographIcon } from '../../../icons/photograph';
import { PaperClip as PaperClipIcon } from '../../../icons/paper-clip';

export const ChatMessageAdd = (props) => {
  const { disabled, onSend, ...other } = props;
  const fileInputRef = useRef(null);
  const [body, setBody] = useState('');
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user = {
    avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
    name: 'Anika Visser'
  };

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event) => {
    setBody(event.target.value);
  };

  const handleSend = () => {
    if (!body) {
      return;
    }

    onSend?.(body);
    setBody('');
  };

  const handleKeyUp = (event) => {
    if (event.code === 'Enter') {
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: 'background.paper',
        display: 'flex',
        flexShrink: 0,
        p: 3
      }}
      {...other}>
      <Avatar
        sx={{
          display: {
            xs: 'none',
            sm: 'inline'
          },
          mr: 2
        }}
        src={user.avatar}
      />
      <TextField
        disabled={disabled}
        fullWidth
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder="Leave a message"
        value={body}
        size="small"
      />

      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          m: -2,
          ml: 2
        }}
      >
        <Tooltip title="Send">
          <Box sx={{ m: 1 }}>
            <IconButton
              color="primary"
              disabled={!body || disabled}
              sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                '&:hover': {
                  backgroundColor: 'primary.dark'
                }
              }}
              onClick={handleSend}
            >
              <PaperAirplaneIcon fontSize="small" />
            </IconButton>
          </Box>
        </Tooltip>
        <Tooltip title="Attach photo">
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'inline-flex'
              },
              m: 1
            }}
          >
            <IconButton
              disabled={disabled}
              edge="end"
              onClick={handleAttach}
            >
              <PhotographIcon fontSize="small" />
            </IconButton>
          </Box>
        </Tooltip>
        <Tooltip title="Attach file">
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'inline-flex'
              },
              m: 1
            }}
          >
            <IconButton
              disabled={disabled}
              edge="end"
              onClick={handleAttach}
            >
              <PaperClipIcon fontSize="small" />
            </IconButton>
          </Box>
        </Tooltip>
      </Box>
      <input
        hidden
        ref={fileInputRef}
        type="file"
      />
    </Box>
  );
};

ChatMessageAdd.propTypes = {
  disabled: PropTypes.bool,
  onSend: PropTypes.func
};

ChatMessageAdd.defaultProps = {
  disabled: false
};
