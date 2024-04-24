import { subDays, subHours } from 'date-fns';
import {
  Avatar,
  Box,
  Button,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography
} from '@mui/material';
import { ChatAlt as ChatAltIcon } from '../../../icons/chat-alt';
import { CreditCard as CreditCardIcon } from '../../../icons/credit-card';
import { ShoppingCart as ShoppingCartIcon } from '../../../icons/shopping-cart';

const now = new Date();

const notifications = [
  {
    id: '5e8883f1b51cc1956a5a1ec0',
    createdAt: subHours(now, 2).getTime(),
    description: 'Dummy text',
    title: 'Your order is placed',
    type: 'order_placed'
  },
  {
    id: '5e8883f7ed1486d665d8be1e',
    createdAt: subDays(now, 1).getTime(),
    description: 'You have 32 unread messages',
    title: 'New message received',
    type: 'new_message'
  },
  {
    id: '5e8883fca0e8612044248ecf',
    createdAt: subDays(now, 3).getTime(),
    description: 'Dummy text',
    title: 'Your item is shipped',
    type: 'item_shipped'
  },
  {
    id: '5e88840187f6b09b431bae68',
    createdAt: subDays(now, 7).getTime(),
    description: 'You have 32 unread messages',
    title: 'New message received',
    type: 'new_message'
  }
];

const iconsMap = {
  item_shipped: ShoppingCartIcon,
  new_message: ChatAltIcon,
  order_placed: CreditCardIcon
};

export const Modal5 = () => (
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
        <Typography
          color="textPrimary"
          variant="h6"
        >
          Notifications
        </Typography>
      </Box>
      <List disablePadding>
        {notifications.map((notification) => {
          const Icon = iconsMap[notification.type];

          return (
            <ListItem
              divider
              key={notification.id}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText'
                  }}
                >
                  <Icon fontSize="small" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={(
                  <Link
                    color="textPrimary"
                    sx={{ cursor: 'pointer' }}
                    underline="none"
                    variant="subtitle2"
                  >
                    {notification.title}
                  </Link>
                )}
                secondary={notification.description}
              />
            </ListItem>
          );
        })}
      </List>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1
        }}
      >
        <Button size="small">
          Mark all as read
        </Button>
      </Box>
    </Paper>
  </Box>
);
