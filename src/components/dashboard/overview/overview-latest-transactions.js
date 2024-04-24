import { format, subDays } from 'date-fns';
import numeral from 'numeral';
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from '../../scrollbar';
import { SeverityPill } from '../../severity-pill';

const transactions = [
  {
    id: 'd46800328cd510a668253b45',
    amount: 25000,
    currency: 'usd',
    date: new Date(),
    sender: 'Devias',
    type: 'receive',
    status: 'on hold'
  },
  {
    id: 'b4b19b21656e44b487441c50',
    amount: 6843,
    currency: 'usd',
    date: subDays(new Date(), 1),
    sender: 'Zimbru',
    type: 'send',
    status: 'confirmed'
  },
  {
    id: '56c09ad91f6d44cb313397db',
    amount: 91823,
    currency: 'usd',
    date: subDays(new Date(), 1),
    sender: 'Vertical Jelly',
    type: 'send',
    status: 'failed'
  },
  {
    id: 'aaeb96c5a131a55d9623f44d',
    amount: 49550,
    currency: 'usd',
    date: subDays(new Date(), 3),
    sender: 'Devias',
    type: 'receive',
    status: 'confirmed'
  }
];

export const OverviewLatestTransactions = (props) => (
  <Card {...props}>
    <CardHeader title="Latest Transactions" />
    <Scrollbar>
      <Table sx={{ minWidth: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              Transaction
            </TableCell>
            <TableCell />
            <TableCell>
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow
              key={transaction.id}
              sx={{
                '&:last-child td': {
                  border: 0
                }
              }}
            >
              <TableCell width={100}>
                <Box
                  sx={{
                    p: 1,
                    backgroundColor: (theme) => theme.palette.mode === 'dark'
                      ? 'neutral.800'
                      : 'neutral.200',
                    borderRadius: 2,
                    maxWidth: 'fit-content'
                  }}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="subtitle2"
                  >
                    {format(transaction.date, 'LLL').toUpperCase()}
                  </Typography>
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="h6"
                  >
                    {format(transaction.date, 'd')}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <div>
                  <Typography variant="subtitle2">
                    {transaction.sender}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    {transaction.type === 'receive'
                      ? 'Payment received'
                      : 'Payment sent'}
                  </Typography>
                </div>
              </TableCell>
              <TableCell>
                <SeverityPill
                  color={(transaction.status === 'confirmed' && 'success')
                  || (transaction.status === 'failed' && 'error')
                  || 'warning'}
                >
                  {transaction.status}
                </SeverityPill>
              </TableCell>
              <TableCell width={180}>
                <Typography
                  color={transaction.type === 'receive'
                    ? 'success.main'
                    : 'error.main'}
                  variant="subtitle2"
                >
                  {transaction.type === 'receive' ? '+' : '-'}
                  {' '}
                  {numeral(transaction.amount).format('$0,0.00')}
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  {transaction.currency.toUpperCase()}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Scrollbar>
  </Card>
);
