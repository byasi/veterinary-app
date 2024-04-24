import { Box, Button, Divider, IconButton, Input, Paper, Tooltip, Typography } from '@mui/material';
import AddPhotoIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { QuillEditor } from '../../quill-editor';
import { ArrowsExpand as ArrowsExpandIcon } from '../../../icons/arrows-expand';
import { X as XIcon } from '../../../icons/x';

export const Modal1 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      p: 3
    }}
  >
    <Paper
      elevation={12}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: 3,
        minHeight: 500,
        mx: 'auto',
        outline: 'none',
        width: 600
      }}
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
        <IconButton>
          <ArrowsExpandIcon fontSize="small" />
        </IconButton>
        <IconButton>
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
        placeholder="Leave a message"
        sx={{
          border: 'none',
          flexGrow: 1
        }}
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
  </Box>
);
