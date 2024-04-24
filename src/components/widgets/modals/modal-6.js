import {
  Box,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Typography
} from '@mui/material';
import { Cog as CogIcon } from '../../../icons/cog';
import { User as UserIcon } from '../../../icons/user';

export const Modal6 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      p: 3
    }}
  >
    <Paper
      elevation={12}
      sx={{
        maxWidth: 320,
        mx: 'auto'
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2">
          demo@devias.io
        </Typography>
        <Typography
          color="textSecondary"
          variant="subtitle2"
        >
          Devias
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ mt: 2 }}>
        <MenuItem>
          <ListItemIcon>
            <UserIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={(
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Profile
              </Typography>
            )}
          />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <CogIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={(
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Settings
              </Typography>
            )}
          />
        </MenuItem>
      </Box>
      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="outlined"
        >
          Logout
        </Button>
      </Box>
    </Paper>
  </Box>
);
