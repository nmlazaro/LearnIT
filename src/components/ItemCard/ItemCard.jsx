import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Tooltip,
} from '@mui/material';
// import { useTheme } from '@mui/material/styles'; // Solo si lo necesitas

const ItemCard = ({ id, title, author, img, category, price }) => {
  // const theme = useTheme();

  return (
    <Tooltip title={title} arrow>
      <Card
        sx={{
          width: 250,
          height: 450,
          borderRadius: '16px',

          display: 'flex',
          flexDirection: 'column',
        }}
        variant="outlined"
      >
        <CardActionArea
          component={Link}
          to={`/book/${id}`}
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardMedia
            component="img"
            image={img}
            alt={title}
            sx={{
              height: 300,
              objectFit: 'cover',
            }}
          />
          <CardContent
            sx={{
              flexGrow: 1,
              overflow: 'hidden',
              textAlign: 'left',
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 600,
                fontSize: '1.1rem',

                // To hide title if > 2 lines
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              by {author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
};

export default ItemCard;
