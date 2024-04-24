import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Typography } from '@mui/material';
import { ArrowRight as ArrowRightIcon } from '../../../icons/arrow-right';
import { QuillEditor } from '../../quill-editor';

export const JobDescriptionStep = (props) => {
  const { onBack, onNext, ...other } = props;
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div {...other}>
      <Typography variant="h6">
        How would you describe the job post?
      </Typography>
      <QuillEditor
        handleChange={handleChange}
        placeholder="Write something"
        sx={{
          height: 330,
          mt: 3
        }}
        value={content}
      />
      <Box sx={{ mt: 2 }}>
        <Button
          endIcon={(
            <ArrowRightIcon fontSize="small" />
          )}
          onClick={onNext}
          variant="contained"
        >
          Create Job
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

JobDescriptionStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
