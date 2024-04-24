import { Avatar, Box, Card, Grid, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import ErrorIcon from '@mui/icons-material/Error';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import WarningIcon from '@mui/icons-material/Warning';

export const LogisticsOverview = (props) => (
  <Grid
    container
    spacing={4}
    {...props}>
    <Grid
      item
      lg={3}
      md={6}
      xs={12}
    >
      <Card sx={{ p: 3 }}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            mb: 1
          }}
        >
          <Avatar
            sx={{
              backgroundColor: 'transparent',
              mr: 1
            }}
            variant="rounded"
          >
            <Box
              sx={{
                animation: 'pulse ease 750ms infinite',
                borderRadius: '50%',
                p: 0.5,
                '@keyframes pulse': {
                  '0%': {
                    boxShadow: 'none'
                  },
                  '100%': {
                    boxShadow: (theme) => `0px 0px 0px 6px ${alpha(theme.palette.error.main, 0.1)}`
                  }
                }
              }}
            >
              <Box
                sx={{
                  backgroundColor: 'error.main',
                  borderRadius: '50%',
                  height: 12,
                  width: 12
                }}
              />
            </Box>
          </Avatar>
          <Typography variant="h5">
            38
          </Typography>
        </Box>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          On route vehicles
        </Typography>
      </Card>
    </Grid>
    <Grid
      item
      lg={3}
      md={6}
      xs={12}
    >
      <Card sx={{ p: 3 }}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            mb: 1
          }}
        >
          <Avatar
            variant="rounded"
            sx={{
              backgroundColor: (theme) => alpha(theme.palette.error.main, 0.1),
              color: 'error.main',
              mr: 1
            }}
          >
            <WarningIcon fontSize="small" />
          </Avatar>
          <Typography variant="h5">
            2
          </Typography>
        </Box>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          Vehicles with errors
        </Typography>
      </Card>
    </Grid>
    <Grid
      item
      lg={3}
      md={6}
      xs={12}
    >
      <Card sx={{ p: 3 }}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            mb: 1
          }}
        >
          <Avatar
            variant="rounded"
            sx={{
              backgroundColor: (theme) => alpha(theme.palette.warning.main, 0.1),
              color: 'warning.main',
              mr: 1
            }}
          >
            <ErrorIcon fontSize="small" />
          </Avatar>
          <Typography variant="h5">
            1
          </Typography>
        </Box>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          Vehicles deviated from route
        </Typography>
      </Card>
    </Grid>
    <Grid
      item
      lg={3}
      md={6}
      xs={12}
    >
      <Card sx={{ p: 3 }}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            mb: 1
          }}
        >
          <Avatar
            variant="rounded"
            sx={{
              backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
              color: 'primary.main',
              mr: 1
            }}
          >
            <TimelapseIcon fontSize="small" />
          </Avatar>
          <Typography variant="h5">
            2
          </Typography>
        </Box>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          Late vehicles
        </Typography>
      </Card>
    </Grid>
  </Grid>
);
