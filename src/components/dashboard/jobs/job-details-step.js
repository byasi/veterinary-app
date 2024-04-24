import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Chip, InputAdornment, TextField, Typography } from '@mui/material';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { ArrowRight as ArrowRightIcon } from '../../../icons/arrow-right';

export const JobDetailsStep = (props) => {
  const { onBack, onNext, ...other } = props;
  const [tag, setTag] = useState('');
  const [tagArray, setTagArray] = useState([]);
  const [startDate, setStartDate] = useState(new Date('2021-09-22T11:41:50'));
  const [endDate, setEndDate] = useState(new Date('2022-01-11T12:41:50'));

  const handleStartDateChange = (newValue) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue) => {
    setEndDate(newValue);
  };

  const handleTagAdd = (newTag) => {
    tagArray.push(newTag);
    setTagArray(tagArray);
  };

  return (
    <div {...other}>
      <Typography variant="h6">
        What is the job about?
      </Typography>
      <Box sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Job Title"
          name="jobTitle"
          placeholder="e.g Salesforce Analyst"
        />
        <TextField
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  sx={{ ml: 2 }}
                  onClick={() => {
                    if (!tag) {
                      return;
                    }

                    handleTagAdd(tag);
                    setTag('');
                  }}
                >
                  Add
                </Button>
              </InputAdornment>
            )
          }}
          label="Tags"
          name="tags"
          onChange={(event) => setTag(event.target.value)}
          sx={{ mt: 3 }}
          value={tag}
        />
        <Box sx={{ ml: -1 }}>
          {tagArray.map((_tag, i) => (
            <Chip
              onDelete={() => {
                const newTags = tagArray.filter((t) => t !== _tag);
                setTagArray(newTags);
              }}
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              label={_tag}
              sx={{
                mt: 1,
                ml: 1
              }}
              variant="outlined"
            />
          ))}
        </Box>
        <Typography
          sx={{ mt: 3 }}
          variant="subtitle1"
        >
          When is the project starting?
        </Typography>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            mt: 3
          }}
        >
          <MobileDatePicker
            label="Start Date"
            inputFormat="MM/dd/yyyy"
            value={startDate}
            onChange={handleStartDateChange}
            renderInput={(inputProps) => <TextField {...inputProps} />}
          />
          <Box sx={{ ml: 2 }}>
            <MobileDatePicker
              label="End Date"
              inputFormat="MM/dd/yyyy"
              value={endDate}
              onChange={handleEndDateChange}
              renderInput={(inputProps) => <TextField {...inputProps} />}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Button
          endIcon={(
            <ArrowRightIcon fontSize="small" />
          )}
          onClick={onNext}
          variant="contained"
        >
          Continue
        </Button>
        <Button
          onClick={onBack}
          sx={{ ml: 2 }}
        >
          Back
        </Button>
      </Box>
    </div>
  );
};

JobDetailsStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
