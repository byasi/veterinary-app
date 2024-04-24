import { Box, Card, CardContent, Divider, Grid, Switch, Typography } from '@mui/material';

export const AccountNotificationsSettings = () => (
  <Card>
    <CardContent>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          md={4}
          xs={12}
        >
          <Typography variant="h6">
            Email
          </Typography>
        </Grid>
        <Grid
          item
          md={8}
          sm={12}
          xs={12}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mb: 3
            }}
          >
            <div>
              <Typography variant="subtitle1">
                Product updates
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ mt: 1 }}
                variant="body2"
              >
                News, announcements, and product updates.
              </Typography>
            </div>
            <Switch defaultChecked />
          </Box>
          <Divider />
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 3
            }}
          >
            <div>
              <Typography variant="subtitle1">
                Security updates
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ mt: 1 }}
              >
                Important notifications about your account security.
              </Typography>
            </div>
            <Switch defaultChecked />
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ my: 3 }} />
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          md={4}
          xs={12}
        >
          <Typography variant="h6">
            Phone notifications
          </Typography>
        </Grid>
        <Grid
          item
          md={8}
          sm={12}
          xs={12}
        >
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              mb: 3
            }}
          >
            <div>
              <Typography variant="subtitle1">
                Security updates
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ mt: 1 }}
                variant="body2"
              >
                Important notifications about your account security.
              </Typography>
            </div>
            <Switch />
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
