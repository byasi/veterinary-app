import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
import { Avatar, Box, Link, Typography } from '@mui/material';

export const SocialComment = (props) => {
  const { authorAvatar, authorName, createdAt, message, ...other } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        mt: 3
      }}
      {...other}>
      <NextLink
        href="#"
        passHref
      >
        <Avatar
          component="a"
          src={authorAvatar}
        />
      </NextLink>
      <Box
        sx={{
          backgroundColor: 'background.default',
          borderRadius: 1,
          flexGrow: 1,
          ml: 2,
          p: 2
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            mb: 1
          }}
        >
          <NextLink
            href="#"
            passHref
          >
            <Link
              color="textPrimary"
              variant="subtitle2"
            >
              {authorName}
            </Link>
          </NextLink>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            color="textSecondary"
            variant="caption"
          >
            {formatDistanceToNowStrict(createdAt)}
            {' '}
            ago
          </Typography>
        </Box>
        <Typography variant="body2">
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

SocialComment.propTypes = {
  authorAvatar: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired
};
