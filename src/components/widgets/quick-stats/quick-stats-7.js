import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  LinearProgress,
  Typography
} from '@mui/material';

export const QuickStats7 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      p: 3
    }}
  >
    <Card>
      <CardHeader title="Profile Progress" />
      <Divider />
      <CardContent>
        <LinearProgress
          value={50}
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
  </Box>
);
