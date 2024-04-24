import numeral from 'numeral';
import { format, subMinutes, subSeconds } from 'date-fns';
import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { ArrowRight as ArrowRightIcon } from '../../../icons/arrow-right';
import { DotsHorizontal as DotsHorizontalIcon } from '../../../icons/dots-horizontal';
import { PencilAlt as PencilAltIcon } from '../../../icons/pencil-alt';
import { Scrollbar } from '../../scrollbar';
import { SeverityPill } from '../../severity-pill';

const now = new Date();

const orders = [
  {
    id: '5ecb8a6d9f53bfae09e16115',
    createdAt: subMinutes(subSeconds(now, 23), 32).getTime(),
    currency: '$',
    customer: {
      email: 'carson.darrin@devias.io',
      name: 'Carson Darrin'
    },
    number: 'DEV-102',
    paymentMethod: 'CreditCard',
    status: 'pending',
    totalAmount: 500.00
  },
  {
    id: '5ecb8a738aa6f3e577c2b3ec',
    createdAt: subMinutes(subSeconds(now, 51), 36).getTime(),
    currency: '$',
    customer: {
      email: 'fran.perez@devias.io',
      name: 'Fran Perez'
    },
    number: 'DEV-101',
    paymentMethod: 'PayPal',
    status: 'completed',
    totalAmount: 500.00
  },
  {
    id: '5ecb8a795e53f134013eba3b',
    createdAt: subMinutes(subSeconds(now, 55), 38).getTime(),
    currency: '$',
    customer: {
      email: 'jie.yan.song@devias.io',
      name: 'Jie Yan Song'
    },
    number: 'DEV-100',
    paymentMethod: 'CreditCard',
    status: 'pending',
    totalAmount: 500.00
  },
  {
    id: '5ecb8a7f738cc572a9ce0277',
    createdAt: subMinutes(subSeconds(now, 3), 40).getTime(),
    currency: '$',
    customer: {
      email: 'clarke.gillebert@devias.io',
      name: 'Clarke Gillebert'
    },
    number: 'DEV-99',
    paymentMethod: 'PayPal',
    status: 'completed',
    totalAmount: 500.00
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    createdAt: subMinutes(subSeconds(now, 32), 45).getTime(),
    currency: '$',
    customer: {
      email: 'miron.vitold@devias.io',
      name: 'Miron Vitold'
    },
    number: 'DEV-98',
    paymentMethod: 'PayPal',
    status: 'completed',
    totalAmount: 500.00
  }
];

const getStatusLabel = (paymentStatus) => {
  const map = {
    canceled: {
      color: 'error',
      text: 'Canceled'
    },
    completed: {
      color: 'success',
      text: 'Completed'
    },
    pending: {
      color: 'warning',
      text: 'Pending'
    },
    rejected: {
      color: 'error',
      text: 'Rejected'
    }
  };

  const { text, color } = map[paymentStatus];

  return (
    <SeverityPill color={color}>
      {text}
    </SeverityPill>
  );
};

export const Table4 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      p: 3
    }}
  >
    <Card>
      <CardHeader
        action={(
          <IconButton>
            <DotsHorizontalIcon fontSize="small" />
          </IconButton>
        )}
        title="Orders"
      />
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 1150 }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                Number
              </TableCell>
              <TableCell>
                Customer
              </TableCell>
              <TableCell>
                Method
              </TableCell>
              <TableCell>
                Total
              </TableCell>
              <TableCell>
                Status
              </TableCell>
              <TableCell align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    {order.number}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    {format(order.createdAt, 'dd MMM yyyy | HH:mm')}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    {order.customer.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    {order.customer.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  {order.paymentMethod}
                </TableCell>
                <TableCell>
                  {numeral(order.totalAmount)
                    .format(`${order.currency}0,0.00`)}
                </TableCell>
                <TableCell>
                  {getStatusLabel(order.status)}
                </TableCell>
                <TableCell align="right">
                  <IconButton>
                    <PencilAltIcon fontSize="small" />
                  </IconButton>
                  <IconButton>
                    <ArrowRightIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination
        component="div"
        count={orders.length}
        onPageChange={() => {
        }}
        onRowsPerPageChange={() => {
        }}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  </Box>
);
