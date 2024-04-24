import { useState, useEffect, useCallback } from 'react';
import NextLink from 'next/link';
import toast from 'react-hot-toast';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Input,
  Link,
  Paper,
  Typography
} from '@mui/material';
import { socialApi } from '../../../__fake-api__/social-api';
import { useMounted } from '../../../hooks/use-mounted';
import { DotsHorizontal as DotsHorizontalIcon } from '../../../icons/dots-horizontal';
import { Search as SearchIcon } from '../../../icons/search';

const connectStatusMap = {
  connected: 'Connected',
  not_connected: 'Connect',
  pending: 'Pending'
};

export const SocialConnections = (props) => {
  const isMounted = useMounted();
  const [connections, setConnections] = useState([]);
  const [search, setSearch] = useState('');

  const getConnections = useCallback(async () => {
    const data = await socialApi.getConnections();

    if (isMounted()) {
      setConnections(data);
    }
  }, [isMounted]);

  useEffect(() => {
    getConnections();
  }, [getConnections]);

  const handleConnectToggle = (connectionId) => {
    setConnections((prevConnections) => prevConnections.map((connection) => {
      if (connection.id === connectionId) {
        const updatedConnection = { ...connection };

        updatedConnection.status =
          (connection.status === 'connected' || connection.status === 'pending'
            ? 'not_connected'
            : 'pending');

        if (updatedConnection.status === 'pending') {
          toast.success('Request sent!');
        }

        return updatedConnection;
      }

      return connection;
    }));
  };

  return (
    <Card {...props}>
      <CardHeader title="Connections" />
      <Divider />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          px: 3,
          py: 2
        }}
      >
        <SearchIcon fontSize="small" />
        <Box sx={{ ml: 2 }}>
          <Input
            disableUnderline
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search connections"
            value={search}
          />
        </Box>
      </Box>
      <Divider />
      <Box sx={{ p: 3 }}>
        <Grid
          container
          spacing={3}
        >
          {connections
            .filter((connection) => connection.name.toLowerCase().includes(search))
            .map((connection) => (
              <Grid
                item
                key={connection.id}
                md={6}
                xs={12}
              >
                <Paper
                  sx={{ height: '100%' }}
                  variant="outlined"
                >
                  <Box
                    sx={{
                      display: 'flex',
                      p: 2
                    }}
                  >
                    <NextLink
                      href="#"
                      passHref
                    >
                      <Avatar
                        component="a"
                        src={connection.avatar}
                        sx={{
                          height: 56,
                          width: 56
                        }}
                      />
                    </NextLink>
                    <Box
                      sx={{
                        flexGrow: 1,
                        mx: 2
                      }}
                    >
                      <NextLink
                        href="#"
                        passHref
                      >
                        <Link
                          color="textPrimary"
                          variant="subtitle2"
                        >
                          {connection.name}
                        </Link>
                      </NextLink>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                      >
                        {connection.commonConnections}
                        {' '}
                        connections in common
                      </Typography>
                      {connection.status !== 'rejected' && (
                        <Button
                          onClick={() => handleConnectToggle(connection.id)}
                          size="small"
                          variant="outlined"
                        >
                          {connectStatusMap[connection.status]}
                        </Button>
                      )}
                    </Box>
                    <IconButton>
                      <DotsHorizontalIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Card>
  );
};
