import { Box, Card, Grid, Typography } from '@mui/material';
import { SeverityPill } from '../../severity-pill';

export const QuickStats3 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      p: 3
    }}
  >
    <Card>
      <Grid
        alignItems="center"
        container
        justifyContent="space-between"
      >
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          sx={{
            borderRight: (theme) => ({
              md: `1px solid ${theme.palette.divider}`
            }),
            borderBottom: (theme) => ({
              md: 'none',
              xs: `1px solid ${theme.palette.divider}`
            }),
            p: 3,
            textAlign: 'center'
          }}
        >
          <Typography
            color="textPrimary"
            variant="h5"
          >
            $4,250.00
          </Typography>
          <Typography
            color="textSecondary"
            sx={{ mt: 1 }}
            variant="overline"
          >
            Next payout
          </Typography>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          sx={{
            borderRight: (theme) => ({
              md: `1px solid ${theme.palette.divider}`
            }),
            borderBottom: (theme) => ({
              md: 'none',
              xs: `1px solid ${theme.palette.divider}`
            }),
            p: 3,
            textAlign: 'center'
          }}
        >
          <Typography
            color="textPrimary"
            variant="h5"
          >
            $12,500.00
          </Typography>
          <Typography
            color="textSecondary"
            sx={{ mt: 1 }}
            variant="overline"
          >
            Total income
          </Typography>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          sx={{
            borderRight: (theme) => ({
              md: `1px solid ${theme.palette.divider}`
            }),
            borderBottom: (theme) => ({
              sm: 'none',
              xs: `1px solid ${theme.palette.divider}`
            }),
            p: 3,
            textAlign: 'center'
          }}
        >
          <Typography
            color="textPrimary"
            variant="h5"
          >
            230
          </Typography>
          <Typography
            color="textSecondary"
            sx={{ mt: 1 }}
            variant="overline"
          >
            Today&apos;s Visitors
          </Typography>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          sx={{
            p: 3,
            textAlign: 'center'
          }}
        >
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Typography
              color="textPrimary"
              component="span"
              variant="h5"
            >
              5
            </Typography>
            <Box sx={{ ml: 1 }}>
              <SeverityPill color="primary">
                Live
              </SeverityPill>
            </Box>
          </Box>
          <Typography
            color="textSecondary"
            sx={{ mt: 1 }}
            variant="overline"
          >
            Active now
          </Typography>
        </Grid>
      </Grid>
    </Card>
  </Box>
);
