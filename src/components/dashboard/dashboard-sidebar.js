import { useEffect, useMemo, useRef, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import { Home as HomeIcon } from '../../icons/home';
import { ShoppingBag as ShoppingBagIcon } from '../../icons/shopping-bag';
import { ShoppingCart as ShoppingCartIcon } from '../../icons/shopping-cart';
import { Collection as CollectionIcon } from '../../icons/collection';
import { Users as UsersIcon } from '../../icons/users';
import { Logo } from '../logo';
import { Scrollbar } from '../scrollbar';
import { DashboardSidebarSection } from './dashboard-sidebar-section';

const getSections = (t) => [
  {
    title: t('General'),
    items: [
      {
        title: t('Overview'),
        path: '/dashboard',
        icon: <HomeIcon fontSize="small" />
      },
    ]
  },
  {
    title: t('Management'),
    items: [
      {
        title: t('Users'),
        path: '/dashboard/users',
        icon: <UsersIcon fontSize="small" />,
      },
      {
        title: t('Doctors'),
        path: '/dashboard/doctors',
        icon: <UsersIcon fontSize="small" />,
      },
      {
        title: t('Pets'),
        path: '/dashboard/pets',
        icon: <ShoppingBagIcon fontSize="small" />,
      },
      {
        title: t('Medical Reports'),
        path: '/dashboard/medical-reports',
        icon: <CollectionIcon fontSize="small" />,
      },
      {
        title: t('Appointments'),
        icon: <ShoppingCartIcon fontSize="small" />,
        path: '/dashboard/orders',
        children: [
          {
            title: t('List'),
            path: '/dashboard/orders'
          },
          {
            title: t('Details'),
            path: '/dashboard/orders/1'
          }
        ]
      },
      // {
      //   title: t('Invoices'),
      //   path: '/dashboard/invoices',
      //   icon: <ReceiptTaxIcon fontSize="small" />,
      //   children: [
      //     {
      //       title: t('List'),
      //       path: '/dashboard/invoices'
      //     },
      //     {
      //       title: t('Details'),
      //       path: '/dashboard/invoices/1'
      //     }
      //   ]
      // }
    ]
  },
];

export const DashboardSidebar = (props) => {
  const { onClose, open } = props;
  const router = useRouter();
  const { t } = useTranslation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    noSsr: true
  });
  const sections = useMemo(() => getSections(t), [t]);

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
    <>
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
            height: '100%'
          }}
        >
          <div>
            <Box sx={{ p: 3 }}>
              <NextLink
                href="/"
                passHref
              >
                <a>
                  <Logo
                    sx={{
                      height: 42,
                      width: 42
                    }}
                  />
                </a>
              </NextLink>
            </Box>
            <Box sx={{ px: 2 }}>
              <Box
                sx={{
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  px: 3,
                  py: '11px',
                  borderRadius: 1
                }}
              >
                <div>
                  <Typography
                    color="inherit"
                    variant="subtitle1"
                  >
                    Admin
                  </Typography>
                </div>
              </Box>
            </Box>
          </div>
          <Divider
            sx={{
              borderColor: '#2D3748',
              my: 3
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            {sections.map((section) => (
              <DashboardSidebarSection
                key={section.title}
                path={router.asPath}
                sx={{
                  mt: 2,
                  '& + &': {
                    mt: 2
                  }
                }}
                {...section} />
            ))}
          </Box>
          <Divider
            sx={{
              borderColor: '#2D3748'  // dark divider
            }}
          />
          <Box sx={{ p: 2 }}>
            <Typography
              color="neutral.100"
              variant="subtitle2"
            >
              {t('Need Help?')}
            </Typography>
            <Typography
              color="neutral.500"
              variant="body2"
            >
              {t('Check our docs')}
            </Typography>
            <NextLink
              href="/docs/welcome"
              passHref
            >
              <Button
                color="secondary"
                component="a"
                fullWidth
                sx={{ mt: 2 }}
                variant="contained"
              >
                {t('Documentation')}
              </Button>
            </NextLink>
          </Box>
        </Box>
      </Scrollbar>
      
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            borderRightColor: 'divider',
            borderRightStyle: 'solid',
            borderRightWidth: (theme) => theme.palette.mode === 'dark' ? 1 : 0,
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
