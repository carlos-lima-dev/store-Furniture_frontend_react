import React, {createContext, useState, useEffect} from "react";
export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  // Carregar itens do carrinho do localStorage quando o componente é montado
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  // Atualizar o localStorage sempre que o carrinho de compras mudar
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item._id === product._id
    );

    if (existingItemIndex !== -1) {
      // Se o produto já existe no carrinho, incrementa a quantidade
      const updatedCartItems = cartItems.map((item, index) => {
        if (index === existingItemIndex) {
          return {...item, quantity: item.quantity + 1};
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      // Se o produto não existe no carrinho, adiciona-o com quantidade 1
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === productId) {
        return {...item, quantity: item.quantity + 1};
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (productId) => {
    const updatedCartItems = cartItems
      .map((item) => {
        if (item._id === productId) {
          if (item.quantity === 1) {
            return null;
          } else {
            return {...item, quantity: item.quantity - 1};
          }
        }
        return item;
      })
      .filter(Boolean);
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalPrice,
        getTotalQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};
