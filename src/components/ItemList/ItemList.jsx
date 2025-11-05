import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import { Box } from '@mui/material';

function ItemList(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 3,
        gap: 3,
        maxWidth: '1300px',
        margin: '0 auto',
      }}
    >
      {props.booksList.map((book) => {
        return (
          <ItemCard
            id={book.id}
            img={book.img}
            title={book.title}
            author={book.author}
          />
        );
      })}
    </Box>
  );
}

export default ItemList;
