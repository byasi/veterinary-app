import { Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const ColorsMain = () => {
  const theme = useTheme();

  const colors = [
    {
      name: 'Primary',
      code: theme.palette.primary.main
    },
    {
      name: 'Text Primary',
      code: theme.palette.text.primary
    },
    {
      name: 'Text Secondary',
      code: theme.palette.text.secondary
    },
    {
      name: 'Divider',
      code: theme.palette.divider
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        p: 3
      }}
    >
      <List
        disablePadding
        sx={{
          '& li:not(:last-child)': {
            pb: '33px',
            pt: 0
          },
          '& li:last-child': {
            py: 0
          }
        }}
      >
        {colors.map((color) => (
          <ListItem
            disableGutters
            key={color.code}
          >
            <ListItemAvatar>
              <Box
                sx={{
                  backgroundColor: color.code,
                  borderRadius: '10px',
                  height: 46,
                  mr: 2,
                  width: 46
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={(
                <Typography variant="subtitle2">
                  {color.name}
                </Typography>
              )}
              secondary={(
                <Typography
                  color="textSecondary"
                  variant="caption"
                >
                  {color.code}
                </Typography>
              )}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
