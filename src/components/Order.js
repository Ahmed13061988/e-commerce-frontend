import React, { Component } from 'react';
import Item from './Item';



const Order = (props) => {

      const orderList = props.orderList.map((orderList) => <Item item={orderList}/>) 
      console.log("orderlist from order.js:",orderList)
    //   const cartItems = props.cartItems.map((cartItem) => <Item item={cartItem}
      return(
          <div>
              {orderList}
          </div>
      )    
}


export default Order; 