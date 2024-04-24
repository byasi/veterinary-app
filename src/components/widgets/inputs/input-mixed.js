import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography
} from '@mui/material';
import { DateTimePicker } from '@mui/lab';

export const InputMixed = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      p: 3
    }}
  >
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex'
      }}
    >
      <Switch color="primary" />
      <Typography variant="body1">
        Schedule Publish
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <DateTimePicker
        label="Start date"
        onChange={() => { }}
        renderInput={(inputProps) => (
          <TextField
            fullWidth
            {...inputProps} />
        )}
        value={new Date()}
      />
    </Box>
    <Box sx={{ mt: 3 }}>
      <FormControl
        fullWidth
        variant="outlined"
      >
        <InputLabel>
          Category
        </InputLabel>
        <Select
          defaultValue="programming"
          label="Category"
        >
          <MenuItem value="programming">
            Programming
          </MenuItem>
          <MenuItem value="design">
            Design
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        mt: 3
      }}
    >
      <Checkbox defaultChecked />
      <Typography variant="body1">
        Published Globally
      </Typography>
    </Box>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        mt: 3
      }}
    >
      <Checkbox defaultChecked />
      <Typography variant="body1">
        Enable Contents
      </Typography>
    </Box>
  </Box>
);
