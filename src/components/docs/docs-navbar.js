import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { AppBar, Box, IconButton, Link, Toolbar } from '@mui/material';
import { Menu as MenuIcon } from '../../icons/menu';
import { Logo } from '../logo';

export const DocsNavbar = ({ onOpenSidebar }) => (
  <AppBar
    elevation={0}
    sx={{
      backgroundColor: 'background.paper',
      borderBottomColor: 'divider',
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      color: 'text.secondary'
    }}
  >
    <Toolbar sx={{ height: 64 }}>
      <NextLink
        href="/"
        passHref
      >
        <a>
          <Logo
            sx={{
              height: 40,
              width: 40
            }}
          />
        </a>
      </NextLink>
      <Box sx={{ flexGrow: 1 }} />
      <NextLink
        href="/dashboard"
        passHref
      >
        <Link
          color="textSecondary"
          underline="none"
          variant="subtitle2"
        >
          Live Demo
        </Link>
      </NextLink>
      <NextLink
        href="/browse"
        passHref
      >
        <Link
          color="textSecondary"
          sx={{ ml: 2 }}
          underline="none"
          variant="subtitle2"
        >
          Components
        </Link>
      </NextLink>
      <IconButton
        color="inherit"
        onClick={onOpenSidebar}
        sx={{
          display: {
            lg: 'none'
          },
          ml: 2
        }}
      >
        <MenuIcon fontSize="small" />
      </IconButton>
    </Toolbar>
  </AppBar>
);

DocsNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};
