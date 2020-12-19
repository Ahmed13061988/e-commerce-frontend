import React from 'react';
import { connect } from 'react-redux';
import Order from '../components/Order';

const OrderPage = (props) =>{
    console.log("from orderpage",props)

    const handleSubmitOrder = () => {
        // get passed to Cart
        props.submitOrder()
    }


    return(
        <div>
         <Order orderList={props.orderList}/>
        </div>
    )
}

const mapStateToProps = state => ({
    //  cartItems: state.cart.cartItems,
    //   cartId: state.cart.cartId,
    // total: state.cart.total
    orderList: state.cart.orderList,
});

export default connect(mapStateToProps)(OrderPage);