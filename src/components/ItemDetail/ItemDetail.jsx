import { useState, useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import {
  Box,
  Grid,
  Typography,
  Button,
  Rating,
  IconButton,
  Divider,
  Container,
  Collapse,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ItemDetail({ book }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false); // Changes the button 'Add to cart' after the product is in the cart
  const { addToCart } = useContext(cartContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleIncrement = () => {
    // stock limit
    if (quantity < book.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(book, quantity);
    setIsAdded(true);
  };

  if (!book.id) {
    return <Loader />;
  }

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Grid container spacing={4}>
        {/* img */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={book.img}
            alt={book.title}
            sx={{
              width: '100%',
              borderRadius: '16px',
              border: '1px solid #E0E0E0',
            }}
          />
        </Grid>

        {/* detail */}
        <Grid item xs={12} md={7} sx={{ textAlign: 'left' }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 700, mb: 1 }}
          >
            {book.title}
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 400, mb: 1 }}
          >
            {book.subtitle}
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            {book.editorial}
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 400, mb: 2 }}
          >
            by {book.author}
          </Typography>

          {/* simulated rating*/}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating
              name="book-rating"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
            <Typography sx={{ ml: 1 }} color="text.secondary">
              (1.111 Ratings)
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            <Collapse in={isExpanded} collapsedSize="150px">
              <Typography variant="body1">{book.detail}</Typography>
            </Collapse>

            {!isExpanded && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '60px',
                  background:
                    'linear-gradient(to top, rgba(255,255,255,1) 30%, rgba(255,255,255,0))',
                  pointerEvents: 'none',
                }}
              />
            )}
          </Box>

          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            startIcon={
              isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
            }
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              p: 0,
              mb: 3,
              mt: 1,
            }}
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </Button>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
            ${book.price}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #E0E0E0',
                  borderRadius: '8px',
                }}
              >
                <IconButton
                  onClick={handleDecrement}
                  aria-label="decrease quantity"
                >
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ px: 2, fontWeight: 600 }}>
                  {quantity}
                </Typography>
                <IconButton
                  onClick={handleIncrement}
                  aria-label="increase quantity"
                >
                  <AddIcon />
                </IconButton>
              </Box>
            </Grid>

            <Grid item xs>
              {isAdded ? (
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Button
                    component={Link}
                    to="/"
                    variant="text"
                    size="large"
                    startIcon={<ArrowBackIcon />}
                    sx={{ height: '56px', borderRadius: '8px' }}
                  >
                    Continue Shopping
                  </Button>

                  <Button
                    component={Link}
                    to="/cart"
                    variant="contained"
                    size="large"
                    sx={{ height: '56px', borderRadius: '8px', flexGrow: 1 }}
                  >
                    Go to Cart
                  </Button>
                </Box>
              ) : (
                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  size="large"
                  sx={{ width: '100%', height: '56px', borderRadius: '8px' }}
                >
                  Add to Cart
                </Button>
              )}
            </Grid>
          </Grid>

          <Button
            variant="outlined"
            size="large"
            startIcon={<FavoriteBorderIcon />}
            sx={{ width: '100%', height: '56px', borderRadius: '8px', mt: 2 }}
          >
            Add to Wishlist
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ItemDetail;
