import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { getTotalItemCount, cart } = useContext(cartContext);
  console.log(cart);
  return (
    <Badge badgeContent={getTotalItemCount()} color="primary">
      <IconButton
        component={Link}
        to={`/cart`}
        variant="outlined"
        color="inherit"
        sx={{
          border: '1px solid rgba(0, 0, 0, 0.23)',
          borderRadius: '8px',
        }}
      >
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </Badge>
  );
}

export default CartWidget;
