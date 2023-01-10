import { Box, Typography } from '@mui/material';

export default function InfoStoreItem({ icon, title, subtitle, desc }) {
  return (
    <Box sx={{ textAlign: 'center', flex: 1, p: 4 }}>
      {icon}
      <Typography
        sx={{ fontSize: '20px', textTransform: 'uppercase', color: '#fed700' }}
      >
        <b>{title}</b>
      </Typography>
      <Typography sx={{ fontSize: '12px' }}>
        <b>{subtitle}</b>
      </Typography>
      <Typography sx={{ fontSize: '10px' }}>{desc}</Typography>
    </Box>
  );
}
