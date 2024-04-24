import { Box, FormControlLabel, Paper, Radio, RadioGroup, Typography } from '@mui/material';

const typeOptions = [
  {
    description: 'I\'m looking for teammates to join in a personal project',
    title: 'I\'m a freelancer',
    value: 'freelancer'
  },
  {
    description: 'I\'m looking for freelancer or contractors to take care of my project',
    title: 'I’m a project owner',
    value: 'projectOwner'
  },
  {
    description: 'I\'m looking for freelancer or contractors to take care of my project',
    title: 'I want to join affiliate',
    value: 'affiliate'
  }
];

export const InputRadio = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      p: 2
    }}
  >
    <Typography variant="h5">
      Please select one option
    </Typography>
    <Typography
      color="textSecondary"
      sx={{
        pb: 3.5,
        pt: 1
      }}
      variant="body1"
    >
      Proin tincidunt lacus sed ante efficitur efficitur.
      Quisque aliquam fringilla velit sit amet euismod.
    </Typography>
    <RadioGroup
      sx={{
        '& > *:not(:last-child)': {
          mb: 2
        }
      }}
    >
      {typeOptions.map((typeOption, index) => (
        <Paper
          key={typeOption.value}
          sx={{
            alignItems: 'flex-start',
            display: 'flex',
            padding: 2
          }}
          variant="outlined"
        >
          <FormControlLabel
            control={<Radio />}
            disabled={index === 2 && true}
            key={typeOption.value}
            label={(
              <Box sx={{ ml: 2 }}>
                <Typography
                  sx={{
                    color: index === 2
                      ? 'action.disabled'
                      : 'text.primary'
                  }}
                  variant="subtitle2"
                >
                  {typeOption.title}
                </Typography>
                <Typography
                  sx={{
                    color: index === 2
                      ? 'action.disabled'
                      : 'text.secondary'
                  }}
                  variant="body2"
                >
                  {typeOption.description}
                </Typography>
              </Box>
            )}
            value={typeOption.value}
          />
        </Paper>
      ))}
    </RadioGroup>
  </Box>
);
