// src/components/Footer/Footer.jsx

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  InputBase,
  IconButton,
  Divider,
  Link as MuiLink,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E0E0E0',
        padding: '40px 0',
        color: '#333',
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LanguageIcon sx={{ mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                LearnIT
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Your adventure in reading starts here.
            </Typography>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontSize: '1rem', fontWeight: 600 }}
            >
              Company
            </Typography>
            <MuiLink
              href="#"
              color="text.secondary"
              display="block"
              sx={{
                mb: 1,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              About LearnIT
            </MuiLink>
            <MuiLink
              href="#"
              color="text.secondary"
              display="block"
              sx={{
                mb: 1,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Careers
            </MuiLink>
            <MuiLink
              href="#"
              color="text.secondary"
              display="block"
              sx={{
                mb: 1,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Contact Us
            </MuiLink>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontSize: '1rem', fontWeight: 600 }}
            >
              Customer Service
            </Typography>
            <MuiLink
              href="#"
              color="text.secondary"
              display="block"
              sx={{
                mb: 1,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Help/FAQ
            </MuiLink>
            <MuiLink
              href="#"
              color="text.secondary"
              display="block"
              sx={{
                mb: 1,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Shipping
            </MuiLink>
            <MuiLink
              href="#"
              color="text.secondary"
              display="block"
              sx={{
                mb: 1,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Returns
            </MuiLink>
          </Grid>

          <Grid item xs={12} md={5}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontSize: '1rem', fontWeight: 600 }}
            >
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Subscribe for the latest releases and offers.
            </Typography>
            <Box
              component="form"
              sx={{
                display: 'flex',
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                overflow: 'hidden',
                maxWidth: '400px',
              }}
            >
              <InputBase
                sx={{ flex: 1, padding: '6px 12px' }}
                placeholder="Your email"
              />
              <IconButton
                type="submit"
                sx={{
                  backgroundColor: '#333',
                  color: 'white',
                  borderRadius: '0 8px 8px 0',
                  '&:hover': { backgroundColor: '#555' },
                }}
              >
                <SendIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} LearnIT. Is just a prototype of a book
          store
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
