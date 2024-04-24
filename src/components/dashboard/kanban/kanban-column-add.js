import { useState } from 'react';
import toast from 'react-hot-toast';
import { Box, Button, Link, OutlinedInput, Typography } from '@mui/material';
import { Plus as PlusIcon } from '../../../icons/plus';
import { createColumn } from '../../../slices/kanban';
import { useDispatch } from '../../../store';

export const KanbanColumnAdd = (props) => {
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
      await dispatch(createColumn(name || 'Untitled column'));
      setIsExpanded(false);
      setName('');
      toast.success('Column created!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  return (
    <div {...props}>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.mode === 'dark'
            ? 'neutral.800'
            : 'neutral.200',
          borderRadius: 1,
          mt: 7,
          mx: 1,
          width: {
            sm: 380,
            xs: 300
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          {isExpanded
            ? (
              <>
                <OutlinedInput
                  autoFocus
                  fullWidth
                  placeholder="My new board"
                  name="cardName"
                  onChange={handleChange}
                  value={name}
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
                    Add Column
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
                  Add Column
                </Typography>
              </Link>
            )}
        </Box>
      </Box>
    </div>
  );
};
