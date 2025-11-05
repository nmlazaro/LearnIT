import { createContext, useState } from 'react';

const cartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, count: product.count + count }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, count }]);
    }
  }

  function removeItem(idToRemove) {
    let newCart = cart.filter((itemInCart) => itemInCart.id !== idToRemove);
    setCart(newCart);
  }

  function getTotalItemCount() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count;
    });
    return total;
  }

  function resetCart() {
    setCart([]);
  }

  const isInCart = (id) => cart.some((prod) => prod.id === id);

  function getTotalPrice() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count * itemInCart.price;
    });
    return total;
  }

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((book) =>
        book.id === id ? { ...book, count: book.count + 1 } : book
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((book) =>
        book.id === id && book.count > 1
          ? { ...book, count: book.count - 1 }
          : book
      )
    );
  };

  return (
    <>
      <cartContext.Provider
        value={{
          cart,
          addToCart,
          removeItem,
          getTotalItemCount,
          isInCart,
          getTotalPrice,
          resetCart,
          increaseQuantity,
          decreaseQuantity,
        }}
      >
        {props.children}
      </cartContext.Provider>
    </>
  );
}

export { cartContext, CartContextProvider };
