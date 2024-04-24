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

export const Form9 = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      minHeight: '100%',
      p: 3
    }}
  >
    <form onSubmit={(event) => event.preventDefault()}>
      <RadioGroup
        sx={{
          '& > *:not(:last-of-type)': {
            mb: 2
          }
        }}
      >
        {typeOptions.map((typeOption) => (
          <Paper
            key={typeOption.value}
            sx={{
              alignItems: 'flex-start',
              display: 'flex',
              p: 2
            }}
            variant="outlined"
          >
            <FormControlLabel
              control={<Radio />}
              key={typeOption.value}
              label={(
                <Box sx={{ ml: 2 }}>
                  <Typography variant="subtitle2">
                    {typeOption.title}
                  </Typography>
                  <Typography
                    color="textSecondary"
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
    </form>
  </Box>
);
