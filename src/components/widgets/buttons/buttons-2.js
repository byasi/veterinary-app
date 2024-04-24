import { Box, Button } from '@mui/material';
import { ArrowRight as ArrowRightIcon } from '../../../icons/arrow-right';
import { Trash as TrashIcon } from '../../../icons/trash';

export const Buttons2 = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      p: 3
    }}
  >
    <Button
      sx={{
        backgroundColor: 'error.main',
        mr: 3,
        '&:hover': {
          backgroundColor: 'error.dark'
        }
      }}
      size="small"
      startIcon={<TrashIcon fontSize="small" />}
      variant="contained"
    >
      Delete Account
    </Button>
    <Button
      endIcon={<ArrowRightIcon fontSize="small" />}
      size="small"
      variant="contained"
    >
      Next Page
    </Button>
  </Box>
);
