import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  TextField
} from '@mui/material';
import { Search as SearchIcon } from '../../../icons/search';
import { X as XIcon } from '../../../icons/x';

export const Modal3 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      p: 3
    }}
  >
    <Paper elevation={12}>
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <IconButton>
            <XIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ p: 3 }}>
        <Container maxWidth="md">
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                )
              }}
              placeholder="Search..."
            />
            <Button
              size="large"
              sx={{ ml: 2 }}
              variant="contained"
            >
              Search
            </Button>
          </Box>
        </Container>
      </Box>
    </Paper>
  </Box>
);
