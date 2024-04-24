import { format, subDays, subMinutes, subSeconds } from 'date-fns';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@mui/material';
import { DotsHorizontal as DotsHorizontalIcon } from '../../../icons/dots-horizontal';
import { Scrollbar } from '../../scrollbar';
import { SeverityPill } from '../../severity-pill';

const now = new Date();

const logs = [
  {
    id: '5ece2cfeb6e2ac847bba11ce',
    createdAt: subDays(subMinutes(subSeconds(now, 56), 2), 2).getTime(),
    description: 'Purchase',
    ip: '84.234.243.42',
    method: 'POST',
    route: '/api/purchase',
    status: 200
  },
  {
    id: '5ece2d02510484b2952e1e05',
    createdAt: subDays(subMinutes(subSeconds(now, 56), 2), 2).getTime(),
    description: 'Purchase',
    ip: '84.234.243.42',
    method: 'POST',
    route: '/api/purchase',
    status: 522
  },
  {
    id: '5ece2d08e2748e4e9788901a',
    createdAt: subDays(subMinutes(subSeconds(now, 23), 8), 2).getTime(),
    description: 'Cart remove',
    ip: '84.234.243.42',
    method: 'DELETE',
    route: '/api/products/d65654e/remove',
    status: 200
  },
  {
    id: '5ece2d0c47214e342c2d7f28',
    createdAt: subDays(subMinutes(subSeconds(now, 54), 20), 2).getTime(),
    description: 'Cart add',
    ip: '84.234.243.42',
    method: 'GET',
    route: '/api/products/d65654e/add',
    status: 200
  },
  {
    id: '5ece2d11e4060a97b2b57623',
    createdAt: subDays(subMinutes(subSeconds(now, 16), 34), 2).getTime(),
    description: 'Cart add',
    ip: '84.234.243.42',
    method: 'GET',
    route: '/api/products/c85727f/add',
    status: 200
  },
  {
    id: '5ece2d16cf6d53d8e33656af',
    createdAt: subDays(subMinutes(subSeconds(now, 30), 54), 2).getTime(),
    description: 'View product',
    ip: '84.234.243.42',
    method: 'GET',
    route: '/api/products/c85727f',
    status: 200
  },
  {
    id: '5ece2d1b2ec5071be9286a96',
    createdAt: subDays(subMinutes(subSeconds(now, 40), 56), 2).getTime(),
    description: 'Get products',
    ip: '84.234.243.42',
    method: 'GET',
    route: '/api/products',
    status: 200
  },
  {
    id: '5ece2d22e68d5498917e47bc',
    createdAt: subDays(subMinutes(subSeconds(now, 5), 57), 2).getTime(),
    description: 'Login',
    ip: '84.234.243.42',
    method: 'POST',
    route: '/api/authentication/login',
    status: 200
  }
];

export const Table10 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      p: 3
    }}
  >
    <Card>
      <CardHeader
        action={(
          <IconButton>
            <DotsHorizontalIcon fontSize="small" />
          </IconButton>
        )}
        title="Logs"
      />
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 1150 }}>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell width="100">
                  <Typography variant="subtitle2">
                    {log.method}
                  </Typography>
                </TableCell>
                <TableCell width="64">
                  <SeverityPill
                    color={log.status === 200
                      ? 'success'
                      : 'error'}
                  >
                    {log.status}
                  </SeverityPill>
                </TableCell>
                <TableCell>
                  {log.route}
                </TableCell>
                <TableCell>
                  {log.description}
                </TableCell>
                <TableCell align="right">
                  {log.ip}
                </TableCell>
                <TableCell align="right">
                  {format(log.createdAt, 'yyyy/MM/dd | HH:mm:ss')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  </Box>
);
