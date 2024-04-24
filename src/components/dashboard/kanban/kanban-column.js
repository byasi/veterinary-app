import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import {
  Box,
  Chip,
  ClickAwayListener,
  Divider,
  IconButton,
  Input,
  Menu,
  MenuItem,
  OutlinedInput
} from '@mui/material';
import { DotsHorizontal as DotsHorizontalIcon } from '../../../icons/dots-horizontal';
import { clearColumn, deleteColumn, updateColumn } from '../../../slices/kanban';
import { useDispatch, useSelector } from '../../../store';
import { KanbanCard } from './kanban-card';
import { KanbanCardAdd } from './kanban-card-add';

const columnSelector = (state, columnId) => {
  const { columns } = state.kanban;

  return columns.byId[columnId];
};

export const KanbanColumn = (props) => {
  const { columnId, ...other } = props;
  const dispatch = useDispatch();
  const moreRef = useRef(null);
  const column = useSelector((state) => columnSelector(state, columnId));
  const [openMenu, setOpenMenu] = useState(false);
  const [name, setName] = useState(column.name);
  const [isRenaming, setIsRenaming] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleRenameInit = () => {
    setIsRenaming(true);
  };

  const handleRename = async () => {
    try {
      // If name is empty use the initial column name
      if (!name) {
        setName(column.name);
        setIsRenaming(false);
        return;
      }

      // If name is equal to column name, it means there are no changes
      if (name === column.name) {
        setIsRenaming(false);
        return;
      }

      const update = { name };

      await dispatch(updateColumn(column.id, update));
      setIsRenaming(false);
      toast.success('Column updated!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  const handleDelete = async () => {
    try {
      setOpenMenu(false);
      await dispatch(deleteColumn(column.id));
      toast.success('Column deleted!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  const handleClear = async () => {
    try {
      setOpenMenu(false);
      await dispatch(clearColumn(column.id));
      toast.success('Column cleared!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  return (
    <div {...other}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '100%',
          mx: 2,
          overflowX: 'hidden',
          overflowY: 'hidden',
          width: {
            xs: 300,
            sm: 380
          }
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            pr: 2,
            py: 1
          }}
        >
          {isRenaming
            ? (
              <ClickAwayListener onClickAway={handleRename}>
                <OutlinedInput
                  autoFocus
                  fullWidth
                  onBlur={handleRename}
                  onChange={handleChange}
                  value={name}
                  sx={{
                    backgroundColor: 'background.paper',
                    '& .MuiInputBase-input': {
                      px: 2,
                      py: 1
                    }
                  }}
                />
              </ClickAwayListener>
            )
            : (
              <Input
                disableUnderline
                fullWidth
                onClick={handleRenameInit}
                value={column.name}
                sx={{
                  borderColor: 'transparent',
                  borderRadius: 1,
                  borderStyle: 'solid',
                  borderWidth: 1,
                  cursor: 'text',
                  m: '-1px',
                  '&:hover': {
                    backgroundColor: 'action.selected'
                  },
                  '& .MuiInputBase-input': {
                    fontWeight: 500,
                    px: 2,
                    py: 1
                  }
                }}
              />
            )}
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Chip
              sx={{ ml: 2 }}
              label={column.cardIds.length}
            />
            <IconButton
              sx={{ ml: 2 }}
              edge="end"
              onClick={handleMenuOpen}
              ref={moreRef}
            >
              <DotsHorizontalIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.mode === 'dark'
              ? 'neutral.800'
              : 'neutral.200',
            borderRadius: 1
          }}
        >
          <Droppable
            droppableId={column.id}
            type="card"
          >
            {(provided) => (
              <Box
                ref={provided.innerRef}
                sx={{
                  flexGrow: 1,
                  minHeight: 80,
                  overflowY: 'auto',
                  px: 2,
                  py: 1
                }}
              >
                {column.cardIds.map((cardId, index) => (
                  <Draggable
                    draggableId={cardId}
                    index={index}
                    key={cardId}
                  >
                    {(_provided, snapshot) => (
                      <KanbanCard
                        cardId={cardId}
                        dragging={snapshot.isDragging}
                        index={index}
                        key={cardId}
                        column={column}
                        ref={_provided.innerRef}
                        style={{ ..._provided.draggableProps.style }}
                        {..._provided.draggableProps}
                        {..._provided.dragHandleProps} />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
          <Divider
            sx={{
              borderColor: (theme) => theme.palette.mode === 'dark'
                ? 'neutral.700'
                : 'neutral.300'
            }}
          />
          <Box sx={{ p: 2 }}>
            <KanbanCardAdd columnId={column.id} />
          </Box>
        </Box>
        <Menu
          anchorEl={moreRef.current}
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'bottom'
          }}
          keepMounted
          onClose={handleMenuClose}
          open={openMenu}
        >
          <MenuItem onClick={handleClear}>
            Clear
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            Delete
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
};

KanbanColumn.propTypes = {
  columnId: PropTypes.string.isRequired
};
