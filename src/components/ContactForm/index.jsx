import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { MailIcon } from '../icons';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0',
      }}
    >
      <Typography variant="h6" component="h6" sx={{ mb: 2 }} fontSize={30}>
        CONTACT ME
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-between' },
          width: '100%',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            flex: 1,
            display: {
              xs: 'none',
              md: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
          variant="h6"
          component="p"
        >
          <MailIcon sx={{ mr: 1 }} />
          <span>Đăng ký nhận code</span>
        </Typography>
        <Box
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            width: 500,
            margin: '0 10px',
          }}
        >
          <TextField
            type="email"
            placeholder="Enter your email"
            color="info"
            focused
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              sx: { color: '#fff' },
            }}
          />
          <Button
            color="info"
            variant="contained"
            sx={{
              ml: { xs: 0, md: 1 },
              mt: { xs: 1, md: 0 },
              padding: { xs: '14px', md: '0 40px' },
            }}
            onClick={() => setEmail('')}
          >
            Send
          </Button>
        </Box>
        <Typography
          sx={{
            flex: 1,
            textAlign: 'center',
            display: { xs: 'none', md: 'block' },
          }}
          variant="h6"
        >
          Nhận ngay{' '}
          <Typography
            component="span"
            variant="h6"
            fontSize={30}
            sx={(theme) => ({ color: theme.palette.text.main })}
          >
            VOUCHER 100K
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
