import { useState, useEffect, useCallback } from 'react';
import NextLink from 'next/link';
import { format } from 'date-fns';
import {
  Card,
  CardHeader,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';
import { customerApi } from '../../../__fake-api__/customer-api';
import { useMounted } from '../../../hooks/use-mounted';
import { ArrowRight as ArrowRightIcon } from '../../../icons/arrow-right';
import { MoreMenu } from '../../more-menu';
import { Scrollbar } from '../../scrollbar';
import { SeverityPill } from '../../severity-pill';

export const CustomerInvoices = (props) => {
  const isMounted = useMounted();
  const [invoices, setInvoices] = useState([]);

  const getInvoices = useCallback(async () => {
    try {
      const data = await customerApi.getCustomerInvoices();

      if (isMounted()) {
        setInvoices(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  return (
    <Card {...props}>
      <CardHeader
        action={<MoreMenu />}
        title="Recent Invoices"
      />
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                Date
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
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>
                  #
                  {invoice.id}
                </TableCell>
                <TableCell>
                  {format(invoice.issueDate, 'MMM dd,yyyy')}
                </TableCell>
                <TableCell>
                  {invoice.amount}
                </TableCell>
                <TableCell>
                  <SeverityPill color={invoice.status === 'paid' ? 'success' : 'error'}>
                    {invoice.status}
                  </SeverityPill>
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
  );
};
