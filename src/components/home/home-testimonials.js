import { Avatar, Box, Container, Typography } from '@mui/material';

export const HomeTestimonials = (props) => (
  <Box
    sx={{
      backgroundColor: 'primary.main',
      py: 15
    }}
    {...props}>
    <Container
      maxWidth="md"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography
        align="center"
        color="primary.contrastText"
        variant="h3"
      >
        &quot;Devias builds some of the best templates you can find for
        React.
        They will save you time.&quot;
      </Typography>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          mt: 3
        }}
      >
        <Avatar
          src="/static/home/olivier.png"
          sx={{ mr: 2 }}
          variant="rounded"
        />
        <div>
          <Typography
            color="primary.contrastText"
            variant="h6"
          >
            Olivier Tassinari,
          </Typography>
          <Typography
            color="primary.contrastText"
            variant="body2"
          >
            co-creator of @MUI
          </Typography>
        </div>
      </Box>
    </Container>
  </Box>
);
