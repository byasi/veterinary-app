import {
  Avatar,
  Box,
  Card,
  CardHeader,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { Truck as TruckIcon } from '../../../icons/truck';
import { Scrollbar } from '../../scrollbar';
import { SeverityPill } from '../../severity-pill';

const vehicles = [
  {
    id: 'VOL-653CD1',
    endingRoute: 'Cleveland, Ohio, USA',
    startingRoute: 'Cleveland, Ohio, USA',
    status: 'success',
    temperature: 8,
    temperatureLabel: 'Very Good'
  },
  {
    id: 'VOL-653CD2',
    endingRoute: 'Cleveland, Ohio, USA',
    startingRoute: 'Cleveland, Ohio, USA',
    status: 'warning',
    temperature: 8,
    temperatureLabel: 'Very Good',
    warning: 'Temperature not optimal'
  },
  {
    id: 'VOL-653CD3',
    endingRoute: 'Cleveland, Ohio, USA',
    startingRoute: 'Cleveland, Ohio, USA',
    status: 'error',
    temperature: 8,
    temperatureLabel: 'Very Good',
    warning: 'ECU not responding'
  },
  {
    id: 'VOL-653CD4',
    endingRoute: 'Cleveland, Ohio, USA',
    startingRoute: 'Cleveland, Ohio, USA',
    status: 'success',
    temperature: 8,
    temperatureLabel: 'Very Good'
  }
];

export const LogisticsOnRouteVehicles = () => (
  <Card>
    <CardHeader
      title="On Route Vehicles"
      subheader="Condition and temperature"
    />
    <Scrollbar>
      <Box sx={{ minWidth: 1200 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Location
              </TableCell>
              <TableCell>
                Ending Route
              </TableCell>
              <TableCell>
                Starting Route
              </TableCell>
              <TableCell>
                Warnings
              </TableCell>
              <TableCell>
                Refrigerator Temperature
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles.map((vehicle) => (
              <TableRow
                key={vehicle.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex'
                    }}
                  >
                    <Avatar sx={{ mr: 2 }}>
                      <TruckIcon fontSize="small" />
                    </Avatar>
                    <Typography variant="subtitle2">
                      {vehicle.id}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {vehicle.endingRoute}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {vehicle.startingRoute}
                  </Typography>
                </TableCell>
                <TableCell>
                  <SeverityPill color={vehicle.status}>
                    {vehicle.warning || 'No warnings'}
                  </SeverityPill>
                </TableCell>
                <TableCell>
                  <LinearProgress
                    value={vehicle.temperature}
                    variant="determinate"
                  />
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      mt: 2
                    }}
                  >
                    <Typography
                      color="inherit"
                      variant="inherit"
                    >
                      {vehicle.temperatureLabel}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography
                      color="textSecondary"
                      variant="inherit"
                    >
                      {vehicle.temperature}
                      °C
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Scrollbar>
  </Card>
);
