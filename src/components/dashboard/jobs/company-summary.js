import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { PropertyList } from '../../property-list';
import { PropertyListItem } from '../../property-list-item';
import { getInitials } from '../../../utils/get-initials';

export const CompanySummary = (props) => {
  const { company, ...other } = props;

  return (
    <Card {...other}>
      <CardContent>
        <Typography
          color="textSecondary"
          variant="overline"
        >
          About
        </Typography>
        <PropertyList>
          <PropertyListItem
            align="vertical"
            label="Website"
            sx={{
              mt: 2,
              p: 0
            }}
            value={company.website}
          />
          <PropertyListItem
            align="vertical"
            label="Locations"
            sx={{
              mt: 2,
              p: 0
            }}
          >
            {company.locations.map((location) => (
              <Typography
                key={location}
                color="textSecondary"
                variant="body2"
              >
                {location}
              </Typography>
            ))}
          </PropertyListItem>
          <PropertyListItem
            align="vertical"
            label="Company size"
            sx={{
              mt: 1,
              p: 0
            }}
            value={company.employees}
          />
        </PropertyList>
        <Divider sx={{ my: 2 }} />
        <Typography
          color="textSecondary"
          variant="overline"
        >
          Founders
        </Typography>
        <div>
          {company.founders.map((founder) => (
            <Box
              key={founder.id}
              sx={{
                alignItems: 'center',
                display: 'flex',
                mt: 2
              }}
            >
              <Avatar
                src={founder.avatar}
                sx={{ mr: 2 }}
              >
                {getInitials(founder.name)}
              </Avatar>
              <div>
                <Typography variant="subtitle2">
                  {founder.name}
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  {founder.role}
                </Typography>
              </div>
            </Box>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

CompanySummary.propTypes = {
    company: PropTypes.object.isRequired
};
