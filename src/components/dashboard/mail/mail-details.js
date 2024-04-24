import { useEffect } from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Markdown from 'react-markdown/with-html';
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import ReplyIcon from '@mui/icons-material/Reply';
import { ArrowLeft as ArrowLeftIcon } from '../../../icons/arrow-left';
import { ChevronLeft as ChevronLeftIcon } from '../../../icons/chevron-left';
import { ChevronRight as ChevronRightIcon } from '../../../icons/chevron-right';
import { DotsHorizontal as DotsHorizontalIcon } from '../../../icons/dots-horizontal';
import { Download as DownloadIcon } from '../../../icons/download';
import { Search as SearchIcon } from '../../../icons/search';
import { Trash as TrashIcon } from '../../../icons/trash';
import { getEmail } from '../../../slices/mail';
import { useDispatch, useSelector } from '../../../store';
import { getInitials } from '../../../utils/get-initials';
import { MailReply } from './mail-reply';

const MarkdownWrapper = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.body1.fontFamily,
  '& > p': {
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    marginBottom: theme.spacing(2)
  }
}));

export const MailDetails = (props) => {
  const { emailId, label } = props;
  const dispatch = useDispatch();
  const email = useSelector((state) => state.mail.emails.byId[emailId]);

  useEffect(() => {
      dispatch(getEmail(emailId));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [emailId]);

  if (!email) {
    return null;
  }

  const backHref = (label && label !== 'inbox')
    ? `/dashboard/mail?label=${label}`
    : '/dashboard/mail';

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: '100%',
        overflowY: 'auto'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: 'background.paper',
          display: 'flex',
          flexShrink: 0,
          p: 2
        }}
      >
        <NextLink
          href={backHref}
          passHref
        >
          <Tooltip title="Back">
            <IconButton component="a">
              <ArrowLeftIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </NextLink>
        <Box sx={{ flexGrow: 1 }} />
        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            )
          }}
          placeholder="Search message"
          size="small"
          sx={{ width: 200 }}
        />
        <Tooltip title="Previous email">
          <IconButton>
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Next email">
          <IconButton>
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <Divider />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexShrink: 0,
          justifyContent: 'space-between',
          p: 3
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <Avatar
            src={email.from.avatar}
            sx={{
              height: 48,
              width: 48
            }}
          >
            {getInitials(email.from.name)}
          </Avatar>
          <Box sx={{ ml: 2 }}>
            <Typography
              component="span"
              variant="subtitle2"
            >
              {email.from.name}
            </Typography>
            {' '}
            <Link
              color="textSecondary"
              component="span"
              variant="body2"
            >
              {email.from.email}
            </Link>
            <Typography
              color="textSecondary"
              variant="subtitle2"
            >
              To:
              {' '}
              {email.to.map((person) => (
                <Link
                  color="inherit"
                  key={person.email}
                >
                  {person.email}
                </Link>
              ))}
            </Typography>
            <Typography
              color="textSecondary"
              noWrap
              variant="caption"
            >
              {format(email.createdAt, 'MMMM d yyyy, h:mm:ss a')}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            alignItems: 'center',
            display: {
              xs: 'none',
              sm: 'flex'
            }
          }}
        >
          <Tooltip title="Reply">
            <IconButton>
              <ReplyIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Reply all">
            <IconButton>
              <ReplyAllIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton>
              <TrashIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <Tooltip title="More options">
          <IconButton>
            <DotsHorizontalIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <Divider />
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flexGrow: 1,
          px: 3,
          py: 6
        }}
      >
        <Typography variant="h3">
          {email.subject}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <MarkdownWrapper>
            <Markdown source={email.message} />
            {email.attachments && (
              <Box sx={{ mt: 6 }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2 }}
                >
                  {email.attachments.length} Attachments
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    m: -1
                  }}
                >
                  {email.attachments.map((attachment) => (
                    <Box
                      key={attachment.id}
                      sx={{
                        alignItems: 'center',
                        cursor: 'pointer',
                        display: 'flex',
                        m: 1
                      }}
                    >
                      {attachment.type === 'image'
                        ? (
                          <Avatar
                            src={attachment.url}
                            variant="rounded"
                          />
                        )
                        : (
                          <Avatar
                            variant="rounded"
                            sx={{
                              backgroundColor: 'primary.light'
                            }}
                          >
                            <Typography variant="overline">
                              PDF
                            </Typography>
                          </Avatar>
                        )}
                      <Box sx={{ ml: 1 }}>
                        <Typography
                          noWrap
                          variant="subtitle2"
                        >
                          {attachment.name}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >
                          {attachment.size}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Button
                    startIcon={<DownloadIcon fontSize="small" />}
                    size="small"
                  >
                    Download all
                  </Button>
                </Box>
              </Box>
            )}
          </MarkdownWrapper>
        </Box>
      </Box>
      <Divider />
      <MailReply />
    </Box>
  );
};

MailDetails.propTypes = {
  emailId: PropTypes.string.isRequired,
  label: PropTypes.string
};
