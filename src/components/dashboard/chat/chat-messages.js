import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { ChatMessage } from './chat-message';

export const ChatMessages = (props) => {
  const { messages, participants, ...other } = props;
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user = {
    avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
    name: 'Anika Visser'
  };

  return (
    <Box
      sx={{ p: 2 }}
      {...other}>
      {messages.map((message) => {
        const participant = participants.find((_participant) => _participant.id
          === message.authorId);
        let authorAvatar;
        let authorName;
        let authorType;

        // Since chat mock db is not synced with external auth providers
        // we set the user details from user auth state instead of thread participants
        if (message.authorId === '5e86809283e28b96d2d38537') {
          authorAvatar = user.avatar;
          authorName = 'Me';
          authorType = 'user';
        } else {
          authorAvatar = participant.avatar;
          authorName = participant.name;
          authorType = 'contact';
        }

        return (
          <ChatMessage
            authorAvatar={authorAvatar}
            authorName={authorName}
            authorType={authorType}
            body={message.body}
            contentType={message.contentType}
            createdAt={message.createdAt}
            key={message.id}
          />
        );
      })}
    </Box>
  );
};

ChatMessages.propTypes = {
    messages: PropTypes.array,
  participants: PropTypes.array
};
