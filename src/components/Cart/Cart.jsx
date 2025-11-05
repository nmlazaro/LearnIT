import React, { useContext, useState } from 'react';
import { createBuyOrder } from '../../services/firebase';
import { cartContext } from '../../context/cartContext';
import ShippingForm from '../ShippingForm/ShippingForm';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link as MuiLink,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LockIcon from '@mui/icons-material/Lock';
import { ReactComponent as EmptyCartIcon } from '../../assets/emptycart.svg';

function Cart() {
  const {
    cart,
    removeItem,
    getTotalPrice,
    increaseQuantity,
    decreaseQuantity,
    resetCart,
  } = useContext(cartContext);

  const navigate = useNavigate();

  const subtotal = getTotalPrice();
  const shipping = subtotal > 0 ? 70.0 : 0; // fixed price
  const total = subtotal + shipping;

  const [shippingData, setShippingData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!shippingData.fullName) errors.fullName = 'This field is required';
    if (!shippingData.email) {
      errors.email = 'This field is required';
    } else if (!/\S+@\S+\.\S+/.test(shippingData.email)) {
      errors.email = 'Email address is invalid'; // Email validation
    }
    if (!shippingData.phone) errors.phone = 'This field is required';
    if (!shippingData.address1) errors.address1 = 'This field is required';
    if (!shippingData.city) errors.city = 'This field is required';
    if (!shippingData.state) errors.state = 'This field is required';
    if (!shippingData.zip) errors.zip = 'This field is required';
    return errors;
  };

  const handlePurchase = async () => {
    setFormErrors({});
    setIsLoading(true);

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsLoading(false);
      return;
    }

    const order = {
      buyer: shippingData,
      items: cart,
      total: total,
      date: new Date(),
    };

    try {
      const orderId = await createBuyOrder(order);
      resetCart();

      setShippingData({
        fullName: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
      });

      navigate(`/order/${orderId}`);
    } catch (error) {
      console.error('Error trying to create the order', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <Container sx={{ textAlign: 'center', my: 5, minHeight: '60vh' }}>
        <EmptyCartIcon
          style={{
            width: '100%',
            maxWidth: 300,
            height: 'auto',
            marginBottom: '24px',
          }}
        />
        <Typography variant="h4" sx={{ mb: 2 }}>
          Your shopping cart is empty
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Looks like you haven't added anything to your cart yet.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          sx={{ borderRadius: '8px' }}
        >
          Start Shopping
        </Button>
      </Container>
    );
  }

  // Cart
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'left' }}>
            Your Shopping Cart
          </Typography>
          <Typography color="text.secondary" sx={{ textAlign: 'left' }}>
            You have {cart.length} item{cart.length > 1 ? 's' : ''} in your
            cart.
          </Typography>
        </Box>
        <MuiLink
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          <ArrowBackIcon sx={{ mr: 0.5 }} fontSize="small" /> Continue Shopping
        </MuiLink>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              borderRadius: '16px',
              border: '1px solid #E0E0E0',
              boxShadow: 'none',
            }}
          >
            <CardContent sx={{ p: 0 }}>
              {cart.map((book, index) => (
                <React.Fragment key={book.id}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: { xs: 1, sm: 2 },
                      flexWrap: { xs: 'wrap', sm: 'nowrap' },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={book.img}
                      alt={book.title}
                      sx={{
                        width: { xs: 60, sm: 80 },
                        height: { xs: 90, sm: 120 },
                        borderRadius: '8px',
                        mr: 2,
                      }}
                    />

                    <Box sx={{ flexGrow: 1, textAlign: 'left', my: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: '1rem', sm: '1.25rem' },
                        }}
                      >
                        {book.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        by {book.author}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{
                          mt: 1,
                          fontWeight: 600,
                          fontSize: { xs: '1rem', sm: '1.25rem' },
                        }}
                      >
                        ${book.price}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #E0E0E0',
                        borderRadius: '8px',
                        mx: { xs: 0, sm: 2 },
                        my: { xs: 1, sm: 0 },
                      }}
                    >
                      <IconButton onClick={() => decreaseQuantity(book.id)}>
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ px: 2, fontWeight: 600 }}>
                        {book.count}
                      </Typography>
                      <IconButton onClick={() => increaseQuantity(book.id)}>
                        <AddIcon />
                      </IconButton>
                    </Box>

                    <IconButton
                      onClick={() => removeItem(book.id)}
                      aria-label="remove item"
                      color="error"
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Box>
                  {index < cart.length - 1 && <Divider sx={{ mx: 2 }} />}
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
          <Box sx={{ mt: 4 }}>
            <ShippingForm
              shippingData={shippingData}
              setShippingData={setShippingData}
              formErrors={formErrors}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderRadius: '16px',
              border: '1px solid #E0E0E0',
              boxShadow: 'none',
              p: 2,
              position: 'sticky',
              top: 100,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, mb: 3, textAlign: 'left' }}
              >
                Order Summary
              </Typography>

              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}
              >
                <Typography color="text.secondary">Subtotal</Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  ${subtotal.toFixed(2)}
                </Typography>
              </Box>

              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}
              >
                <Typography color="text.secondary">Shipping</Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  ${shipping.toFixed(2)}
                </Typography>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Total
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  ${total.toFixed(2)}
                </Typography>
              </Box>

              <Button // Checkout button. If it was already clicked will be wating while the order is completed to prevent double clicks
                onClick={handlePurchase}
                variant="contained"
                size="large"
                fullWidth
                startIcon={<LockIcon />}
                sx={{ height: '56px', borderRadius: '8px' }}
                disabled={isLoading}
              >
                {isLoading ? 'Placing Order...' : 'Place Order'}{' '}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cart;
