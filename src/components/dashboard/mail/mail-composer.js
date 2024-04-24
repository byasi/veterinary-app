import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Backdrop,
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  Paper,
  Portal,
  Tooltip,
  Typography
} from '@mui/material';
import AddPhotoIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MinimizeIcon from '@mui/icons-material/Minimize';
import { ArrowsExpand as ArrowsExpandIcon } from '../../../icons/arrows-expand';
import { X as XIcon } from '../../../icons/x';
import { QuillEditor } from '../../quill-editor';

export const MailComposer = (props) => {
  const { open, onClose } = props;
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [messageBody, setMessageBody] = useState('');

  const handleChange = (value) => {
    setMessageBody(value);
  };

  const handleExitFullScreen = () => {
    setIsFullScreen(false);
  };

  const handleEnterFullScreen = () => {
    setIsFullScreen(true);
  };

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <Backdrop open={isFullScreen} />
      <Paper
        sx={{
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          margin: 3,
          maxHeight: (theme) => `calc(100% - ${theme.spacing(6)})`,
          maxWidth: (theme) => `calc(100% - ${theme.spacing(6)})`,
          minHeight: 500,
          outline: 'none',
          position: 'fixed',
          right: 0,
          width: 600,
          zIndex: 2000,
          ...(isFullScreen && {
            height: '100%',
            width: '100%'
          })
        }}
        elevation={12}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            px: 2,
            py: 1
          }}
        >
          <Typography variant="h6">
            New Message
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {isFullScreen
            ? (
              <IconButton onClick={handleExitFullScreen}>
                <MinimizeIcon fontSize="small" />
              </IconButton>
            )
            : (
              <IconButton onClick={handleEnterFullScreen}>
                <ArrowsExpandIcon fontSize="small" />
              </IconButton>
            )}
          <IconButton onClick={onClose}>
            <XIcon fontSize="small" />
          </IconButton>
        </Box>
        <Input
          disableUnderline
          fullWidth
          placeholder="To"
          sx={{
            p: 1,
            borderBottom: 1,
            borderColor: 'divider'
          }}
        />
        <Input
          disableUnderline
          fullWidth
          placeholder="Subject"
          sx={{
            p: 1,
            borderBottom: 1,
            borderColor: 'divider'
          }}
        />
        <QuillEditor
          onChange={handleChange}
          placeholder="Leave a message"
          sx={{
            border: 'none',
            flexGrow: 1
          }}
          value={messageBody}
        />
        <Divider />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button variant="contained">
            Send
          </Button>
          <Tooltip title="Attach image">
            <IconButton
              size="small"
              sx={{ ml: 1 }}
            >
              <AddPhotoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Attach file">
            <IconButton
              size="small"
              sx={{ ml: 1 }}
            >
              <AttachFileIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>
    </Portal>
  );
};

MailComposer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
};
