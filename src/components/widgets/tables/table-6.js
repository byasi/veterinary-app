import { format, subDays, subHours } from 'date-fns';
import numeral from 'numeral';
import {
  Box,
  Card,
  Checkbox,
  IconButton,
  InputAdornment,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import { ArrowRight as ArrowRightIcon } from '../../../icons/arrow-right';
import { PencilAlt as PencilAltIcon } from '../../../icons/pencil-alt';
import { Search as SearchIcon } from '../../../icons/search';
import { Scrollbar } from '../../scrollbar';
import { SeverityPill } from '../../severity-pill';

const now = new Date();

const invoices = [
  {
    id: '5ecb868d0f437390ef3ac62c',
    currency: '$',
    customer: {
      email: 'contact@anahenisky.io',
      name: 'Ana Henisky'
    },
    issueDate: subHours(now, 1).getTime(),
    status: 'paid',
    totalAmount: 55.50
  },
  {
    id: '5ecb868ada8deedee0638502',
    currency: '$',
    customer: {
      email: 'sales@matt-jason.com',
      name: 'Matt Jason'
    },
    issueDate: subDays(subHours(now, 5), 2).getTime(),
    status: 'pending',
    totalAmount: 19.76
  },
  {
    id: '5ecb868700aba84d0f1c0e48',
    currency: '$',
    customer: {
      email: 'support@terrythomas.io',
      name: 'Terry Thomas'
    },
    issueDate: subDays(subHours(now, 4), 6).getTime(),
    status: 'canceled',
    totalAmount: 781.50
  },
  {
    id: '5ecb8682038e1ddf4e868764',
    currency: '$',
    customer: {
      email: 'contact@triv-shopper.co.uk',
      name: 'Triv Shopper'
    },
    issueDate: subDays(subHours(now, 2), 15).getTime(),
    status: 'paid',
    totalAmount: 96.64
  }
];

const statusOptions = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Paid',
    value: 'paid'
  },
  {
    label: 'Pending',
    value: 'pending'
  },
  {
    label: 'Canceled',
    value: 'canceled'
  }
];

const sortOptions = [
  {
    label: 'Newest first',
    value: 'createdAt|desc'
  },
  {
    label: 'Oldest first',
    value: 'createdAt|asc'
  }
];

const getStatusLabel = (invoiceStatus) => {
  const map = {
    canceled: {
      color: 'error',
      text: 'Canceled'
    },
    paid: {
      color: 'success',
      text: 'Paid'
    },
    pending: {
      color: 'warning',
      text: 'Pending'
    }
  };

  const { text, color } = map[invoiceStatus];

  return (
    <SeverityPill color={color}>
      {text}
    </SeverityPill>
  );
};

export const Table6 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      p: 3
    }}
  >
    <Card>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          m: -1,
          p: 2
        }}
      >
        <Box
          sx={{
            m: 1,
            maxWidth: '100%',
            width: 500
          }}
        >
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              )
            }}
            placeholder="Search invoices by customer"
          />
        </Box>
        <Box
          sx={{
            m: 1,
            maxWidth: '100%',
            width: 240
          }}
        >
          <TextField
            fullWidth
            label="Sort By"
            name="sort"
            select
            SelectProps={{ native: true }}
          >
            {sortOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
        <Box
          sx={{
            m: 1,
            maxWidth: '100%',
            width: 240
          }}
        >
          <TextField
            fullWidth
            label="Status"
            name="status"
            select
            SelectProps={{ native: true }}
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
        </Box>
      </Box>
      <Scrollbar>
        <Table sx={{ minWidth: 1200 }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                Customer
              </TableCell>
              <TableCell>
                Status
              </TableCell>
              <TableCell>
                Amount
              </TableCell>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                Date
              </TableCell>
              <TableCell align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow
                hover
                key={invoice.id}
              >
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Link
                    color="textPrimary"
                    underline="none"
                    variant="subtitle2"
                  >
                    {invoice.customer.name}
                  </Link>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    {invoice.customer.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  {getStatusLabel(invoice.status)}
                </TableCell>
                <TableCell>
                  {numeral(invoice.totalAmount)
                    .format(`${invoice.currency}0,0.00`)}
                </TableCell>
                <TableCell>
                  {invoice.id}
                </TableCell>
                <TableCell>
                  {format(invoice.issueDate, 'dd/MM/yyyy')}
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
        count={invoices.length}
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
