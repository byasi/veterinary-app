import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  ClickAwayListener,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography
} from '@mui/material';
import { Search as SearchIcon } from '../../../icons/search';
import { Tip } from '../../tip';

export const ChatContactSearch = forwardRef((props, ref) => {
  const { isFocused, onChange, onClickAway, onFocus, onSelect, query, results, ...other } = props;

  const handleSelect = (result) => {
    if (onSelect) {
      onSelect(result);
    }
  };

  const displayResults = query && isFocused;

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Box
        ref={ref}
        sx={{ p: 2 }}
        {...other}>
        <TextField
          fullWidth
          onChange={onChange}
          onFocus={onFocus}
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
        {(isFocused && !query) && (
          <Box sx={{ py: 2 }}>
            <Tip message="Enter a contact name" />
          </Box>
        )}
        {(displayResults && results.length === 0) && (
          <Box sx={{ py: 2 }}>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              We couldn&apos;t find any matches for &quot;{query}&quot;. Try checking for typos or using
              complete words.
            </Typography>
          </Box>
        )}
        {(displayResults && results.length > 0) && (
          <Box sx={{ py: 2 }}>
            <Typography
              color="textSecondary"
              variant="subtitle2"
            >
              Contacts
            </Typography>
            <List>
              {results.map((result) => (
                <ListItem
                  button
                  key={result.id}
                  onClick={() => handleSelect(result)}
                >
                  <ListItemAvatar>
                    <Avatar
                      src={result.avatar}
                      sx={{
                        height: 32,
                        width: 32
                      }}
                    />
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
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
});

ChatContactSearch.propTypes = {
  isFocused: PropTypes.bool,
  onChange: PropTypes.func,
  onClickAway: PropTypes.func,
  onFocus: PropTypes.func,
  onSelect: PropTypes.func,
  query: PropTypes.string,
  results: PropTypes.array
};

ChatContactSearch.defaultProps = {
  isFocused: false,
  query: '',
  results: []
};
