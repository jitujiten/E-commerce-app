import React,{useReducer} from "react";
import CartContext from "./Cart-Context";

const defaultcart={
   items:[],
   TotalAmount:0 
}

const cartreducer=(state,action)=>{
    if(action.type==="ADD"){

        const updatedTotalAmount =
        state.TotalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex=state.items.findIndex((item)=>item.id===action.item.id)

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
    
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount,
          };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
    
      return {
        items: updatedItems,
        TotalAmount: updatedTotalAmount,
      };
    }
    if(action.type==="REMOVE"){

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
          );

          const existingItem = state.items[existingCartItemIndex];

          const updatedTotalAmount = state.TotalAmount - existingItem.price;
          let updatedItems;
          if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
          } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
          }
      
          return {
            items: updatedItems,
            TotalAmount: updatedTotalAmount
          };
    }
    return defaultcart;
}



const CartProvider = (props) => {

    const[cartstate,dispatchfunction]=useReducer(cartreducer,defaultcart)

    const additemhandler=(item)=>{
        dispatchfunction({type:"ADD",item:item}) 
    }

    const removeitemhandler=id=>{
        dispatchfunction({type:"REMOVE",id:id})   
    }

  const cartContext = {
    items: cartstate.items,
    TotalAmount: cartstate.TotalAmount,
    AddItem: additemhandler,
    removeItem: removeitemhandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
