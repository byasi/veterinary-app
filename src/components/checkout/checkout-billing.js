import PropTypes from 'prop-types';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';

const paymentMethods = [
  {
    label: 'Visa Credit/Debit Card',
    value: 'visa'
  },
  {
    label: 'PayPal',
    value: 'paypal'
  }
];

export const CheckoutBilling = (props) => {
  const { billing, onChange, ...other } = props;

  return (
    <div {...other}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex'
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 20,
            display: 'flex',
            height: 40,
            justifyContent: 'center',
            width: 40
          }}
        >
          <Typography
            sx={{ fontWeight: 'fontWeightBold' }}
            variant="h6"
          >
            1
          </Typography>
        </Box>
        <Typography
          sx={{ ml: 2 }}
          variant="h6"
        >
          Billing Address
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            sm={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              onChange={onChange}
              value={billing.firstName}
            />
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              onChange={onChange}
              value={billing.lastName}
            />
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Street Address"
              name="address"
              onChange={onChange}
              value={billing.address}
            />
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Street Line 2 (optional)"
              name="optionalAddress"
              onChange={onChange}
              value={billing.optionalAddress}
            />
          </Grid>
          <Grid
            item
            sm={3}
            xs={12}
          >
            <TextField
              fullWidth
              label="State"
              name="state"
              onChange={onChange}
              value={billing.state}
            />
          </Grid>
          <Grid
            item
            sm={3}
            xs={12}
          >
            <TextField
              fullWidth
              label="Zip"
              name="zip"
              onChange={onChange}
              value={billing.zip}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          mt: 6
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 20,
            display: 'flex',
            height: 40,
            justifyContent: 'center',
            width: 40
          }}
        >
          <Typography
            sx={{ fontWeight: 'fontWeightBold' }}
            variant="h6"
          >
            2
          </Typography>
        </Box>
        <Typography
          sx={{ ml: 2 }}
          variant="h6"
        >
          Shipping Address
        </Typography>
      </Box>
      <Box
        sx={{
          color: 'text.primary',
          mt: 3
        }}
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Same as billing address"
        />
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          mt: 6
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 20,
            display: 'flex',
            height: 40,
            justifyContent: 'center',
            width: 40
          }}
        >
          <Typography
            sx={{ fontWeight: 'fontWeightBold' }}
            variant="h6"
          >
            3
          </Typography>
        </Box>
        <Typography
          sx={{ ml: 2 }}
          variant="h6"
        >
          Payment Method
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <RadioGroup
          name="paymentMethod"
          onChange={onChange}
          sx={{ flexDirection: 'row' }}
          value={billing.paymentMethod}
        >
          {paymentMethods.map((paymentMethod) => (
            <FormControlLabel
              control={<Radio />}
              key={paymentMethod.value}
              label={(
                <Typography variant="body1">
                  {paymentMethod.label}
                </Typography>
              )}
              value={paymentMethod.value}
            />
          ))}
        </RadioGroup>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            sm={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Name on Card"
              name="cardOwner"
              onChange={onChange}
              value={billing.cardOwner}
            />
          </Grid>
          <Grid
            item
            sm={6}
          />
          <Grid
            item
            sm={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Card Number"
              name="cardNumber"
              onChange={onChange}
              value={billing.cardNumber}
            />
          </Grid>
          <Grid
            item
            sm={6}
          />
          <Grid
            item
            sm={3}
            xs={12}
          >
            <TextField
              fullWidth
              label="Expire Date"
              name="cardExpirationDate"
              onChange={onChange}
              placeholder="MM/YY"
              value={billing.cardExpirationDate}
            />
          </Grid>
          <Grid
            item
            sm={3}
            xs={12}
          >
            <TextField
              fullWidth
              label="Security Code"
              name="cardSecurityCode"
              onChange={onChange}
              value={billing.cardSecurityCode}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

CheckoutBilling.propTypes = {
  billing: PropTypes.object,
  onChange: PropTypes.func
};
