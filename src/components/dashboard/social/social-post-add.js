import { Avatar, Box, Button, Card, CardContent, IconButton, TextField } from '@mui/material';
import { Photograph as PhotographIcon } from '../../../icons/photograph';
import { PaperClip as PaperClipIcon } from '../../../icons/paper-clip';
import { Link as LinkIcon } from '../../../icons/link';
import { EmojiHappy as EmojiHappyIcon } from '../../../icons/emoji-happy';
import { getInitials } from '../../../utils/get-initials';

export const SocialPostAdd = (props) => {
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user = {
    avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
    name: 'Anika Visser'
  };

  return (
    <Card {...props}>
      <CardContent sx={{ display: 'flex' }}>
        <Avatar
          src={user.avatar}
          sx={{
            height: 40,
            mr: 2,
            width: 40
          }}
        >
          {getInitials(user.name)}
        </Avatar>
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            fullWidth
            multiline
            placeholder="What's on your mind"
            rows={3}
          />
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 3
            }}
          >
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'block'
                },
                m: -1,
                '& > *': {
                  m: 1
                }
              }}
            >
              <IconButton>
                <PhotographIcon fontSize="small" />
              </IconButton>
              <IconButton>
                <PaperClipIcon fontSize="small" />
              </IconButton>
              <IconButton>
                <LinkIcon fontSize="small" />
              </IconButton>
              <IconButton>
                <EmojiHappyIcon fontSize="small" />
              </IconButton>
            </Box>
            <Button variant="contained">
              Post
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
