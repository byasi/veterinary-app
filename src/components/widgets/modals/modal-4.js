import { formatDistanceToNowStrict, subDays, subHours, subMinutes } from 'date-fns';
import {
  Avatar,
  Box,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography
} from '@mui/material';
import { StatusIndicator } from '../../status-indicator';

const now = new Date();

const contacts = [
  {
    id: '5e8891ab188cd2855e6029b7',
    avatar: '/static/mock-images/avatars/avatar-alcides_antonio.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Alcides Antonio'
  },
  {
    id: '5e887a62195cc5aef7e8ca5d',
    avatar: '/static/mock-images/avatars/avatar-marcus_finn.png',
    isActive: false,
    lastActivity: subHours(now, 2).getTime(),
    name: 'Marcus Finn'
  },
  {
    id: '5e887ac47eed253091be10cb',
    avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
    isActive: false,
    lastActivity: subMinutes(now, 15).getTime(),
    name: 'Carson Darrin'
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Fran Perez'
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Jie Yan Song'
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
    isActive: false,
    lastActivity: subDays(now, 2).getTime(),
    name: 'Miron Vitold'
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    avatar: '/static/mock-images/avatars/avatar-penjani_inyene.png',
    isActive: false,
    lastActivity: subHours(now, 6).getTime(),
    name: 'Penjani Inyene'
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    avatar: '/static/mock-images/avatars/avatar-omar_darboe.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Omar Darobe'
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',
    avatar: '/static/mock-images/avatars/avatar-siegbert_gottfried.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Siegbert Gottfried'
  },
  {
    id: '5e8877da9a65442b11551975',
    avatar: '/static/mock-images/avatars/avatar-iulia_albu.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Iulia Albu'
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    avatar: '/static/mock-images/avatars/avatar-nasimiyu_danai.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Nasimiyu Danai'
  }
];

export const Modal4 = () => (
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
        mx: 'auto',
        p: 2
      }}
    >
      <Typography variant="h6">
        Contacts
      </Typography>
      <Box sx={{ mt: 2 }}>
        <List disablePadding>
          {contacts.map((contact) => (
            <ListItem
              disableGutters
              key={contact.id}
            >
              <ListItemAvatar>
                <Avatar src={contact.avatar} />
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={(
                  <Link
                    color="textPrimary"
                    noWrap
                    underline="none"
                    variant="subtitle2"
                  >
                    {contact.name}
                  </Link>
                )}
              />
              {contact.isActive
                ? (
                  <StatusIndicator
                    size="small"
                    status="online"
                  />
                )
                : (
                  <Typography
                    color="textSecondary"
                    noWrap
                    variant="caption"
                  >
                    {formatDistanceToNowStrict(contact.lastActivity)}
                    {' '}
                    ago
                  </Typography>
                )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  </Box>
);
