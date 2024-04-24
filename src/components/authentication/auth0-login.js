import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, FormHelperText } from '@mui/material';
import { useAuth } from '../../hooks/use-auth';
import { useMounted } from '../../hooks/use-mounted';

export const Auth0Login = (props) => {
  const isMounted = useMounted();
  const router = useRouter();
  const { loginWithPopup } = useAuth();
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await loginWithPopup();

      if (isMounted()) {
        const returnUrl = router.query.returnUrl || '/dashboard';
        router.push(returnUrl);
      }
    } catch (err) {
      console.error(err);

      if (isMounted()) {
        setError(err.message);
      }
    }
  };

  return (
    <div {...props}>
      {error && (
        <Box sx={{ my: 3 }}>
          <FormHelperText error>
            {error}
          </FormHelperText>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button
          onClick={handleLogin}
          variant="contained"
        >
          Log In
        </Button>
      </Box>
    </div>
  );
};
