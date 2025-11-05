import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getAllBooks } from '../../services/firebase';
import Loader from '../Loader/Loader';

const ItemListContainer = (props) => {
  const [allBooks, setAllBooks] = useState([]);

  const [filteredBooksList, setFilteredBooksList] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categoryID } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    setLoading(true);
    getAllBooks()
      .then((database) => {
        setAllBooks(database);
      })
      .catch((error) => {
        console.error('Error trying to get books', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let booksToShow = [...allBooks];

    if (query) {
      booksToShow = booksToShow.filter(
        (book) =>
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          (book.author &&
            book.author.toLowerCase().includes(query.toLowerCase()))
      );
    } else if (categoryID) {
      booksToShow = booksToShow.filter((book) => book.category === categoryID);
    }
    setFilteredBooksList(booksToShow);
  }, [allBooks, categoryID, query]);

  return (
    <div className="ItemListContainer">
      {loading ? <Loader /> : <ItemList booksList={filteredBooksList} />}
    </div>
  );
};

export default ItemListContainer;
