import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { Logo } from '../../logo';
import { Scrollbar } from '../../scrollbar';

export const InvoicePreview = (props) => {
  const { invoice, ...other } = props;

  return (
    <Paper {...other}>
      <Scrollbar>
        <Box
          sx={{
            minWidth: 800,
            p: 6
          }}
        >
          <Grid
            container
            justifyContent="space-between"
          >
            <Grid item>
              <Logo />
              <Typography variant="subtitle2">
                www.devias.io
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align="right"
                variant="h4"
              >
                {invoice.status.toUpperCase()}
              </Typography>
              <Typography
                align="right"
                variant="subtitle2"
              >
                Invoice #
                {invoice.id}
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ my: 4 }}>
            <Grid
              container
              justifyContent="space-between"
            >
              <Grid item>
                <Typography variant="body2">
                  Street King William, 123
                  <br />
                  Level 2, C, 442456
                  <br />
                  San Francisco, CA, USA
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  Company No. 4675933
                  <br />
                  EU VAT No. 949 67545 45
                  <br />
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align="right"
                  variant="body2"
                >
                  accounts@devias.io
                  <br />
                  (+40) 652 3456 23
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ my: 4 }}>
            <Grid
              container
              justifyContent="space-between"
            >
              <Grid item>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                >
                  Due date
                </Typography>
                <Typography variant="body2">
                  {format(invoice.dueDate, 'dd MMM yyyy')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                >
                  Date of issue
                </Typography>
                <Typography variant="body2">
                  {format(invoice.issueDate, 'dd MMM yyyy')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                >
                  Number
                </Typography>
                <Typography variant="body2">
                  {invoice.number}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ my: 4 }}>
            <Typography
              gutterBottom
              variant="subtitle2"
            >
              Billed to
            </Typography>
            <Typography variant="body2">
              {invoice.customer.name}
              <br />
              {invoice.customer.company}
              <br />
              {invoice.customer.taxId}
              <br />
              {invoice.customer.address}
            </Typography>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Description
                </TableCell>
                <TableCell />
                <TableCell align="right">
                  Unit Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoice.items.map((items) => (
                <TableRow key={items.id}>
                  <TableCell>
                    {items.description}
                  </TableCell>
                  <TableCell />
                  <TableCell align="right">
                    {numeral(items.unitAmount)
                      .format(`${items.currency}0,0.00`)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                  >
                    Subtotal
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {numeral(invoice.subtotalAmount)
                    .format(`${invoice.currency}0,0.00`)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                  >
                    Taxes
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {numeral(invoice.taxAmount)
                    .format(`${invoice.currency}0,0.00`)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                  >
                    Total
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {numeral(invoice.totalAmount)
                    .format(`${invoice.currency}0,0.00`)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box sx={{ mt: 2 }}>
            <Typography
              gutterBottom
              variant="h6"
            >
              Notes
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Please make sure you have the right bank registration number
              as I
              had issues before and make sure you guys cover transfer
              expenses.
            </Typography>
          </Box>
        </Box>
      </Scrollbar>
    </Paper>
  );
};

InvoicePreview.propTypes = {
    invoice: PropTypes.object.isRequired
};
