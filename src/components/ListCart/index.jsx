import { Box } from '@mui/material';
import CartItem from './CartItem';

export default function ListCart({ data, triggerDeleteCartItem }) {
  return (
    <Box>
      {data?.map((item, index) => (
        <CartItem
          key={index}
          data={item}
          triggerDeleteCartItem={triggerDeleteCartItem}
        />
      ))}
    </Box>
  );
}
