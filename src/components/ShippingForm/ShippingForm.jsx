import React from 'react';
import { Box, Grid, Typography, TextField } from '@mui/material';

const ShippingForm = ({ shippingData, setShippingData, formErrors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box component="form" noValidate sx={{ mt: 1, textAlign: 'left' }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
        Shipping Address
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
            Full Name
          </Typography>
          <TextField
            required
            fullWidth
            id="fullName"
            name="fullName"
            placeholder="John M. Doe"
            value={shippingData.fullName}
            onChange={handleChange}
            error={!!formErrors.fullName}
            helperText={formErrors.fullName || ''}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
          />
        </Grid>

        {/* --- Email --- */}
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
            Email
          </Typography>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={shippingData.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email || ''}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
          />
        </Grid>

        {/* --- Phone --- */}
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
            Phone
          </Typography>
          <TextField
            required
            fullWidth
            id="phone"
            name="phone"
            type="tel"
            placeholder="(123) 456-7890"
            value={shippingData.phone}
            onChange={handleChange}
            error={!!formErrors.phone}
            helperText={formErrors.phone || ''}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
          />
        </Grid>

        {/* --- Address Line 1 --- */}
        <Grid item xs={12}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
            Address Line 1
          </Typography>
          <TextField
            required
            fullWidth
            id="address1"
            name="address1"
            placeholder="123 Knowledge Lane"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
            // --- 3. AÑADE ESTAS LÍNEAS ---
            value={shippingData.address1}
            onChange={handleChange}
            error={!!formErrors.address1}
            helperText={formErrors.address1 || ''}
            // --- FIN ---
          />
        </Grid>

        {/* --- Address Line 2 --- */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="address2"
            name="address2"
            placeholder="Apartment, suite, etc."
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
            value={shippingData.address2}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
            City
          </Typography>
          <TextField
            required
            fullWidth
            id="city"
            name="city"
            placeholder="Bookville"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
            value={shippingData.city}
            onChange={handleChange}
            error={!!formErrors.city}
            helperText={formErrors.city || ''}
          />
        </Grid>

        {/* --- State / Province --- */}
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
            State / Province
          </Typography>
          <TextField
            required
            fullWidth
            id="state"
            name="state"
            placeholder="Fiction"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
            value={shippingData.state}
            onChange={handleChange}
            error={!!formErrors.state}
            helperText={formErrors.state || ''}
          />
        </Grid>

        {/* --- Postal Code --- */}
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
            Postal Code
          </Typography>
          <TextField
            required
            fullWidth
            id="zip"
            name="zip"
            placeholder="12345"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
            value={shippingData.zip}
            onChange={handleChange}
            error={!!formErrors.zip}
            helperText={formErrors.zip || ''}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShippingForm;
