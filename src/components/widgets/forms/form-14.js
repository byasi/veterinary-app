import numeral from 'numeral';
import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';

const products = [
  {
    id: '97375399bf10f57d0f0f7fd9',
    image: '/static/mock-images/products/product_1.png',
    name: 'Healthcare Erbology',
    price: 23.99,
    quantity: 85
  },
  {
    id: 'ece4069546ff025047b97735',
    image: '/static/mock-images/products/product_2.png',
    name: 'Makeup Lancome Rouge',
    price: 95.00,
    quantity: 0
  }
];

export const Form14 = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      minHeight: '100%',
      p: 3
    }}
  >
    <form onSubmit={(event) => event.preventDefault()}>
      <Card
        sx={{
          backgroundColor: 'background.paper',
          p: 3
        }}
        variant="outlined"
      >
        <Typography variant="h6">
          Order Summary
        </Typography>
        <List sx={{ mt: 2 }}>
          {products.map((product) => (
            <ListItem
              disableGutters
              key={product.id}
            >
              <ListItemAvatar sx={{ pr: 2 }}>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    height: 100,
                    justifyContent: 'center',
                    overflow: 'hidden',
                    width: 100,
                    '& img': {
                      width: '100%',
                      height: 'auto'
                    }
                  }}
                >
                  <img
                    alt={product.name}
                    src={product.image}
                  />
                </Box>
              </ListItemAvatar>
              <ListItemText
                primary={(
                  <Typography
                    sx={{ fontWeight: 'fontWeightBold' }}
                    variant="subtitle2"
                  >
                    {product.name}
                  </Typography>
                )}
                secondary={(
                  <Typography
                    color="textSecondary"
                    sx={{ mt: 1 }}
                    variant="body1"
                  >
                    $
                    {numeral(product.price).format('00.00')}
                  </Typography>
                )}
              />
              <ListItemSecondaryAction>
                <FormControl
                  size="small"
                  variant="outlined"
                >
                  <Select value={product.quantity}>
                    <MenuItem value={1}>
                      1
                    </MenuItem>
                    <MenuItem value={2}>
                      2
                    </MenuItem>
                    <MenuItem value={3}>
                      3
                    </MenuItem>
                  </Select>
                </FormControl>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <TextField
          fullWidth
          placeholder="Discount Code"
          size="small"
          sx={{ mt: 2 }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mt: 2
          }}
        >
          <Button type="button">
            Apply Coupon
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2
          }}
        >
          <Typography variant="subtitle2">
            Subtotal
          </Typography>
          <Typography variant="subtitle2">
            $
            {numeral(20).format('00.00')}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2
          }}
        >
          <Typography variant="subtitle2">
            Shipping Tax
          </Typography>
          <Typography variant="subtitle2">
            $
            {numeral(10).format('00.00')}
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="subtitle2">
            Total
          </Typography>
          <Typography variant="subtitle2">
            $
            {numeral(12).format('00.00')}
          </Typography>
        </Box>
      </Card>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mt: 3
        }}
      >
        <Button
          color="primary"
          type="submit"
          variant="contained"
        >
          Complete order
        </Button>
      </Box>
    </form>
  </Box>
);
