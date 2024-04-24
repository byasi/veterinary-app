import { useRef, useState } from 'react';
import { ListItemIcon, ListItemText, Tooltip, IconButton, Menu, MenuItem } from '@mui/material';
import { Archive as ArchiveIcon } from '../icons/archive';
import { DocumentText as DocumentTextIcon } from '../icons/document-text';
import { DotsHorizontal as DotsHorizontalIcon } from '../icons/dots-horizontal';
import { Download as DownloadIcon } from '../icons/download';
import { Duplicate as DuplicateIcon } from '../icons/duplicate';

export const MoreMenu = (props) => {
  const anchorRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <Tooltip title="More options">
        <IconButton
          onClick={handleMenuOpen}
          ref={anchorRef}
          {...props}>
          <DotsHorizontalIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'top'
        }}
        onClose={handleMenuClose}
        open={openMenu}
        PaperProps={{
          sx: {
            maxWidth: '100%',
            width: 256
          }
        }}
        transformOrigin={{
          horizontal: 'left',
          vertical: 'top'
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <DownloadIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Import" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DocumentTextIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Export" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DuplicateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Copy" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ArchiveIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </MenuItem>
      </Menu>
    </>
  );
};
