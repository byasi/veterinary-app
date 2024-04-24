import { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import { X as XIcon } from '../../../icons/x';
import { PropertyList } from '../../property-list';
import { PropertyListItem } from '../../property-list-item';
import { Scrollbar } from '../../scrollbar';

const statusOptions = [
  {
    label: 'Canceled',
    value: 'canceled'
  },
  {
    label: 'Complete',
    value: 'complete'
  },
  {
    label: 'Pending',
    value: 'pending'
  },
  {
    label: 'Rejected',
    value: 'rejected'
  }
];

const OrderPreview = (props) => {
  const { lgUp, onApprove, onEdit, onReject, order } = props;
  const align = lgUp ? 'horizontal' : 'vertical';

  return (
    <>
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: (theme) => theme.palette.mode === 'dark'
            ? 'neutral.800'
            : 'neutral.100',
          borderRadius: 1,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          px: 3,
          py: 2.5
        }}
      >
        <Typography
          color="textSecondary"
          sx={{ mr: 2 }}
          variant="overline"
        >
          Actions
        </Typography>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            m: -1,
            '& > button': {
              m: 1
            }
          }}
        >
          <Button
            onClick={onApprove}
            size="small"
            variant="contained"
          >
            Approve
          </Button>
          <Button
            onClick={onReject}
            size="small"
            variant="outlined"
          >
            Reject
          </Button>
          <Button
            onClick={onEdit}
            size="small"
            startIcon={(
              <EditIcon fontSize="small" />
            )}
          >
            Edit
          </Button>
        </Box>
      </Box>
      <Typography
        sx={{ my: 3 }}
        variant="h6"
      >
        Details
      </Typography>
      <PropertyList>
        <PropertyListItem
          align={align}
          disableGutters
          label="ID"
          value={order.id}
        />
        <PropertyListItem
          align={align}
          disableGutters
          label="Number"
          value={order.number}
        />
        <PropertyListItem
          align={align}
          disableGutters
          label="Customer"
        >
          <Typography
            color="primary"
            variant="body2"
          >
            {order.customer.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {order.customer.address1}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {order.customer.city}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {order.customer.country}
          </Typography>
        </PropertyListItem>
        <PropertyListItem
          align={align}
          disableGutters
          label="Date"
          value={format(order.createdAt, 'dd/MM/yyyy HH:mm')}
        />
        <PropertyListItem
          align={align}
          disableGutters
          label="Promotion Code"
          value={order.promotionCode}
        />
        <PropertyListItem
          align={align}
          disableGutters
          label="Total Amount"
          value={`${order.currency}${order.totalAmount}`}
        />
        <PropertyListItem
          align={align}
          disableGutters
          label="Status"
          value={order.status}
        />
      </PropertyList>
      <Divider sx={{ my: 3 }} />
      <Typography
        sx={{ my: 3 }}
        variant="h6"
      >
        Line items
      </Typography>
      <Scrollbar>
        <Table sx={{ minWidth: 400 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                Description
              </TableCell>
              <TableCell>
                Billing Cycle
              </TableCell>
              <TableCell>
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  {item.name}
                  {' '}
                  x
                  {' '}
                  {item.quantity}
                </TableCell>
                <TableCell>
                  {item.billingCycle}
                </TableCell>
                <TableCell>
                  {numeral(item.unitAmount).format(`${item.currency}0,0.00`)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </>
  );
};

const OrderForm = (props) => {
  const { onCancel, onSave, order } = props;

  return (
    <>
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: (theme) => theme.palette.mode === 'dark'
            ? 'neutral.800'
            : 'neutral.100',
          borderRadius: 1,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          px: 3,
          py: 2.5
        }}
      >
        <Typography
          variant="overline"
          sx={{ mr: 2 }}
          color="textSecondary"
        >
          Order
        </Typography>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            m: -1,
            '& > button': {
              m: 1
            }
          }}
        >
          <Button
            color="primary"
            onClick={onSave}
            size="small"
            variant="contained"
          >
            Save changes
          </Button>
          <Button
            onClick={onCancel}
            size="small"
            variant="outlined"
          >
            Cancel
          </Button>
        </Box>
      </Box>
      <Typography
        sx={{ my: 3 }}
        variant="h6"
      >
        Details
      </Typography>
      <TextField
        disabled
        fullWidth
        label="ID"
        margin="normal"
        name="id"
        value={order.id}
      />
      <TextField
        disabled
        fullWidth
        label="Number"
        margin="normal"
        name="number"
        value={order.number}
      />
      <TextField
        disabled
        fullWidth
        label="Customer name"
        margin="normal"
        name="customer_name"
        value={order.customer.name}
      />
      <TextField
        disabled
        fullWidth
        label="Date"
        margin="normal"
        name="date"
        value={format(order.createdAt, 'dd/MM/yyyy HH:mm')}
      />
      <TextField
        fullWidth
        label="Address"
        margin="normal"
        name="address"
        value={order.customer.address1}
      />
      <TextField
        fullWidth
        label="Country"
        margin="normal"
        name="country"
        value={order.customer.country}
      />
      <TextField
        fullWidth
        label="State/Region"
        margin="normal"
        name="state_region"
        value={order.customer.city}
      />
      <TextField
        fullWidth
        label="Total Amount"
        margin="normal"
        name="amount"
        value={order.totalAmount}
      />
      <TextField
        fullWidth
        label="Status"
        margin="normal"
        name="status"
        select
        SelectProps={{ native: true }}
        value={order.status}
      >
        {statusOptions.map((statusOption) => (
          <option
            key={statusOption.value}
            value={statusOption.value}
          >
            {statusOption.label}
          </option>
        ))}
      </TextField>
      <Button
        color="error"
        sx={{ mt: 3 }}
      >
        Delete order
      </Button>
    </>
  );
};

const OrderDrawerDesktop = styled(Drawer)({
  width: 500,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    position: 'relative',
    width: 500
  }
});

const OrderDrawerMobile = styled(Drawer)({
  flexShrink: 0,
  maxWidth: '100%',
  height: 'calc(100% - 64px)',
  width: 500,
  '& .MuiDrawer-paper': {
    height: 'calc(100% - 64px)',
    maxWidth: '100%',
    top: 64,
    width: 500
  }
});

export const OrderDrawer = (props) => {
  const { containerRef, onClose, open, order, ...other } = props;
  const [isEditing, setIsEditing] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  // The reason for doing this, is that the persistent drawer has to be rendered, but not it's
  // content if an order is not passed.
  const content = order
    ? (
      <>
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            display: 'flex',
            justifyContent: 'space-between',
            px: 3,
            py: 2
          }}
        >
          <Typography
            color="inherit"
            variant="h6"
          >
            {order.number}
          </Typography>
          <IconButton
            color="inherit"
            onClick={onClose}
          >
            <XIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box
          sx={{
            px: 3,
            py: 4
          }}
        >
          {!isEditing
            ? (
              <OrderPreview
                onApprove={onClose}
                onEdit={handleEdit}
                onReject={onClose}
                order={order}
                lgUp={lgUp}
              />
            )
            : (
              <OrderForm
                onCancel={handleCancel}
                onSave={handleCancel}
                order={order}
              />
            )}
        </Box>
      </>
    )
    : null;

  if (lgUp) {
    return (
      <OrderDrawerDesktop
        anchor="right"
        open={open}
        SlideProps={{ container: containerRef?.current }}
        variant="persistent"
        {...other}>
        {content}
      </OrderDrawerDesktop>
    );
  }

  return (
    <OrderDrawerMobile
      anchor="right"
      ModalProps={{ container: containerRef?.current }}
      onClose={onClose}
      open={open}
      SlideProps={{ container: containerRef?.current }}
      variant="temporary"
      {...other}>
      {content}
    </OrderDrawerMobile>
  );
};

OrderDrawer.propTypes = {
  containerRef: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
    order: PropTypes.object
};
