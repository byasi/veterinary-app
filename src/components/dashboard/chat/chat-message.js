import { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
import { Avatar, Box, Card, CardMedia, Link, Typography } from '@mui/material';

export const ChatMessage = (props) => {
  const { body, contentType, createdAt, authorAvatar, authorName, authorType, ...other } = props;
  const [expandMedia, setExpandMedia] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: authorType === 'user'
          ? 'row-reverse'
          : 'row',
        maxWidth: 500,
        ml: authorType === 'user' ? 'auto' : 0,
        mb: 2
      }}
      {...other}>
      <Avatar
        src={authorAvatar}
        sx={{
          height: 32,
          ml: authorType === 'user' ? 2 : 0,
          mr: authorType === 'user' ? 0 : 2,
          width: 32
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Card
          sx={{
            backgroundColor: authorType === 'user'
              ? 'primary.main'
              : 'background.paper',
            color: authorType === 'user'
              ? 'primary.contrastText'
              : 'text.primary',
            px: 2,
            py: 1
          }}
        >
          <Box sx={{ mb: 1 }}>
            <Link
              color="inherit"
              sx={{ cursor: 'pointer' }}
              variant="subtitle2"
            >
              {authorName}
            </Link>
          </Box>
          {contentType === 'image'
            ? (
              <CardMedia
                onClick={() => setExpandMedia(true)}
                image={body}
                sx={{ height: 200 }}
              />
            )
            : (
              <Typography
                color="inherit"
                variant="body1"
              >
                {body}
              </Typography>
            )}
        </Card>
        <Box
          sx={{
            display: 'flex',
            justifyContent: authorType === 'user'
              ? 'flex-end'
              : 'flex-start',
            mt: 1,
            px: 2
          }}
        >
          <Typography
            color="textSecondary"
            noWrap
            variant="caption"
          >
            {formatDistanceToNowStrict(createdAt)}
            {' '}
            ago
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

ChatMessage.propTypes = {
  authorAvatar: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorType: PropTypes.oneOf(['contact', 'user']),
  body: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired
};
