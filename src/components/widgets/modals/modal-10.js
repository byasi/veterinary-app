import { Avatar, Box, Button, Container, Paper, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Check as CheckIcon } from '../../../icons/check';

export const Modal10 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      p: 3
    }}
  >
    <Container maxWidth="sm">
      <Paper
        elevation={12}
        sx={{ p: 3 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar
            sx={{
              backgroundColor: (theme) => alpha(theme.palette.success.main, 0.08),
              color: 'success.main',
              mb: 2
            }}
          >
            <CheckIcon fontSize="small" />
          </Avatar>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            Payment successful
          </Typography>
          <Typography
            align="center"
            color="textSecondary"
            sx={{ mt: 1 }}
            variant="body2"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Provident facere eum obcaecati
            pariatur magnam eius fugit nostrum sint enim, amet rem
            aspernatur distinctio tempora repudiandae, maiores quod. Ad,
            expedita assumenda!
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            mt: 4
          }}
        >
          <Button
            fullWidth
            size="large"
            sx={{ mr: 2 }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            fullWidth
            size="large"
            variant="contained"
          >
            Deactivate
          </Button>
        </Box>
      </Paper>
    </Container>
  </Box>
);
