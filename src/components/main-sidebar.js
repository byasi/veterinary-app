import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Drawer, Link, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

const MainSidebarLink = styled(Link)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: 'block',
  padding: theme.spacing(1.5),
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
}));

export const MainSidebar = (props) => {
  const { onClose, open } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const handlePathChange = () => {
    if (open) {
      onClose?.();
    }
  };

  useEffect(handlePathChange,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]);

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={!lgUp && open}
      PaperProps={{ sx: { width: 256 } }}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 100
      }}
      variant="temporary"
    >
      <Box sx={{ p: 2 }}>
        <NextLink
          href="/dashboard"
          passHref
        >
          <MainSidebarLink
            color="textSecondary"
            underline="none"
            variant="subtitle2"
          >
            Live Demo
          </MainSidebarLink>
        </NextLink>
        <NextLink
          href="/browse"
          passHref
        >
          <MainSidebarLink
            color="textSecondary"
            underline="none"
            variant="subtitle2"
          >
            Components
          </MainSidebarLink>
        </NextLink>
        <NextLink
          href="/docs/welcome"
          passHref
        >
          <MainSidebarLink
            color="textSecondary"
            underline="none"
            variant="subtitle2"
          >
            Documentation
          </MainSidebarLink>
        </NextLink>
        <Button
          component="a"
          fullWidth
          href="https://material-ui.com/store/items/devias-kit-pro"
          sx={{ mt: 1.5 }}
          target="_blank"
          variant="contained"
        >
          Buy Now
        </Button>
      </Box>
    </Drawer>
  );
};

MainSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
