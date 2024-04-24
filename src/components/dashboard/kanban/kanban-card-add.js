import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Box, Button, Link, OutlinedInput, Typography } from '@mui/material';
import { Plus as PlusIcon } from '../../../icons/plus';
import { createCard } from '../../../slices/kanban';
import { useDispatch } from '../../../store';

export const KanbanCardAdd = (props) => {
  const { columnId, ...other } = props;
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleAddInit = () => {
    setIsExpanded(true);
  };

  const handleAddCancel = () => {
    setIsExpanded(false);
    setName('');
  };

  const handleAddConfirm = async () => {
    try {
      await dispatch(createCard(columnId, name || 'Untitled Card'));
      setIsExpanded(false);
      setName('');
      toast.success('Card created!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  return (
    <div {...other}>
      {isExpanded
        ? (
          <>
            <OutlinedInput
              autoFocus
              fullWidth
              placeholder="My new task"
              name="cardName"
              onChange={handleChange}
              sx={{
                backgroundColor: 'background.paper',
                '& .MuiInputBase-input': {
                  px: 2,
                  py: 1
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'neutral.400'
                }
              }}
              value={name}
            />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                mt: 2
              }}
            >
              <Button
                onClick={handleAddConfirm}
                size="small"
                startIcon={(
                  <PlusIcon fontSize="small" />
                )}
                variant="contained"
              >
                Add Card
              </Button>
              <Button
                onClick={handleAddCancel}
                size="small"
                sx={{ ml: 2 }}
              >
                Cancel
              </Button>
            </Box>
          </>
        )
        : (
          <Link
            onClick={handleAddInit}
            sx={{
              alignItems: 'center',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'flex-start'
            }}
            underline="none"
          >
            <PlusIcon sx={{ color: 'action.active' }} />
            <Typography
              color="textSecondary"
              variant="subtitle1"
            >
              Add Card
            </Typography>
          </Link>
        )}
    </div>
  );
};

KanbanCardAdd.propTypes = {
  columnId: PropTypes.string.isRequired
};
