import { Box, Button, TextField } from '@mui/material';

const categoryOptions = [
  {
    value: 'shirts',
    label: 'Shirts'
  },
  {
    label: 'Phones',
    value: 'phones'
  },
  {
    label: 'Cars',
    value: 'cars'
  }
];

export const Form12 = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      minHeight: '100%',
      p: 3
    }}
  >
    <Box
      sx={{
        pb: 3,
        pt: 2,
        px: 2
      }}
    >
      <form onSubmit={(event) => event.preventDefault()}>
        <TextField
          fullWidth
          label="Category"
          name="category"
          select
          SelectProps={{ native: true }}
        >
          {categoryOptions.map((category) => (
            <option
              key={category.value}
              value={category.value}
            >
              {category.label}
            </option>
          ))}
        </TextField>
        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Product Code"
            name="productCode"
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Product Sku"
            name="productSku"
          />
        </Box>
        <Button
          sx={{ mt: 2 }}
          type="submit"
          variant="contained"
        >
          Create Product
        </Button>
      </form>
    </Box>
  </Box>
);
