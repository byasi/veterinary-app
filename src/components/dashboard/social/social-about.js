import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import { AcademicCap as AcademicCapIcon } from '../../../icons/academic-cap';
import { Briefcase as BriefcaseIcon } from '../../../icons/briefcase';
import { Home as HomeIcon } from '../../../icons/home';
import { Mail as MailIcon } from '../../../icons/mail';

export const SocialAbout = (props) => {
  const {
    currentCity,
    currentJobCompany,
    currentJobTitle,
    email,
    originCity,
    previousJobCompany,
    previousJobTitle,
    profileProgress,
    quote,
    ...other
  } = props;

  return (
    <div {...other}>
      <Card>
        <CardHeader title="Profile Progress" />
        <Divider />
        <CardContent>
          <LinearProgress
            value={profileProgress}
            variant="determinate"
          />
          <Box sx={{ mt: 2 }}>
            <Typography
              color="textSecondary"
              variant="subtitle2"
            >
              50% Set Up Complete
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardHeader title="About" />
          <Divider />
          <CardContent>
            <Typography
              color="textSecondary"
              variant="subtitle2"
            >
              &quot;
              {quote}
              &quot;
            </Typography>
            <List>
              <ListItem
                disableGutters
                divider
              >
                <ListItemAvatar sx={{ color: 'action.active' }}>
                  <BriefcaseIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={(
                    <Typography variant="subtitle2">
                      {currentJobTitle}
                      {' '}
                      at
                      {' '}
                      <Link
                        color="textPrimary"
                        href="#"
                        variant="subtitle2"
                      >
                        {currentJobCompany}
                      </Link>
                    </Typography>
                  )}
                  secondary={(
                    <Typography
                      color="textSecondary"
                      variant="body2"
                    >
                      Past:
                      {previousJobTitle}
                      {' '}
                      <Link
                        color="textSecondary"
                        href="#"
                        variant="body2"
                      >
                        {previousJobCompany}
                      </Link>
                    </Typography>
                  )}
                />
              </ListItem>
              <ListItem
                disableGutters
                divider
              >
                <ListItemAvatar sx={{ color: 'action.active' }}>
                  <AcademicCapIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  primary={(
                    <Link
                      color="textSecondary"
                      sx={{ cursor: 'pointer' }}
                      variant="caption"
                    >
                      Add school or collage
                    </Link>
                  )}
                />
              </ListItem>
              <ListItem
                disableGutters
                divider
              >
                <ListItemAvatar sx={{ color: 'action.active' }}>
                  <HomeIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={(
                    <Typography variant="subtitle2">
                      Lives in
                      {' '}
                      <Link
                        color="textPrimary"
                        href="#"
                        variant="subtitle2"
                      >
                        {currentCity}
                      </Link>
                    </Typography>
                  )}
                  secondary={(
                    <Typography
                      color="textSecondary"
                      variant="body2"
                    >
                      Originally from
                      {' '}
                      <Link
                        color="textSecondary"
                        href="#"
                        variant="body2"
                      >
                        {originCity}
                      </Link>
                    </Typography>
                  )}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar sx={{ color: 'action.active' }}>
                  <MailIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  primary={(
                    <Typography variant="subtitle2">
                      {email}
                    </Typography>
                  )}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

SocialAbout.propTypes = {
  currentCity: PropTypes.string.isRequired,
  currentJobCompany: PropTypes.string.isRequired,
  currentJobTitle: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  originCity: PropTypes.string.isRequired,
  previousJobCompany: PropTypes.string.isRequired,
  previousJobTitle: PropTypes.string.isRequired,
  profileProgress: PropTypes.number.isRequired,
  quote: PropTypes.string.isRequired
};
