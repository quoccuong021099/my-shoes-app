/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

export default function DetailProductComp({ data }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <Typography
      variant="subtitle1"
      component="div"
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      <Typography variant="subtitle1" component="span">
        Quantity:
      </Typography>
      <Box ml={1}>
        <Button
          color="error"
          variant="contained"
          sx={{ padding: 0, minWidth: 25 }}
          onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
        >
          -
        </Button>
        <Typography variant="subtitle1" component="span" sx={{ mx: 1 }}>
          {quantity}
        </Typography>
        <Button
          color="third"
          variant="contained"
          sx={{ padding: 0, minWidth: 25 }}
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </Button>
      </Box>
    </Typography>
  );
}
