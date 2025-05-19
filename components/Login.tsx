'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { RestResponse } from '@/types';
import { HttpStatusCode } from '@/types';
import { SLUG_DASHBOARD } from '@/app/constants';

interface FormErrors {
  email?: string;
  password?: string;
}

// only do this for componetents that aren't top level, also leave
// outside the component to avoid re-executing every render
const boxStyles = {
  mx: 'auto',
  py: '5rem',
  width: '75%',
};

const paperStyles = {
  py: '2rem',
};

const formStyles = {
  px: '2rem',
};

export default function Login() {
  const [email, setEmail] = useState('john@doe.com');
  const [password, setPassword] = useState('123456789');
  const [errors, setErrors] = useState<FormErrors>({});
  const { push } = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === HttpStatusCode.Ok) {
        const data = await response.json() as RestResponse<string>;
        if (data.success) push(`/${SLUG_DASHBOARD}`);
      }
    }
  };

  return (
    <Box sx={boxStyles}>
      <Paper elevation={0} sx={paperStyles}>
        <Typography variant="h2" align='center' gutterBottom>Sign In</Typography>

        <Box component="form" onSubmit={handleSubmit} sx={formStyles} noValidate>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              fullWidth
              type="password"
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Sign In
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
