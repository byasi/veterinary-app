import { useState } from 'react';
import { Box, Button, Divider, FormControlLabel, Switch, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/lab';

export const Form6 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        minHeight: '100%',
        p: 3
      }}
    >
      <form onSubmit={(event) => event.preventDefault()}>
        <TextField
          fullWidth
          label="Title"
          name="title"
        />
        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Description"
            name="description"
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <FormControlLabel
            control={<Switch name="allDay" />}
            label="All day"
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <DateTimePicker
            onChange={(newDate) => setStartDate(newDate)}
            label="Start date"
            renderInput={(inputProps) => (
              <TextField
                fullWidth
                {...inputProps} />
            )}
            value={startDate}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <DateTimePicker
            onChange={(newDate) => setEndDate(newDate)}
            label="End date"
            renderInput={(inputProps) => (
              <TextField
                fullWidth
                {...inputProps} />
            )}
            value={endDate}
          />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <Box sx={{ flexGrow: 1 }} />
          <Button>
            Cancel
          </Button>
          <Button
            sx={{ ml: 1 }}
            type="submit"
            variant="contained"
          >
            Confirm
          </Button>
        </Box>
      </form>
    </Box>
  );
};
