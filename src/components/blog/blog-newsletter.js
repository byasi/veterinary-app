import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const BlogNewsletter = () => {
  const theme = useTheme();

  return (
    <Card
      elevation={16}
      sx={{
        py: 10,
        px: 8
      }}
    >
      <Grid
        alignItems="center"
        container
        justifyContent="space-between"
        spacing={3}
        wrap="nowrap"
      >
        <Grid
          item
          md={8}
          xs={12}
        >
          <Box
            sx={{
              alignItems: 'flex-start',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography variant="h4">
              Join the developer list
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{
                mb: 3,
                mt: 1
              }}
            >
              Subscribe to our newsletter to make sure you don&apos;t miss anything.
            </Typography>
            <TextField
              fullWidth
              label="Email address"
              name="email"
              sx={{ flexGrow: 1 }}
              type="email"
            />
            <Button
              fullWidth
              size="large"
              sx={{ mt: 2 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            display: {
              md: 'block',
              xs: 'none'
            }
          }}
        >
          <Box
            sx={{
              position: 'relative',
              pt: 'calc(421 / 472 * 100%)',
              '& img': {
                height: 'auto',
                position: 'absolute',
                top: 0,
                width: '100%'
              }
            }}
          >
            <img
              alt=""
              src={`/static/blog/blog_${theme.palette.mode}.svg`}
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
