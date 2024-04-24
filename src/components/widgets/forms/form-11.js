import { Box, Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';

export const Form11 = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      minHeight: '100%',
      p: 3
    }}
  >
    <form onSubmit={(event) => event.preventDefault()}>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Price"
            name="price"
            type="number"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Sale price"
            name="salePrice"
            type="number"
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <FormControlLabel
          control={(
            <Checkbox name="isTaxable" />
          )}
          label="Product is taxable"
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <FormControlLabel
          control={<Checkbox name="includesTaxes" />}
          label="Price includes taxes"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mt: 3
        }}
      >
        <Button
          type="submit"
          variant="contained"
        >
          Update
        </Button>
      </Box>
    </form>
  </Box>
);
