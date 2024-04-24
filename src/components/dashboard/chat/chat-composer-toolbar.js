import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Popper,
  TextField,
  Typography
} from '@mui/material';
import { chatApi } from '../../../__fake-api__/chat-api';
import { Search as SearchIcon } from '../../../icons/search';
import { Scrollbar } from '../../scrollbar';

const getFilteredSearchResults = (results, recipients) => {
  const recipientIds = recipients.reduce((acc, recipient) => [
    ...acc,
    recipient.id
  ], []);

  return results.filter((result) => !recipientIds.includes(result.id));
};

export const ChatComposerToolbar = (props) => {
  const { onAddRecipient, onRemoveRecipient, recipients, ...other } = props;
  const containerRef = useRef(null);
  const [query, setQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  const filteredSearchResults = getFilteredSearchResults(searchResults, recipients);
  const displayResults = query && isSearchFocused;

  const handleSearchChange = async (event) => {
    try {
      const { value } = event.target;

      setQuery(value);

      if (value) {
        const data = await chatApi.getContacts(value);

        setSearchResults(data);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearchBlur = () => {
    if (!displayResults) {
      setIsSearchFocused(false);
    }
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchResultsClickAway = () => {
    setIsSearchFocused(false);
  };

  const handleAddRecipient = (contact) => {
    setQuery('');

    if (onAddRecipient) {
      onAddRecipient(contact);
    }
  };

  const handleRemoveRecipient = (recipientId) => {
    if (onRemoveRecipient) {
      onRemoveRecipient(recipientId);
    }
  };

  return (
    <>
      <Box
        sx={{
          borderBottomColor: 'divider',
          borderBottomStyle: 'solid',
          borderBottomWidth: 1
        }}
        {...other}>
        <Scrollbar>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              p: 2
            }}
          >
            <Box
              ref={containerRef}
              sx={{
                alignItems: 'center',
                display: 'flex',
                mr: 1,
                '& .MuiInputBase-root': {
                  backgroundColor: 'background.paper',
                  height: 40,
                  minWidth: 260
                }
              }}
            >
              <TextField
                fullWidth
                onBlur={handleSearchBlur}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                placeholder="Search contacts"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  )
                }}
                value={query}
              />
            </Box>
            <Typography
              color="textSecondary"
              sx={{ mr: 2 }}
              variant="body2"
            >
              To:
            </Typography>
            {recipients.reverse().map((recipient) => (
              <Chip
                avatar={(
                  <Avatar src={recipient.avatar} />
                )}
                key={recipient.id}
                label={recipient.name}
                onDelete={() => handleRemoveRecipient(recipient.id)}
                sx={{ mr: 2 }}
              />
            ))}
          </Box>
        </Scrollbar>
      </Box>
      {displayResults && (
        <ClickAwayListener onClickAway={handleSearchResultsClickAway}>
          <Popper
            anchorEl={containerRef?.current}
            open={isSearchFocused}
            placement="bottom-start"
          >
            <Paper
              elevation={16}
              sx={{
                borderColor: 'divider',
                borderStyle: 'solid',
                borderWidth: 1,
                maxWidth: '100%',
                mt: 1,
                width: 320
              }}
            >
              {filteredSearchResults.length === 0
                ? (
                  <Box
                    sx={{
                      p: 2,
                      textAlign: 'center'
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h6"
                    >
                      Nothing Found
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                    >
                      We couldn&apos;t find any matches
                      for &quot;
                      {query}
                      &quot;. Try checking for typos or using
                      complete words.
                    </Typography>
                  </Box>
                )
                : (
                  <>
                    <Box
                      sx={{
                        px: 2,
                        pt: 2
                      }}
                    >
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                      >
                        Contacts
                      </Typography>
                    </Box>
                    <List>
                      {filteredSearchResults.map((result) => (
                        <ListItem
                          button
                          key={result.id}
                          onClick={() => handleAddRecipient(result)}
                        >
                          <ListItemAvatar>
                            <Avatar src={result.avatar} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={result.name}
                            primaryTypographyProps={{
                              noWrap: true,
                              variant: 'subtitle2'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
            </Paper>
          </Popper>
        </ClickAwayListener>
      )}
    </>
  );
};

ChatComposerToolbar.propTypes = {
  onAddRecipient: PropTypes.func,
  onRemoveRecipient: PropTypes.func,
  recipients: PropTypes.array
};

ChatComposerToolbar.defaultProps = {
  recipients: []
};
