import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Box, Button, FormHelperText, TextField, Typography } from '@mui/material';
import { useAuth } from '../../hooks/use-auth';
import { useMounted } from '../../hooks/use-mounted';

export const AmplifyPasswordReset = (props) => {
  const isMounted = useMounted();
  const { passwordReset } = useAuth();
  const router = useRouter();
  const itemsRef = useRef([]);
  const [username, setUsername] = useState('');
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      code: ['', '', '', '', '', ''],
      email: username,
      password: '',
      passwordConfirm: '',
      submit: null
    },
    validationSchema: Yup.object({
      code: Yup
        .array()
        .of(Yup.string().required('Code is required')),
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .min(7, 'Must be at least 7 characters')
        .max(255)
        .required('Required'),
      passwordConfirm: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        await passwordReset(values.email, values.code.join(''), values.password);

        if (isMounted()) {
          router.push('/authentication/login');
        }
      } catch (err) {
        console.error(err);

        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.message });
          helpers.setSubmitting(false);
        }
      }
    }
  });

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, 6);

    const storedUsername = sessionStorage.getItem('username');

    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <form
      noValidate
      onSubmit={formik.handleSubmit}
      {...props}>
      {!username
        ? (
          <TextField
            autoFocus
            error={Boolean(formik.touched.email && formik.errors.email)}
            fullWidth
            helperText={formik.touched.email && formik.errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            value={formik.values.email}
          />
        )
        : (
          <TextField
            disabled
            fullWidth
            margin="normal"
            value={username}
          />
        )}
      <Typography
        color="textSecondary"
        sx={{
          mb: 2,
          mt: 3
        }}
        variant="subtitle2"
      >
        Verification code
      </Typography>
      <Box
        sx={{
          columnGap: '16px',
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          py: 1
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((ref, i) => (
          <TextField
            error={Boolean(Array.isArray(formik.touched.code)
              && formik.touched.code.length === 6
              && formik.errors.code)}
            fullWidth
            inputRef={(el) => itemsRef.current[i] = el}
            // eslint-disable-next-line react/no-array-index-key
            key={`code-${i}`}
            name={`code[${i}]`}
            onBlur={formik.handleBlur}
            onKeyDown={(event) => {
              if (event.code === 'Enter') {
                if (formik.values.code[i]) {
                  formik.setFieldValue(`code[${i}]`, '');
                  return;
                }

                if (i > 0) {
                  formik.setFieldValue(`code[${i}]`, '');
                  itemsRef.current[i - 1].focus();
                  return;
                }
              }

              if (Number.isInteger(parseInt(event.key, 10))) {
                formik.setFieldValue(`code[${i}]`, event.key);

                if (i < 5) {
                  itemsRef.current[i + 1].focus();
                }
              }
            }}
            onPaste={(event) => {
              const paste = event.clipboardData.getData('text');
              const pasteArray = paste.split('');

              if (pasteArray.length !== 6) {
                return;
              }

              let valid = true;

              pasteArray.forEach((x) => {
                if (!Number.isInteger(parseInt(x, 10))) {
                  valid = false;
                }
              });

              if (valid) {
                formik.setFieldValue('code', pasteArray);
                itemsRef.current[5].focus();
              }
            }}
            value={formik.values.code[i]}
            sx={{
              display: 'inline-block',
              textAlign: 'center',
              '& .MuiInputBase-input': {
                textAlign: 'center'
              }
            }}
          />
        ))}
      </Box>
      {Boolean(Array.isArray(formik.touched.code)
        && formik.touched.code.length === 6
        && formik.errors.code) && (
        <FormHelperText
          error
          sx={{ mx: '14px' }}
        >
          {Array.isArray(formik.errors.code) && formik.errors.code.find((x) => x !== undefined)}
        </FormHelperText>
      )}
      <TextField
        error={Boolean(formik.touched.password && formik.errors.password)}
        fullWidth
        helperText={formik.touched.password && formik.errors.password}
        label="Password"
        margin="normal"
        name="password"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="password"
        value={formik.values.password}
      />
      <TextField
        error={Boolean(formik.touched.passwordConfirm && formik.errors.passwordConfirm)}
        fullWidth
        helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
        label="Password Confirmation"
        margin="normal"
        name="passwordConfirm"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="password"
        value={formik.values.passwordConfirm}
      />
      {formik.errors.submit && (
        <Box sx={{ mt: 3 }}>
          <FormHelperText error>
            {formik.errors.submit}
          </FormHelperText>
        </Box>
      )}
      <Box sx={{ mt: 3 }}>
        <Button
          disabled={formik.isSubmitting}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Reset Password
        </Button>
      </Box>
    </form>
  );
};
