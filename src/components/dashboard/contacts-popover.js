import { useEffect } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  Typography
} from '@mui/material';
import { getContacts } from '../../slices/chat';
import { useDispatch, useSelector } from '../../store';
import { StatusIndicator } from '../status-indicator';

export const ContactsPopover = (props) => {
  const { anchorEl, onClose, open, ...other } = props;
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.chat);

  useEffect(() => {
      dispatch(getContacts());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          p: 2,
          width: 320
        }
      }}
      transitionDuration={0}
      {...other}>
      <Typography variant="h6">
        Contacts
      </Typography>
      <Box sx={{ mt: 2 }}>
        <List disablePadding>
          {contacts.allIds.map((contactId) => {
            const contact = contacts.byId[contactId];

            return (
              <ListItem
                disableGutters
                key={contact.id}
              >
                <ListItemAvatar>
                  <Avatar
                    src={contact.avatar}
                    sx={{ cursor: 'pointer' }}
                  />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={(
                    <Link
                      color="textPrimary"
                      noWrap
                      sx={{ cursor: 'pointer' }}
                      underline="none"
                      variant="subtitle2"
                    >
                      {contact.name}
                    </Link>
                  )}
                />
                {contact.isActive
                  ? (
                    <StatusIndicator
                      size="small"
                      status="online"
                    />
                  )
                  : (
                    <Typography
                      color="textSecondary"
                      noWrap
                      variant="caption"
                    >
                      {formatDistanceToNowStrict(contact.lastActivity)}
                      {' '}
                      ago
                    </Typography>
                  )}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Popover>
  );
};

ContactsPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};
