import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Box, Button, OutlinedInput } from '@mui/material';
import { Plus as PlusIcon } from '../../../icons/plus';
import { addCheckItem } from '../../../slices/kanban';
import { useDispatch } from '../../../store';

export const KanbanCheckItemAdd = (props) => {
  const { cardId, checklistId, ...other } = props;
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAdd = () => {
    setIsExpanded(true);
  };

  const handleCancel = () => {
    setIsExpanded(false);
    setName('');
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSave = async () => {
    try {
      if (!name) {
        return;
      }

      await dispatch(addCheckItem(cardId, checklistId, name));
      setIsExpanded(false);
      setName('');
      toast.success('Check item added!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  return (
    <Box
      sx={{ width: '100%' }}
      {...other}>
      {isExpanded
        ? (
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              width: '100%'
            }}
          >
            <OutlinedInput
              onChange={handleChange}
              placeholder="Add an item"
              value={name}
              sx={{
                flexGrow: 1,
                '& .MuiInputBase-input': {
                  px: 2,
                  py: 1
                }
              }}
            />
            <Button
              onClick={handleSave}
              size="small"
              sx={{ ml: 2 }}
              variant="contained"
            >
              Add
            </Button>
            <Button
              onClick={handleCancel}
              size="small"
              sx={{ ml: 2 }}
            >
              Cancel
            </Button>
          </Box>
        )
        : (
          <Button
            onClick={handleAdd}
            size="small"
            startIcon={(
              <PlusIcon fontSize="small" />
            )}
          >
            Add Item
          </Button>
        )}
    </Box>
  );
};

KanbanCheckItemAdd.propTypes = {
  cardId: PropTypes.string.isRequired,
  checklistId: PropTypes.string.isRequired
};
