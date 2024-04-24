import { format, subDays, subHours, subMinutes, subSeconds } from 'date-fns';
import numeral from 'numeral';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography
} from '@mui/material';
import { Scrollbar } from '../../scrollbar';
import { ChevronRight as ChevronRightIcon } from '../../../icons/chevron-right';
import { DotsHorizontal as DotsHorizontalIcon } from '../../../icons/dots-horizontal';

const now = new Date();

const projects = [
  {
    id: '5eff24e675e7b3cba23e4be7',
    author: {
      avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
      name: 'Jie Yan Song'
    },
    budget: 12500,
    createdAt: subHours(subMinutes(subSeconds(now, 10), 34), 2).getTime(),
    currency: '$',
    technologies: ['angular'],
    title: 'Mella Full Screen Slider'
  },
  {
    id: '5eff24e98e2c9107e95cb827',
    author: {
      avatar: '/static/mock-images/avatars/avatar-omar_darboe.png',
      name: 'Omar Darobe'
    },
    budget: 15750,
    createdAt: subHours(subMinutes(subSeconds(now, 25), 56), 10).getTime(),
    currency: '$',
    technologies: ['sketch', 'html-css'],
    title: 'Overview Design'
  },
  {
    id: '5eff24f0d97353e3576d3c26',
    author: {
      avatar: '/static/mock-images/avatars/avatar-siegbert_gottfried.png',
      name: 'Siegbert Gottfried'
    },
    budget: 15750,
    createdAt: subDays(subMinutes(subSeconds(now, 50), 30), 1).getTime(),
    currency: '$',
    technologies: ['react-js'],
    title: 'Ten80 Web Design'
  },
  {
    id: '5eff24f737bc6b191dd9bf58',
    author: {
      avatar: '/static/mock-images/avatars/avatar-iulia_albu.png',
      name: 'Iulia Albu'
    },
    budget: 12500,
    createdAt: subDays(subMinutes(subSeconds(now, 30), 4), 1).getTime(),
    currency: '$',
    technologies: ['vue-js'],
    title: 'Neura e-commerce UI Kit'
  },
  {
    id: '5eff24fb29fc5e37bdab3b2d',
    author: {
      avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
      name: 'Carson Darrin'
    },
    budget: 15750,
    createdAt: subDays(subMinutes(subSeconds(now, 6), 11), 1).getTime(),
    currency: '$',
    technologies: ['angular', 'figma'],
    title: 'Administrator Overview'
  }
];

const technologyMap = {
  'html-css': '/static/icons/html.svg',
  'react-js': '/static/icons/react-js.svg',
  'vue-js': '/static/icons/vue-js.svg',
  angular: '/static/icons/angular.svg',
  figma: '/static/icons/figma.svg',
  sketch: '/static/icons/sketch.svg'
};

export const Table2 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
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
        title="Latest Projects"
      />
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                Title
              </TableCell>
              <TableCell>
                Author
              </TableCell>
              <TableCell>
                Budget
              </TableCell>
              <TableCell>
                Technology
              </TableCell>
              <TableCell
                align="right"
                sortDirection="desc"
              >
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Created
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow
                hover
                key={project.id}
              >
                <TableCell>
                  {project.title}
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex'
                    }}
                  >
                    <Avatar src={project.author.avatar} />
                    <Typography
                      sx={{ ml: 1 }}
                      variant="subtitle2"
                    >
                      {project.author.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  {numeral(project.budget)
                    .format(`${project.currency}0,0.00`)}
                </TableCell>
                <TableCell>
                  {project.technologies.map((technology) => (
                    <Box
                      component="span"
                      key={technology}
                      sx={{
                        '& + &': {
                          ml: 1
                        },
                        '& img': {
                          height: 30
                        }
                      }}
                    >
                      <img
                        alt="Tech"
                        key={technology}
                        src={technologyMap[technology]}
                      />
                    </Box>
                  ))}
                </TableCell>
                <TableCell align="right">
                  {format(project.createdAt, 'dd MMM, yyyy')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ChevronRightIcon fontSize="small" />}
          size="small"
          sx={{ cursor: 'pointer' }}
        >
          See All
        </Button>
      </Box>
    </Card>
  </Box>
);
