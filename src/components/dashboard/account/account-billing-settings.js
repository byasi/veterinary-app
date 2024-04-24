import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Link,
  Grid,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableBody
} from '@mui/material';
import { Logo } from '../../logo';
import { Pencil as PencilIcon } from '../../../icons/pencil';
import { PropertyList } from '../../property-list';
import { PropertyListItem } from '../../property-list-item';

const plans = [
  {
    image: <Logo />,
    name: 'Startup',
    price: '0',
    current: true
  },
  {
    image: <Logo />,
    name: 'Standard',
    price: '4.99',
    current: false
  },
  {
    image: <Logo />,
    name: 'Business',
    price: '29.99',
    current: false
  }
];

export const AccountBillingSettings = (props) => {
  const [selected, setSelected] = useState('Standard');

  return (
    <div {...props}>
      <Card>
        <CardContent>
          <div>
            <Typography variant="h6">
              Change plan
            </Typography>
            <Typography
              color="textSecondary"
              sx={{ mt: 1 }}
              variant="body2"
            >
              You can upgrade and downgrade whenever you want
            </Typography>
          </div>
          <Box sx={{ mt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {plans.map((plan) => (
                <Grid
                  item
                  key={plan.name}
                  sm={4}
                  xs={12}
                >
                  <Card
                    elevation={0}
                    onClick={() => setSelected(plan.name)}
                    variant="outlined"
                    sx={{
                      cursor: 'pointer',
                      ...(selected === plan.name && {
                        borderColor: 'primary.main',
                        borderWidth: 2,
                        m: '-1px'
                      })
                    }}
                  >
                    <CardContent>
                      <Logo />
                      <Box
                        sx={{
                          display: 'flex',
                          mb: 1,
                          mt: 1
                        }}
                      >
                        <Typography variant="h5">
                          $
                          {plan.price}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          sx={{
                            mt: 'auto',
                            ml: '4px'
                          }}
                          variant="body2"
                        >
                          /mo
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Typography variant="overline">
                          {plan.name}
                        </Typography>
                        {plan.current && (
                          <Typography
                            color="secondary.main"
                            variant="caption"
                          >
                            Using now
                          </Typography>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Divider
            sx={{
              mb: 3,
              mt: 3
            }}
          />
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Typography variant="h6">
              Billing details
            </Typography>
            <Button
              startIcon={(
                <PencilIcon fontSize="small" />
              )}
            >
              Edit
            </Button>
          </Box>
          <Box
            sx={{
              border: 1,
              borderColor: 'divider',
              borderRadius: 1,
              mt: 3
            }}
          >
            <PropertyList>
              <PropertyListItem
                align="horizontal"
                divider
                label="Billing name"
                value="John Doe"
              />
              <PropertyListItem
                align="horizontal"
                divider
                label="Card number"
                value="**** 1111"
              />
              <PropertyListItem
                align="horizontal"
                divider
                label="Country"
                value="Germany"
              />
              <PropertyListItem
                align="horizontal"
                label="Zip / Postal code"
                value="667123"
              />
            </PropertyList>
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              mb: 4,
              mt: 3
            }}
          >
            <Typography
              color="textSecondary"
              variant="body2"
            >
              We cannot refund once you purchased a subscription, but you can always
            </Typography>
            <Link
              href="#"
              underline="none"
            >
              <Typography
                sx={{ ml: '4px' }}
                variant="body2"
              >
                Cancel
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Button variant="contained">
              Upgrade Plan
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <div>
            <Typography variant="h6">
              Invoice history
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mt: 1 }}
            >
              You can view and download all your previous invoices here. If you’ve just made a
              payment, it may take a few hours for it to appear in the table below.
            </Typography>
          </div>
        </CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Total (incl. tax)</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>2 Jun 2021</TableCell>
              <TableCell>$4.99</TableCell>
              <TableCell align="right">
                <Link
                  underline="always"
                  href="#"
                >
                  View Invoice
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2 May 2021</TableCell>
              <TableCell>$4.99</TableCell>
              <TableCell align="right">
                <Link
                  underline="always"
                  href="#"
                >
                  View Invoice
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2 April 2021</TableCell>
              <TableCell>$4.99</TableCell>
              <TableCell align="right">
                <Link
                  underline="always"
                  href="#"
                >
                  View Invoice
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
