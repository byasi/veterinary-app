import { useState } from 'react';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { Avatar, Box, Button, Chip, IconButton, TextField, Typography } from '@mui/material';
import { Plus as PlusIcon } from '../../../icons/plus';

export const Form8 = () => {
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
        <div>
          <Typography variant="h5">
            Please select one option
          </Typography>
          <Typography
            color="textSecondary"
            sx={{ py: 2 }}
            variant="body1"
          >
            Proin tincidunt lacus sed ante efficitur efficitur. Quisque
            aliquam fringilla velit sit amet euismod.
          </Typography>
          <TextField
            fullWidth
            label="Project Name"
            name="projectName"
          />
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              mt: 3
            }}
          >
            <TextField
              fullWidth
              label="Tags"
              name="tags"
            />
            <IconButton sx={{ ml: 2 }}>
              <PlusIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ mt: 2 }}>
            {['Full-Time'].map((tag) => (
              <Chip
                avatar={<Avatar>F</Avatar>}
                key={tag}
                label={tag}
                onDelete={() => {
                }}
                sx={{
                  '& + &': {
                    ml: 1
                  }
                }}
                variant="outlined"
              />
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              mt: 4
            }}
          >
            <Box sx={{ mr: 2 }}>
              <MobileDatePicker
                label="Start Date"
                onChange={(newDate) => setStartDate(newDate)}
                renderInput={(inputProps) => (
                  <TextField {...inputProps} />
                )}
                value={startDate}
              />
            </Box>
            <MobileDatePicker
              label="End Date"
              onChange={(newDate) => setEndDate(newDate)}
              renderInput={(inputProps) => (
                <TextField {...inputProps} />
              )}
              value={endDate}
            />
          </Box>
        </div>
        <Box
          sx={{
            display: 'flex',
            mt: 6
          }}
        >
          <Box sx={{ flexGrow: 1 }} />
          <Button
            color="primary"
            type="submit"
            variant="contained"
          >
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
};
