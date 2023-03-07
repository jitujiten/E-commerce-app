import React, { useEffect, useState } from "react";
import CartContext from "./Cart-Context";
import axios from "axios";

export const productsArr = [
  {
    title: "Colors Blue Red Black",
    id: "e1",
    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    id: "e2",
    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    id: "e3",
    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color Pink Stone",
    id: "e4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

let useremailid = "";

if (localStorage.getItem("emailid") === null) {
  useremailid = "";
} else {
  useremailid = localStorage.getItem("emailid");
}
console.log(useremailid);
const replacedEmailId = useremailid.replace("@", "").replace(".", "");

export const baseUrl = `https://crudcrud.com/api/536a4cf05d374faebb27b2cd906e6f42/${replacedEmailId}`;

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      if (!useremailid) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${baseUrl}`);
        setItems(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getUserData();
  }, []);
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status"></div>
        <div>Loading.....</div>
      </div>
    );
  }

  const removeitemhandler = async (id) => {
    const existingCartItem = items.filter((cartItem) => cartItem.id === id);

    if (existingCartItem.length > 0) {
      const cartItem = existingCartItem[0];

      try {
        await axios.delete(`${baseUrl}/${cartItem._id}`);
        const updatedItems = items.filter((cartItem) => cartItem.id !== id);
        setItems(updatedItems);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const additemhandler = async (item) => {
    const existingCartItem = items.filter(
      (cartItem) => cartItem.id === item.id
    );
    console.log(item);
    console.log(existingCartItem);

    if (existingCartItem.length > 0) {
      console.log(`inside put`);
      const updateExistingCartItem = {
        ...item,
        amount: existingCartItem[0].amount + item.amount,
      };
      console.log(updateExistingCartItem);
      try {
        await axios.put(
          `${baseUrl}/${existingCartItem[0]._id}`,
          updateExistingCartItem
        );

        const updateExistingCartItemAfterPut = items.map((cartItem) => {
          if (cartItem.id === updateExistingCartItem.id) {
            return {
              ...existingCartItem[0],
              amount: existingCartItem[0].amount + item.amount,
            };
          } else {
            return cartItem;
          }
        });
        setItems(updateExistingCartItemAfterPut);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(`for post`);
      try {
        const response = await axios.post(`${baseUrl}`, item);
        setItems([...items, response.data]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const cartContext = {
    items: items,
    AddItem: additemhandler,
    removeItem: removeitemhandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
