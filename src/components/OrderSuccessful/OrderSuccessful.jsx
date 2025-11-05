import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

import { ReactComponent as OrderSuccessIcon } from '../../assets/orderconfirm.svg';

function Order() {
  const { orderId } = useParams();

  return (
    <Container
      sx={{
        textAlign: 'center',
        my: 5,
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <OrderSuccessIcon
        style={{
          width: '100%',
          maxWidth: 300,
          height: 'auto',
          marginBottom: '32px',
        }}
      />

      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
        Thanks for your purchase
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3, maxWidth: '500px' }}>
        Your order was succesfully created.
      </Typography>

      <Typography color="text.secondary">Your order ID: </Typography>
      <Box
        sx={{
          p: 2,
          border: '1px dashed #E0E0E0',
          borderRadius: '8px',
          display: 'inline-block',
          my: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, letterSpacing: 1 }}>
          {orderId}
        </Typography>
      </Box>

      <Button
        component={Link}
        to="/"
        variant="contained"
        size="large"
        sx={{ mt: 2, borderRadius: '8px' }}
      >
        Home
      </Button>
    </Container>
  );
}

export default Order;
