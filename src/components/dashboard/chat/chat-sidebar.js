import { useState } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Box, Button, Drawer, IconButton, List, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { chatApi } from '../../../__fake-api__/chat-api';
import { Plus as PlusIcon } from '../../../icons/plus';
import { X as XIcon } from '../../../icons/x';
import { useSelector } from '../../../store';
import { Scrollbar } from '../../scrollbar';
import { ChatContactSearch } from './chat-contact-search';
import { ChatThreadItem } from './chat-thread-item';

const ChatSidebarDesktop = styled(Drawer)({
  flexShrink: 0,
  width: 380,
  '& .MuiDrawer-paper': {
    position: 'relative',
    width: 380
  }
});

const ChatSidebarMobile = styled(Drawer)({
  maxWidth: '100%',
  width: 380,
  '& .MuiDrawer-paper': {
    height: 'calc(100% - 64px)',
    maxWidth: '100%',
    top: 64,
    width: 380
  }
});

export const ChatSidebar = (props) => {
  const { containerRef, onClose, open, ...other } = props;
  const router = useRouter();
  const { threads, activeThreadId } = useSelector((state) => state.chat);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const handleGroupClick = () => {
    if (!mdUp) {
      onClose?.();
    }
  };

  const handleSearchClickAway = () => {
    setIsSearchFocused(false);
    setSearchQuery('');
  };

  const handleSearchChange = async (event) => {
    try {
      const { value } = event.target;

      setSearchQuery(value);

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

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchSelect = (result) => {
    setIsSearchFocused(false);
    setSearchQuery('');

    if (!mdUp) {
      onClose?.();
    }

    router.push(`/dashboard/chat?threadKey=${result.id}`);
  };

  const handleSelectThread = (threadId) => {
    const thread = threads.byId[threadId];
    let threadKey;

    if (thread.type === 'GROUP') {
      threadKey = thread.id;
    } else {
      // We hardcode the current user ID because the mocked that is not in sync
      // with the auth provider.
      // When implementing this app with a real database, replace this
      // ID with the ID from Auth Context.
      threadKey =
        thread.participantIds.find((participantId) => (participantId
          !== '5e86809283e28b96d2d38537'));
    }

    if (!mdUp) {
      onClose?.();
    }

    router.push(`/dashboard/chat?threadKey=${threadKey}`);
  };

  const content = (
    <div>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          p: 2
        }}
      >
        <Typography variant="h5">
          Chats
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <NextLink
          href="/dashboard/chat?compose=true"
          passHref
        >
          <Button
            component="a"
            onClick={handleGroupClick}
            startIcon={<PlusIcon />}
            variant="contained"
          >
            Group
          </Button>
        </NextLink>
        <IconButton
          onClick={onClose}
          sx={{
            display: {
              sm: 'none'
            },
            ml: 2
          }}
        >
          <XIcon fontSize="small" />
        </IconButton>
      </Box>
      <ChatContactSearch
        isFocused={isSearchFocused}
        onChange={handleSearchChange}
        onClickAway={handleSearchClickAway}
        onFocus={handleSearchFocus}
        onSelect={handleSearchSelect}
        query={searchQuery}
        results={searchResults}
      />
      <Box
        sx={{
          borderTopColor: 'divider',
          borderTopStyle: 'solid',
          borderTopWidth: 1,
          display: isSearchFocused ? 'none' : 'block'
        }}
      >
        <Scrollbar>
          <List disablePadding>
            {threads.allIds.map((threadId) => (
              <ChatThreadItem
                active={activeThreadId === threadId}
                key={threadId}
                onSelect={() => handleSelectThread(threadId)}
                thread={threads.byId[threadId]}
              />
            ))}
          </List>
        </Scrollbar>
      </Box>
    </div>
  );

  if (mdUp) {
    return (
      <ChatSidebarDesktop
        anchor="left"
        open={open}
        SlideProps={{ container: containerRef?.current }}
        variant="persistent"
        {...other}>
        {content}
      </ChatSidebarDesktop>
    );
  }

  return (
    <ChatSidebarMobile
      anchor="left"
      ModalProps={{ container: containerRef?.current }}
      onClose={onClose}
      open={open}
      SlideProps={{ container: containerRef?.current }}
      variant="temporary"
      {...other}>
      {content}
    </ChatSidebarMobile>
  );
};

ChatSidebar.propTypes = {
  containerRef: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};
