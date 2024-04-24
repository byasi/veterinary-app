import propTypes from 'prop-types';
import { Box, Button, Divider, Typography } from '@mui/material';
import { Check as CheckIcon } from '../../icons/check';

export const PricingPlan = (props) => {
  const { cta, currency, description, features, image, name, popular, price, sx, ...other } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ...sx
      }}
      {...other}>
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            height: 52,
            width: 52,
            '& img': {
              height: 'auto',
              width: '100%'
            }
          }}
        >
          <img
            alt=""
            src={image}
          />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="h4">
            {currency}
            {price}
          </Typography>
          <Typography
            color="textSecondary"
            sx={{
              alignSelf: 'flex-end',
              ml: 1
            }}
            variant="subtitle2"
          >
            /mo
          </Typography>
        </Box>
        <Typography
          sx={{ mt: 2 }}
          variant="h6"
        >
          {name}
        </Typography>
        <Typography
          color="textSecondary"
          sx={{ mt: 2 }}
          variant="body2"
        >
          {description}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          p: 3
        }}
      >
        {features.map((feature) => (
          <Box
            key={feature}
            sx={{
              alignItems: 'center',
              display: 'flex',
              '& + &': {
                mt: 2
              }
            }}
          >
            <CheckIcon
              fontSize="small"
              sx={{ color: 'text.primary' }}
            />
            <Typography
              sx={{
                fontWeight: 500,
                ml: 2
              }}
              variant="body2"
            >
              {feature}
            </Typography>
          </Box>
        ))}
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 6
          }}
        >
          <Button
            fullWidth
            variant={popular ? 'contained' : 'outlined'}
          >
            {cta}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

PricingPlan.propTypes = {
  cta: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  features: propTypes.array.isRequired,
  image: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  popular: propTypes.bool,
  price: propTypes.string.isRequired,
  sx: propTypes.object
};
