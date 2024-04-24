import PropTypes from 'prop-types';
import { Avatar, Box, Chip, Grid, Typography } from '@mui/material';
import { getInitials } from '../../../utils/get-initials';

export const CompanyTeam = (props) => {
  const { members, ...other } = props;

  return (
    <div {...other}>
      <div>
        <Typography variant="h6">
          Team ({members.length})
        </Typography>
      </div>
      <Box sx={{ mt: 3 }}>
        <Grid
          container
          spacing={3}
        >
          {members.map((member) => (
            <Grid
              item
              key={member.id}
              sm={6}
              xs={12}
            >
              <Box
                sx={{
                  borderColor: 'divider',
                  borderRadius: 1,
                  borderStyle: 'solid',
                  borderWidth: 1,
                  px: 3,
                  py: 4
                }}
              >
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <Avatar src={member.avatar}>
                    {getInitials(member.name)}
                  </Avatar>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="subtitle2">
                      {member.name}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                    >
                      {member.role}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    m: -1,
                    mt: 1
                  }}
                >
                  {member.skillSet.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{ m: 1 }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

CompanyTeam.defaultProps = {
  members: []
};

CompanyTeam.propTypes = {
  members: PropTypes.array
};
