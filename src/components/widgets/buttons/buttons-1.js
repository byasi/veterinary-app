import { Box, Button } from '@mui/material';

export const Buttons1 = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      p: 3
    }}
  >
    <div>
      <Button
        size="large"
        sx={{ mr: 3 }}
        variant="contained"
      >
        Default
      </Button>
      <Button
        disabled
        size="large"
        variant="contained"
      >
        Disabled
      </Button>
    </div>
    <Box sx={{ py: 3 }}>
      <Button
        size="large"
        sx={{ mr: 3 }}
        variant="outlined"
      >
        Default
      </Button>
      <Button
        color="primary"
        disabled
        size="large"
        variant="outlined"
      >
        Disabled
      </Button>
    </Box>
    <div>
      <Button
        size="large"
        sx={{ mr: 3 }}
      >
        Default
      </Button>
      <Button
        disabled
        size="large"
      >
        Disabled
      </Button>
    </div>
  </Box>
);
