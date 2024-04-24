import { format } from 'date-fns';
import {
  Box,
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
import { ArrowRight as ArrowRightIcon } from '../../../icons/arrow-right';
import { DotsHorizontal as DotsHorizontalIcon } from '../../../icons/dots-horizontal';
import { Scrollbar } from '../../scrollbar';
import { SeverityPill } from '../../severity-pill';

const now = new Date();

const invoices = [
  {
    id: '5ece2cef3e562cbd61996259',
    currency: '$',
    description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
    issueDate: now.getTime(),
    paymentMethod: 'Credit Card',
    status: 'paid',
    value: 5.25
  },
  {
    id: '5ece2cf461b9484866f2968c',
    currency: '$',
    description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
    issueDate: now.getTime(),
    paymentMethod: 'Credit Card',
    status: 'paid',
    value: 5.25
  }
];

export const Table9 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
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
        title="Invoices"
      />
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 1150 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                Date
              </TableCell>
              <TableCell>
                Description
              </TableCell>
              <TableCell>
                Payment Method
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
                  {format(invoice.issueDate, 'dd/MM/yyyy | HH:mm')}
                </TableCell>
                <TableCell>
                  {invoice.description}
                </TableCell>
                <TableCell>
                  {invoice.paymentMethod}
                </TableCell>
                <TableCell>
                  {invoice.currency}
                  {invoice.value}
                </TableCell>
                <TableCell>
                  <SeverityPill color="primary">
                    {invoice.status}
                  </SeverityPill>
                </TableCell>
                <TableCell align="right">
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
