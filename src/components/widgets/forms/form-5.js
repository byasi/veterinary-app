import {
  Autocomplete,
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Switch,
  TextField,
  Typography
} from '@mui/material';

const countries = [
  { text: 'Jersey', value: 'JE' },
  { text: 'Jordan', value: 'JO' },
  { text: 'Kazakhstan', value: 'KZ' },
  { text: 'Kenya', value: 'KE' },
  { text: 'Kiribati', value: 'KI' },
  { text: 'Korea, Democratic People\'S Republic of', value: 'KP' },
  { text: 'Korea, Republic of', value: 'KR' },
  { text: 'Kuwait', value: 'KW' },
  { text: 'Kyrgyzstan', value: 'KG' },
  { text: 'Lao People\'S Democratic Republic', value: 'LA' }
];

export const Form5 = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      minHeight: '100%',
      p: 3
    }}
  >
    <form onSubmit={(event) => event.preventDefault()}>
      <CardHeader title="Profile" />
      <CardContent>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Name"
              name="name"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              helperText="We will use this email to contact you"
              label="Email Address"
              name="email"
              required
              type="email"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={countries}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  {...params} />
              )}
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="State/Region"
              name="state"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="City"
              name="city"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Typography
              gutterBottom
              variant="subtitle2"
            >
              Public Profile
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Means that anyone viewing your profile will
              be able to see your contacts details
            </Typography>
            <Switch
              edge="start"
              name="isPublic"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Typography
              gutterBottom
              variant="subtitle2"
            >
              Available to hire
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Toggling this will let your teammates know
              that you are available for acquiring new projects
            </Typography>
            <Switch
              color="primary"
              edge="start"
              name="canHire"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          type="submit"
          variant="contained"
        >
          Save Settings
        </Button>
      </CardActions>
    </form>
  </Box>
);
