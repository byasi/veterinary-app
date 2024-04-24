import numeral from 'numeral';
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography
} from '@mui/material';
import { InformationCircleOutlined as InformationCircleOutlinedIcon } from '../../../icons/information-circle-outlined';

const countries = [
  {
    flag: '/static/icons/us_flag.svg',
    name: 'United States',
    seo: 40,
    visits: 31200
  },
  {
    flag: '/static/icons/uk_flag.svg',
    name: 'United Kingdom',
    seo: 47,
    visits: 12700
  },
  {
    flag: '/static/icons/ru_flag.svg',
    name: 'Russia',
    seo: 65,
    visits: 10360
  },
  {
    flag: '/static/icons/ca_flag.svg',
    name: 'Canada',
    seo: 23,
    visits: 5749
  },
  {
    flag: '/static/icons/de_flag.svg',
    name: 'Germany',
    seo: 45,
    visits: 2932
  }
];

export const Table8 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      p: 3
    }}
  >
    <Card>
      <CardHeader
        disableTypography
        title={(
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Typography variant="h6">
              Visits by Country
            </Typography>
            <Tooltip title="Refresh rate is 24h">
              <InformationCircleOutlinedIcon fontSize="small" />
            </Tooltip>
          </Box>
        )}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Country
            </TableCell>
            <TableCell>
              <TableSortLabel
                active
                direction="asc"
              >
                Visits
              </TableSortLabel>
            </TableCell>
            <TableCell>
              SEO
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((country) => (
            <TableRow
              key={country.name}
              sx={{
                '&:last-child td': {
                  border: 0
                }
              }}
            >
              <TableCell>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <Box
                    sx={{
                      height: 36,
                      width: 36,
                      '& img': {
                        height: 36,
                        width: 36
                      }
                    }}
                  >
                    <img
                      alt={country.name}
                      src={country.flag}
                    />
                  </Box>
                  <Typography
                    sx={{ ml: 2 }}
                    variant="subtitle2"
                  >
                    {country.name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                {numeral(country.visits).format('0,0')}
              </TableCell>
              <TableCell>
                {country.seo}
                %
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  </Box>
);
