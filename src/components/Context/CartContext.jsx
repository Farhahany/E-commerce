import { createContext } from "react";
import axios from "axios";

export let CartContext = createContext(0)

export default function CartContextProvider(props) {

    let headers = {
        token: localStorage.getItem('usertoken')
    }
    function addToCart(prodId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
            productId: prodId
        }, {
            headers
        }).then((response) => {
            console.log(response?.data?.numOfCartItems)
            console.log(response?.data?.CartId)
            console.log(response?.data.data?.products)
            console.log(response?.data.data?.totalCartPrice)
            return response
        }).catch((error) => {
            return error
        })
    }

    return <CartContext.Provider value={{ addToCart }}>

        {props.children}

    </CartContext.Provider>
}