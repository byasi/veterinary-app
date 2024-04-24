import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Avatar, Box, IconButton, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
import { ChatComposer } from '../../components/dashboard/chat/chat-composer';
import { ChatSidebar } from '../../components/dashboard/chat/chat-sidebar';
import { ChatThread } from '../../components/dashboard/chat/chat-thread';
import { ChatAlt2 as ChatAlt2Icon } from '../../icons/chat-alt2';
import { MenuAlt4 as MenuAlt4Icon } from '../../icons/menu-alt-4';
import { gtm } from '../../lib/gtm';
import { getThreads } from '../../slices/chat';
import { useDispatch } from '../../store';

const ChatInner = styled('div',
  { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      marginLeft: -380
    },
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
      [theme.breakpoints.up('md')]: {
        marginLeft: 0
      },
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    })
  }));

// In our case there two possible routes
// one that contains /chat and one with a chat?threadKey={{threadKey}}
// if threadKey does not exist, it means that the chat is in compose mode

const Chat = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const rootRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const compose = router.query.compose === 'true';
  const threadKey = router.query.threadKey;
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'), { noSsr: true });

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  useEffect(() => {
      dispatch(getThreads());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  useEffect(() => {
    if (!mdUp) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [mdUp]);

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  if (!router.isReady) {
    return null;
  }

  const view = threadKey
    ? 'thread'
    : compose
      ? 'compose'
      : 'blank';

  return (
    <>
      <Head>
        <title>
          Dashboard: Chat | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          position: 'relative',
          height: '100%',
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <Box
          ref={rootRef}
          sx={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }}
        >
          <ChatSidebar
            containerRef={rootRef}
            onClose={handleCloseSidebar}
            open={isSidebarOpen}
          />
          <ChatInner open={isSidebarOpen}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'background.paper',
                borderBottomColor: 'divider',
                borderBottomStyle: 'solid',
                borderBottomWidth: 1,
                display: 'flex',
                p: 2
              }}
            >
              <IconButton onClick={handleToggleSidebar}>
                <MenuAlt4Icon fontSize="small" />
              </IconButton>
            </Box>
            {view === 'thread' && <ChatThread threadKey={threadKey} />}
            {view === 'compose' && <ChatComposer />}
            {view === 'blank' && (
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  flexGrow: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    height: 56,
                    width: 56
                  }}
                >
                  <ChatAlt2Icon fontSize="small" />
                </Avatar>
                <Typography
                  color="textSecondary"
                  sx={{ mt: 2 }}
                  variant="subtitle1"
                >
                  Start meaningful conversations!
                </Typography>
              </Box>
            )}
          </ChatInner>
        </Box>
      </Box>
    </>
  );
};

Chat.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Chat;
