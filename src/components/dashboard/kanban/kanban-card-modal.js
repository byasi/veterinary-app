import { Fragment } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import debounce from 'lodash.debounce';
import {
  Box,
  Checkbox,
  Dialog,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { Archive as ArchiveIcon } from '../../../icons/archive';
import { Check as CheckIcon } from '../../../icons/check';
import { DocumentText as DocumentTextIcon } from '../../../icons/document-text';
import { Eye as EyeIcon } from '../../../icons/eye';
import { EyeOff as EyeOffIcon } from '../../../icons/eye-off';
import { Users as UsersIcon } from '../../../icons/users';
import { addChecklist, deleteCard, moveCard, updateCard } from '../../../slices/kanban';
import { useDispatch, useSelector } from '../../../store';
import { KanbanCardAction } from './kanban-card-action';
import { KanbanChecklist } from './kanban-checklist';

const labels = [
  'Business',
  'Planning',
  'Frontend',
  'Design'
];

export const KanbanCardModal = (props) => {
  const { card, column, onClose, open, ...other } = props;
  const dispatch = useDispatch();
  const { columns } = useSelector((state) => state.kanban);

  const handleDetailsUpdate = debounce(async (update) => {
    try {
      await dispatch(updateCard(card.id, update));
      toast.success('Card updated!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  }, 1000);

  const handleColumnChange = async (event) => {
    try {
      await dispatch(moveCard(card.id, 0, event.target.value));
      toast.success('Card moved!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  const handleSubscribe = async () => {
    try {
      await dispatch(updateCard(card.id, { isSubscribed: true }));
      toast.success('Unsubscribed!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  const handleUnsubscribe = async () => {
    try {
      await dispatch(updateCard(card.id, { isSubscribed: false }));
      toast.success('Subscribed!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteCard(card.id));
      toast.success('Card archived!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  const handleAddChecklist = async () => {
    try {
      await dispatch(addChecklist(card.id, 'Untitled Checklist'));
      toast.success('Checklist added!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  const handleLabelsChange = async (event) => {
    try {
      let newValue = [...card.labels];

      if (event.target.checked) {
        newValue.push(event.target.value);
      } else {
        newValue = newValue.filter((item) => item !== event.target.value);
      }

      await dispatch(updateCard(card.id, { labels: newValue }));
      toast.success('Card updated!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      onClose={onClose}
      open={open}
      {...other}>
      <Grid container>
        <Grid
          item
          sm={8}
          xs={12}
        >
          <Box
            sx={{
              py: 4,
              px: 3
            }}
          >
            <TextField
              defaultValue={card.name}
              fullWidth
              label="Task name"
              onChange={(event) => handleDetailsUpdate({ name: event.target.value })}
            />
            <TextField
              defaultValue={card.description}
              fullWidth
              label="Description"
              multiline
              onChange={(event) => handleDetailsUpdate({ description: event.target.value })}
              placeholder="Leave a message"
              rows={6}
              sx={{ mt: 3 }}
            />
            {card.checklists.length > 0 && (
              <>
                <Typography
                  sx={{ my: 3 }}
                  variant="h6"
                >
                  Checklist
                </Typography>
                <div>
                  {card.checklists.map((checklist) => (
                    <KanbanChecklist
                      card={card}
                      checklist={checklist}
                      key={checklist.id}
                      sx={{ mb: 3 }}
                    />
                  ))}
                </div>
              </>
            )}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
        >
          <Box
            sx={{
              backgroundColor: 'background.default',
              px: 3,
              py: 4,
              height: '100%'
            }}
          >
            <Typography
              color="textSecondary"
              variant="overline"
            >
              Status
            </Typography>
            <TextField
              fullWidth
              placeholder="Status"
              onChange={handleColumnChange}
              select
              SelectProps={{
                native: true
              }}
              sx={{ mt: 2 }}
              value={card.columnId}
            >
              {Object.values(columns.byId).map((_column) => (
                <option
                  key={_column.id}
                  value={_column.id}
                >
                  {_column.name}
                </option>
              ))}
            </TextField>
            <Box sx={{ mt: 2 }}>
              <Typography
                color="textSecondary"
                variant="overline"
              >
                Add
              </Typography>
              <Box sx={{ mt: 2 }}>
                <KanbanCardAction
                  icon={<CheckIcon fontSize="small" />}
                  onClick={handleAddChecklist}
                >
                  Checklist
                </KanbanCardAction>
                <KanbanCardAction
                  disabled
                  icon={<UsersIcon fontSize="small" />}
                >
                  Members
                </KanbanCardAction>
                <KanbanCardAction
                  disabled
                  icon={<DocumentTextIcon fontSize="small" />}
                >
                  Attachments
                </KanbanCardAction>
              </Box>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography
                color="textSecondary"
                component="h4"
                sx={{
                  fontWeight: 600,
                  mb: 2
                }}
                variant="overline"
              >
                Actions
              </Typography>
              {card.isSubscribed
                ? (
                  <KanbanCardAction
                    icon={<EyeOffIcon fontSize="small" />}
                    onClick={handleUnsubscribe}
                  >
                    Unwatch
                  </KanbanCardAction>
                )
                : (
                  <KanbanCardAction
                    icon={<EyeIcon fontSize="small" />}
                    onClick={handleSubscribe}
                  >
                    Watch
                  </KanbanCardAction>
                )}
              <KanbanCardAction
                icon={<ArchiveIcon fontSize="small" />}
                onClick={handleDelete}
              >
                Archive
              </KanbanCardAction>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography
                color="textSecondary"
                component="h4"
                sx={{ mb: 2 }}
                variant="overline"
              >
                Labels
              </Typography>
              <Box
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 1
                }}
              >
                <FormGroup>
                  {labels.map((label, index) => (
                    <Fragment key={label}>
                      <FormControlLabel
                        checked={card.labels.includes(label)}
                        control={<Checkbox />}
                        label={(
                          <Typography variant="body2">
                            {label}
                          </Typography>
                        )}
                        onChange={handleLabelsChange}
                        sx={{
                          pl: 2,
                          pr: 1,
                          py: 0.5
                        }}
                        value={label}
                      />
                      {index !== labels.length - 1 && <Divider />}
                    </Fragment>
                  ))}
                </FormGroup>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};

KanbanCardModal.propTypes = {
    card: PropTypes.object.isRequired,
    column: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

KanbanCardModal.defaultProps = {
  open: false
};
