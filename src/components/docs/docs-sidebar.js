import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Drawer, useMediaQuery } from '@mui/material';
import { DocsSidebarSection } from './docs-sidebar-section';
import { Scrollbar } from '../scrollbar';

const sections = [
  {
    title: 'Overview',
    items: [
      {
        title: 'Welcome',
        path: '/docs/welcome'
      },
      {
        title: 'Getting Started',
        path: '/docs/getting-started'
      },
      {
        title: 'Dependencies',
        path: '/docs/dependencies'
      },
      {
        title: 'Environment Variables',
        path: '/docs/environment-variables'
      },
      {
        title: 'Deployment',
        path: '/docs/deployment'
      },
      {
        title: 'Routing',
        path: '/docs/routing'
      },
      {
        title: 'Theming',
        path: '/docs/theming'
      },
      {
        title: 'Redux',
        path: '/docs/redux'
      },
      {
        title: 'Server Calls',
        path: '/docs/server-calls'
      },
      {
        title: 'Settings',
        path: '/docs/settings'
      },
      {
        title: 'RTL',
        path: '/docs/rtl'
      },
      {
        title: 'Internationalization',
        path: '/docs/internationalization'
      }
    ]
  },
  {
    title: 'Authentication',
    items: [
      {
        title: 'Amplify',
        path: '/docs/authentication-amplify'
      },
      {
        title: 'Auth0',
        path: '/docs/authentication-auth0'
      },
      {
        title: 'Firebase',
        path: '/docs/authentication-firebase'
      },
      {
        title: 'JWT',
        path: '/docs/authentication-jwt'
      }
    ]
  },
  {
    title: 'Guards',
    items: [
      {
        title: 'Guest Guard',
        path: '/docs/guest-guard'
      },
      {
        title: 'Auth Guard',
        path: '/docs/auth-guard'
      },
      {
        title: 'Role Based Guard',
        path: '/docs/role-based-guard'
      }
    ]
  },
  {
    title: 'Analytics',
    items: [
      {
        title: 'Introduction',
        path: '/docs/analytics-introduction'
      },
      {
        title: 'Configuration',
        path: '/docs/analytics-configuration'
      },
      {
        title: 'Event Tracking',
        path: '/docs/analytics-event-tracking'
      }
    ]
  },
  {
    title: 'Support',
    items: [
      {
        title: 'Changelog',
        path: '/docs/changelog'
      },
      {
        title: 'Contact',
        path: '/docs/contact'
      },
      {
        title: 'Further Support',
        path: '/docs/further-support'
      }
    ]
  }
];

export const DocsSidebar = (props) => {
  const { onClose, open } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    noSsr: true
  });

  const handlePathChange = () => {
    if (!router.isReady) {
      return;
    }

    if (open) {
      onClose?.();
    }
  };

  useEffect(handlePathChange,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.isReady, router.asPath]);

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          py: 2
        }}
      >
        {sections.map((section) => (
          <DocsSidebarSection
            key={section.title}
            path={router.asPath}
            sx={{
              '& + &': {
                mt: 3
              }
            }}
            {...section} />
        ))}
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        variant="permanent"
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            height: 'calc(100% - 64px) !important',
            top: '64px !important',
            width: 256
          }
        }}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={open}
      variant="temporary"
      PaperProps={{
        sx: {
          backgroundColor: 'background.default',
          width: 256
        }
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 100
      }}
    >
      {content}
    </Drawer>
  );
};

DocsSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
