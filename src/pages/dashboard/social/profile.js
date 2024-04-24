import { useCallback, useState, useEffect } from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Tab,
  Tabs,
  Tooltip,
  Typography
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import AddPhotoIcon from '@mui/icons-material/AddPhotoAlternate';
import { socialApi } from '../../../__fake-api__/social-api';
import { AuthGuard } from '../../../components/authentication/auth-guard';
import { DashboardLayout } from '../../../components/dashboard/dashboard-layout';
import { SocialConnections } from '../../../components/dashboard/social/social-connections';
import { SocialTimeline } from '../../../components/dashboard/social/social-timeline';
import { useMounted } from '../../../hooks/use-mounted';
import { Chat as ChatIcon } from '../../../icons/chat';
import { DotsHorizontal as DotsHorizontalIcon } from '../../../icons/dots-horizontal';
import { UserAdd as UserAddIcon } from '../../../icons/user-add';
import { gtm } from '../../../lib/gtm';

const tabs = [
  { label: 'Timeline', value: 'timeline' },
  { label: 'Connections', value: 'connections' }
];

export const SocialProfile = () => {
  const isMounted = useMounted();
  const [currentTab, setCurrentTab] = useState('timeline');
  const [profile, setProfile] = useState(null);
  const [connectedStatus, setConnectedStatus] = useState('not_connected');

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getProfile = useCallback(async () => {
    try {
      const data = await socialApi.getProfile();

      if (isMounted()) {
        setProfile(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
      getProfile();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getProfile]);

  const handleConnectToggle = () => {
    setConnectedStatus((prevConnectedStatus) => (prevConnectedStatus === 'not_connected'
      ? 'pending'
      : 'not_connected'));
  };

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  if (!profile) {
    return null;
  }

  return (
    <>
      <Head>
        <title>
          Dashboard: Social Profile | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Box
            style={{ backgroundImage: `url(${profile.cover})` }}
            sx={{
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: 1,
              height: 348,
              position: 'relative',
              '&:hover': {
                '& button': {
                  visibility: 'visible'
                }
              }
            }}
          >
            <Button
              startIcon={<AddPhotoIcon fontSize="small" />}
              sx={{
                backgroundColor: blueGrey[900],
                bottom: {
                  lg: 24,
                  xs: 'auto'
                },
                color: 'common.white',
                position: 'absolute',
                right: 24,
                top: {
                  lg: 'auto',
                  xs: 24
                },
                visibility: 'hidden',
                '&:hover': {
                  backgroundColor: blueGrey[900]
                }
              }}
              variant="contained"
            >
              Change Cover
            </Button>
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              mt: 5
            }}
          >
            <Avatar
              src={profile.avatar}
              sx={{
                height: 64,
                width: 64
              }}
            />
            <Box sx={{ ml: 2 }}>
              <Typography
                color="textSecondary"
                variant="overline"
              >
                {profile.bio}
              </Typography>
              <Typography variant="h6">
                {profile.name}
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: {
                  md: 'block',
                  xs: 'none'
                }
              }}
            >
              {connectedStatus === 'not_connected' && (
                <Button
                  onClick={handleConnectToggle}
                  size="small"
                  startIcon={(
                    <UserAddIcon fontSize="small" />
                  )}
                  sx={{ ml: 2 }}
                  variant="outlined"
                >
                  Connect
                </Button>
              )}
              {connectedStatus === 'pending' && (
                <Button
                  color="primary"
                  onClick={handleConnectToggle}
                  size="small"
                  sx={{ ml: 2 }}
                  variant="outlined"
                >
                  Pending
                </Button>
              )}
              <NextLink
                href="/dashboard/chat"
                passHref
              >
                <Button
                  component="a"
                  size="small"
                  startIcon={(
                    <ChatIcon fontSize="small" />
                  )}
                  sx={{ ml: 1 }}
                  variant="contained"
                >
                  Send Message
                </Button>
              </NextLink>
            </Box>
            <Tooltip title="More options">
              <IconButton sx={{ ml: 1 }}>
                <DotsHorizontalIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Container>
        <Box sx={{ mt: 5 }}>
          <Container maxWidth="lg">
            <Tabs
              indicatorColor="primary"
              onChange={handleTabsChange}
              scrollButtons="auto"
              textColor="primary"
              value={currentTab}
              variant="scrollable"
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                />
              ))}
            </Tabs>
            <Divider />
            <Box sx={{ py: 3 }}>
              {currentTab === 'timeline' && <SocialTimeline profile={profile} />}
              {currentTab === 'connections' && <SocialConnections />}
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

SocialProfile.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default SocialProfile;
