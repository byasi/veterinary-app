import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Divider } from '@mui/material';
import { addMessage, getThread, markThreadAsSeen, setActiveThread } from '../../../slices/chat';
import { useDispatch, useSelector } from '../../../store';
import { Scrollbar } from '../../scrollbar';
import { ChatMessageAdd } from './chat-message-add';
import { ChatMessages } from './chat-messages';
import { ChatThreadToolbar } from './chat-thread-toolbar';
import { chatApi } from '../../../__fake-api__/chat-api';

const threadSelector = (state) => {
  const { threads, activeThreadId } = state.chat;

  return threads.byId[activeThreadId];
};

export const ChatThread = (props) => {
  const { threadKey } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const thread = useSelector((state) => threadSelector(state));
  const messagesRef = useRef(null);
  const [participants, setParticipants] = useState([]);
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user = {
    id: '5e86809283e28b96d2d38537'
  };

  const getDetails = async () => {
    try {
      const _participants = await chatApi.getParticipants(threadKey);

      setParticipants(_participants);

      const threadId = await dispatch(getThread(threadKey));

            dispatch(setActiveThread(threadId));
            dispatch(markThreadAsSeen(threadId));
    } catch (err) {
      // If thread key is not a valid key (thread id or contact id)
      // the server throws an error, this means that the user tried a shady route
      // and we redirect them on the home view
      console.error(err);
      router.push(`/dashboard/chat`);
    }
  };

  useEffect(() => {
      getDetails();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [threadKey]);

  useEffect(() => {
    // Scroll to bottom of the messages after loading the thread
    if (thread?.messages && messagesRef?.current) {
      const scrollElement = messagesRef.current.getScrollElement();

      scrollElement.scrollTop = messagesRef.current.el.scrollHeight;
    }
  }, [thread]);

  // If we have the thread, we use its ID to add a new message
  // Otherwise we use the recipients IDs. When using participant IDs, it means that we have to
  // get the thread.
  const handleSendMessage = async (body) => {
    try {
      if (thread) {
        await dispatch(addMessage({
          threadId: thread.id,
          body
        }));
      } else {
        const recipientIds = participants
          .filter((participant) => participant.id !== user.id)
          .map((participant) => participant.id);

        const threadId = await dispatch(addMessage({
          recipientIds,
          body
        }));

                await dispatch(getThread(threadId));
                dispatch(setActiveThread(threadId));
      }

      // Scroll to bottom of the messages after adding the new message
      if (messagesRef?.current) {
        const scrollElement = messagesRef.current.getScrollElement();

        scrollElement.scrollTo({
          top: messagesRef.current.el.scrollHeight,
          behavior: 'smooth'
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'hidden'
      }}
      {...props}>
      <ChatThreadToolbar participants={participants} />
      <Box
        sx={{
          backgroundColor: 'background.default',
          flexGrow: 1,
          overflow: 'hidden'
        }}
      >
        <Scrollbar
          ref={messagesRef}
          sx={{ maxHeight: '100%' }}
        >
          <ChatMessages
            messages={thread?.messages || []}
            participants={thread?.participants || []}
          />
        </Scrollbar>
      </Box>
      <Divider />
      <ChatMessageAdd
        disabled={false}
        onSend={handleSendMessage}
      />
    </Box>
  );
};

ChatThread.propTypes = {
  threadKey: PropTypes.string.isRequired
};
