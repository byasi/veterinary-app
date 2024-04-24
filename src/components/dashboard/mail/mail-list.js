import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Checkbox,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import { ChevronLeft as ChevronLeftIcon } from '../../../icons/chevron-left';
import { ChevronRight as ChevronRightIcon } from '../../../icons/chevron-right';
import { DotsHorizontal as DotsHorizontalIcon } from '../../../icons/dots-horizontal';
import { MenuAlt4 as MenuAlt4Icon } from '../../../icons/menu-alt-4';
import { Refresh as RefreshIcon } from '../../../icons/refresh';
import { Search as SearchIcon } from '../../../icons/search';
import { getEmails } from '../../../slices/mail';
import { useDispatch, useSelector } from '../../../store';
import { MailItem } from './mail-item';

export const MailList = (props) => {
  const { label, onToggleSidebar, ...other } = props;
  const dispatch = useDispatch();
  const { emails } = useSelector((state) => state.mail);
  const [selectedEmails, setSelectedEmails] = useState([]);

  useEffect(() => {
      dispatch(getEmails({ label }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [label]);

  const handleSelectAllEmails = () => {
    setSelectedEmails(emails.allIds.map(((emailId) => emailId)));
  };

  const handleDeselectAllEmails = () => {
    setSelectedEmails([]);
  };

  const handleSelectOneEmail = (emailId) => {
    setSelectedEmails((prevSelectedMails) => {
      if (!prevSelectedMails.includes(emailId)) {
        return [...prevSelectedMails, emailId];
      }

      return prevSelectedMails;
    });
  };

  const handleDeselectOneEmail = (emailId) => {
    setSelectedEmails((prevSelectedMails) => prevSelectedMails.filter((id) => id !== emailId));
  };

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;

    if (checked) {
      handleSelectAllEmails();
    }

    if (!checked) {
      handleDeselectAllEmails();
    }
  };

  const selectedAllMails = selectedEmails.length === emails.allIds.length;
  const selectedSomeMails = selectedEmails.length > 0
    && selectedEmails.length < emails.allIds.length;

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden'
      }}
      {...other}>
      <Box
        sx={{
          alignItems: 'center',
          borderBottomColor: 'divider',
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
          display: 'flex',
          p: 2
        }}
      >
        <IconButton onClick={onToggleSidebar}>
          <MenuAlt4Icon fontSize="small" />
        </IconButton>
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
          placeholder="Search email"
          size="small"
          sx={{ width: 200 }}
        />
        <Typography
          color="textSecondary"
          sx={{
            display: {
              xs: 'none',
              md: 'block'
            },
            mx: 2,
            whiteSpace: 'nowrap'
          }}
          variant="body2"
        >
          1 -
          {' '}
          {emails.allIds.length}
          {' '}
          of
          {' '}
          {emails.allIds.length}
        </Typography>
        <Tooltip title="Next page">
          <IconButton>
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Previous page">
          <IconButton>
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Refresh">
          <IconButton>
            <RefreshIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      {emails.allIds.length === 0
        ? (
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'background.default',
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'center',
              flexDirection: 'column',
              p: 2
            }}
          >
            <Typography
              color="textSecondary"
              variant="h5"
            >
              There are no emails
            </Typography>
          </Box>
        )
        : (
          <>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'background.paper',
                borderBottomColor: 'divider',
                borderBottomStyle: 'solid',
                borderBottomWidth: 1,
                display: {
                  xs: 'none',
                  md: 'flex'
                },
                p: 2
              }}
            >
              <Checkbox
                checked={selectedAllMails}
                indeterminate={selectedSomeMails}
                onChange={handleCheckboxChange}
              />
              <Typography variant="subtitle2">
                Select all
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Tooltip title="More options">
                <IconButton>
                  <DotsHorizontalIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            <div>
              {emails.allIds.map((emailId) => (
                <MailItem
                  email={emails.byId[emailId]}
                  href={(label && label !== 'inbox')
                    ? `/dashboard/mail?emailId=${emailId}&label=${label}`
                    : `/dashboard/mail?emailId=${emailId}`}
                  key={emailId}
                  onDeselect={() => handleDeselectOneEmail(emailId)}
                  onSelect={() => handleSelectOneEmail(emailId)}
                  selected={selectedEmails.includes(emailId)}
                />
              ))}
            </div>
          </>
        )}
    </Box>
  );
};

MailList.propTypes = {
  label: PropTypes.string,
  onToggleSidebar: PropTypes.func
};
