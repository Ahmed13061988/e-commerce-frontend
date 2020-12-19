

export default function cartReducer(state = {
    cartId: null,
    orderId: null,
    cartItems: [],
    orderList: [],
    total: 0,
    addingItemToCart: false,
    placingOrder: false
}, action) {

 
    const localStoredCart =  localStorage.getItem("cart") ? 
    JSON.parse(localStorage.getItem("cart")) :
    localStorage.setItem("cart", JSON.stringify({id: "", items: []}))
    JSON.parse(localStorage.getItem("cart"))
    // const localStoredTotal = localStorage.getItem("total") ? 
    //     JSON.parse(localStorage.getItem("total")) :
    //     localStorage.setItem("total", JSON.stringify({total: 0}))
    //     JSON.parse(localStorage.getItem("total"))
    // const OrderStorage = localStorage.getItem("order")?
    // JSON.parse(localStorage.getItem("order")):
    // localStorage.setItem("order", JSON.stringify({id: "", items: []}))
    // JSON.parse(localStorage.getItem("order"))
    switch(action.type) {

        case 'UPDATE_CART':
            console.log('updating cart')
            return {
                ...state,
                cartId: localStoredCart.id,
                cartItems: localStoredCart.items
                //  orderId: OrderStorage.id
                
                // total: localStoredTotal.total
                
                // cartId: action.payload.cart.id,
                // cartItems: action.payload.cart.items
                // total: action.payload.cart.total
            }
           

        case 'ADDING_TO_CART':
            console.log('Adding items to cart')
            return {
                ...state,
                addingItemToCart: true 
            }

            
        case 'PLACING_ORDER':
            console.log("placing order")
            return{ ...state,
             placingOrder: true,
             orderList: localStoredCart.items,
            //  orderId: localStoredCart.id
            // //   orderId: OrderStorage.id,
            // //    orderList: OrderStorage.items
            //    orderList: OrderStorage.items
            }
         
            
            
            
         default:
            return state
    }
}

 