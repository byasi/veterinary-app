import { Fragment } from 'react';
import NextLink from 'next/link';
import { format } from 'date-fns';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { ArrowRight as ArrowRightIcon } from '../../../icons/arrow-right';
import { getInitials } from '../../../utils/get-initials';
import { Scrollbar } from '../../scrollbar';

const groupInvoices = (rawInvoices) => rawInvoices.reduce((acc, invoice) => {
  const { status } = invoice;

  return {
    ...acc,
    [status]: [...acc[status], invoice]
  };
}, {
  paid: [],
  pending: [],
  canceled: []
});

const InvoiceRow = (props) => {
  const { invoice } = props;

  return (
    <TableRow
      key={invoice.id}
      sx={{
        boxShadow: 1,
        transition: (theme) => theme.transitions.create('box-shadow', {
          easing: theme.transitions.easing.easeOut
        }),
        '&:hover': {
          boxShadow: 8
        },
        '& > td': {
          backgroundColor: 'background.paper',
          borderBottom: 0
        }
      }}
    >
      <TableCell width="25%">
        <NextLink
          href="/dashboard/invoices/1"
          passHref
        >
          <Box
            component="a"
            sx={{
              alignItems: 'center',
              display: 'inline-flex',
              textDecoration: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            <Avatar
              sx={{
                height: 42,
                width: 42
              }}
            >
              {getInitials(invoice.customer.name)}
            </Avatar>
            <Box sx={{ ml: 2 }}>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                {invoice.number}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {invoice.customer.name}
              </Typography>
            </Box>
          </Box>
        </NextLink>
      </TableCell>
      <TableCell>
        <Typography variant="body2">
          {invoice.currency}
          {numeral(invoice.totalAmount).format('0,0.00')}
        </Typography>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography variant="subtitle2">
            Issued
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {format(invoice.issueDate, 'dd/MM/yyyy')}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography variant="subtitle2">
            Due
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {format(invoice.dueDate, 'dd/MM/yyyy')}
          </Typography>
        </Box>
      </TableCell>
      <TableCell align="right">
        <NextLink
          href="/dashboard/invoices/1"
          passHref
        >
          <IconButton component="a">
            <ArrowRightIcon fontSize="small" />
          </IconButton>
        </NextLink>
      </TableCell>
    </TableRow>
  );
};

export const InvoiceListTable = (props) => {
  const {
    group,
    invoices,
    invoicesCount,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    ...other
  } = props;

  const groupedInvoices = group && groupInvoices(invoices);

  return (
    <div {...other}>
      <Scrollbar>
        <Table
          sx={{
            borderCollapse: 'separate',
            borderSpacing: (theme) => `0 ${theme.spacing(3)}`,
            minWidth: 600,
            marginTop: (theme) => `-${theme.spacing(3)}`,
            p: '1px'
          }}
        >
          {group && (
            <TableBody>
              {Object.keys(groupedInvoices).map((status) => (
                <Fragment key={status}>
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      sx={{ px: 0 }}
                    >
                      <Typography
                        color="textSecondary"
                        variant="h6"
                      >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                        {' '}
                        ({groupedInvoices[status].length})
                      </Typography>
                    </TableCell>
                  </TableRow>
                  {groupedInvoices[status].map((invoice) => (
                    <InvoiceRow
                      invoice={invoice}
                      key={invoice.id}
                    />
                  ))}
                </Fragment>
              ))}
            </TableBody>
          )}
          {!group && (
            <TableBody>
              {invoices.map((invoice) => (
                <InvoiceRow
                  invoice={invoice}
                  key={invoice.id}
                />
              ))}
            </TableBody>
          )}
        </Table>
      </Scrollbar>
      <TablePagination
        component="div"
        count={invoicesCount}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </div>
  );
};

InvoiceListTable.propTypes = {
  group: PropTypes.bool,
  invoices: PropTypes.array.isRequired,
  invoicesCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};
