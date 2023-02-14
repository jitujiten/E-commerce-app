import React, { useReducer } from "react";
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

var curdid;

export const baseUrl = `https://crudcrud.com/api/71e083c9e8a04864a10f1b1f46ac19d4/${replacedEmailId}`;

var arr = [];

axios
  .get(`${baseUrl}`)
  .then((res) => {
    for (var i = 0; i < res.data.length; i++) {
      arr.push(res.data[i]);
    }
  })
  .catch((err) => {
    console.log(err);
  });

const defaultcart = {
  items: arr,
  TotalAmount: 0,
};

const cartreducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.TotalAmount + action.item.price * action.item.amount;
    localStorage.setItem("amount", updatedTotalAmount);
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    axios
      .get(`${baseUrl}`)
      .then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].id === existingCartItem.id) {
            curdid = res.data[i]._id;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;

      axios
        .put(`${baseUrl}/${curdid}`, updatedItem)
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
        });
    } else {
      updatedItems = state.items.concat(action.item);
      axios
        .post(`${baseUrl}`, action.item)
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
        });
    }

    return {
      items: updatedItems,
      TotalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];

    const updatedTotalAmount =
      state.TotalAmount - existingItem.price * existingItem.amount;

    localStorage.setItem("amount", updatedTotalAmount);

    let updatedItems;

    axios
      .get(`${baseUrl}`)
      .then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].id === existingItem.id) {
            curdid = res.data[i]._id;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      axios
        .delete(`${baseUrl}/${curdid}`)
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
        });
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;

      axios
        .put(`${baseUrl}/${curdid}`, updatedItem)
        .then((res) => console.log(res))
        .catch((err) => {
          localStorage.removeItem("amount");
        });
    }

    return {
      items: updatedItems,
      TotalAmount: updatedTotalAmount,
    };
  }

  return defaultcart;
};

const CartProvider = (props) => {
  const [cartstate, dispatchfunction] = useReducer(cartreducer, defaultcart);

  const additemhandler = (item) => {
    dispatchfunction({ type: "ADD", item: item });
  };

  const removeitemhandler = (id) => {
    dispatchfunction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartstate.items,
    TotalAmount: cartstate.TotalAmount,
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
