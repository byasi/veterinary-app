import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { format } from 'date-fns';
import { Avatar, Box, Checkbox, Chip, IconButton, Tooltip, Typography } from '@mui/material';
import { amber } from '@mui/material/colors';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { PaperClip as PaperClipIcon } from '../../../icons/paper-clip';
import { Star as StarIcon } from '../../../icons/star';
import { StarOutlined as StarOutlinedIcon } from '../../../icons/star-outlined';
import { getInitials } from '../../../utils/get-initials';

export const MailItem = (props) => {
  const { email, onDeselect, onSelect, selected, href, ...other } = props;

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;

    if (checked && onSelect) {
      onSelect();
    }

    if (!checked && onDeselect) {
      onDeselect();
    }
  };

  const handleStarToggle = () => {
    // dispatch action
  };

  const handleImportantToggle = () => {
    // dispatch action
  };

  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: 'background.paper',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'divider',
        display: 'flex',
        p: 2,
        ...(!email.isUnread && {
          position: 'relative',
          '&:before': {
            backgroundColor: 'primary.main',
            content: '" "',
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 4
          },
          '& $name, & $subject': {
            fontWeight: 600
          }
        }),
        ...(selected && {
          backgroundColor: 'action.selected'
        }),
        '&:hover': {
          backgroundColor: 'action.hover'
        }
      }}
      {...other}>
      <Box
        sx={{
          alignItems: 'center',
          display: {
            md: 'flex',
            xs: 'none'
          },
          mr: 1
        }}
      >
        <Checkbox
          checked={selected}
          onChange={handleCheckboxChange}
        />
        <Tooltip title="Starred">
          <IconButton onClick={handleStarToggle}>
            {email.isStarred
              ? (
                <StarIcon
                  fontSize="small"
                  sx={{ color: amber[400] }}
                />
              )
              : (
                <StarOutlinedIcon fontSize="small" />
              )}
          </IconButton>
        </Tooltip>
        <Tooltip title="Important">
          <IconButton onClick={handleImportantToggle}>
            {email.isImportant
              ? (
                <LabelImportantIcon
                  fontSize="small"
                  sx={{ color: amber[400] }}
                />
              )
              : <LabelImportantIcon fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>
      <NextLink
        href={href}
        passHref
      >
        <Box
          component="a"
          sx={{
            alignItems: 'center',
            cursor: 'pointer',
            display: 'flex',
            flexGrow: 1,
            flexWrap: {
              xs: 'wrap',
              md: 'nowrap'
            },
            minWidth: 1,
            textDecoration: 'none'
          }}
        >
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Avatar src={email.from.avatar}>
              {getInitials(email.from.name)}
            </Avatar>
            <Typography
              color="textPrimary"
              sx={{
                width: 120,
                ml: 2,
                ...(!email.isUnread && {
                  fontWeight: 600
                })
              }}
              noWrap
              variant="body2"
            >
              {email.from.name}
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              ml: {
                xs: 0,
                md: 2
              },
              my: {
                xs: 2,
                md: 0
              },
              overflow: 'hidden',
              width: {
                xs: '100%',
                md: 'auto'
              }
            }}
          >
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                maxWidth: 800,
                width: '100%'
              }}
            >
              <Typography
                color="textPrimary"
                sx={{
                  fontWeight: 600,
                  minWidth: 100,
                  maxWidth: 400,
                  mr: 1
                }}
                noWrap
                variant="body2"
              >
                {email.subject}
              </Typography>
              <Typography
                color="textSecondary"
                noWrap
                variant="body2"
              >
                —
                {email.message}
              </Typography>
            </Box>
            {email.attachments?.length > 0 && (
              <Box sx={{ mt: 1 }}>
                <Chip
                  icon={<PaperClipIcon fontSize="small" />}
                  label={email.attachments[0].name}
                  size="small"
                />
                {email.attachments?.length > 1 && (
                  <Chip
                    label="+1"
                    size="small"
                    sx={{ ml: 1 }}
                  />
                )}
              </Box>
            )}
          </Box>
          <Typography
            color="textSecondary"
            variant="caption"
            sx={{
              display: 'block',
              textAlign: {
                xs: 'left',
                md: 'right'
              },
              whiteSpace: 'nowrap',
              width: 100
            }}
          >
            {format(email.createdAt, 'dd MMM')}
          </Typography>
        </Box>
      </NextLink>
    </Box>
  );
};

MailItem.propTypes = {
    email: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  onDeselect: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.bool.isRequired
};
