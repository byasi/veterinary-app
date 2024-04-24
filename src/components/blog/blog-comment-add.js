import { Avatar, Box, Button, IconButton, TextField } from '@mui/material';
import { EmojiHappy as EmojiHappyIcon } from '../../icons/emoji-happy';
import { Link as LinkIcon } from '../../icons/link';
import { PaperClip as PaperClipIcon } from '../../icons/paper-clip';
import { Photograph as PhotographIcon } from '../../icons/photograph';
import { Plus as PlusIcon } from '../../icons/plus';
import { getInitials } from '../../utils/get-initials';

export const BlogCommentAdd = (props) => {
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user = {
    avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
    name: 'Anika Visser'
  };

  return (
    <div {...props}>
      <Box sx={{ display: 'flex' }}>
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
            placeholder="Add a comment"
            rows={3}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'background.paper'
              }
            }}
          />
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 3
            }}
          >
            <IconButton
              sx={{
                display: {
                  xs: 'inline-flex',
                  sm: 'none'
                }
              }}
            >
              <PlusIcon fontSize="small" />
            </IconButton>
            <Box
              sx={{
                display: {
                  xs: 'none',
                  sm: 'block'
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
            <div>
              <Button
                sx={{ ml: 2 }}
                variant="contained"
              >
                Send
              </Button>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
