import axios from 'axios';


const initialState = {
    user: {},
    cart: [],
    products: []
}

const GET_USER_INFO ='GET_USER_INFO';
const ADD_TO_CART ='ADD_TO_CART';
const GET_PRODUCTS ='GET_PRODUCTS';
const _FULFILLED = '_FULFILLED';


export function getUserInfo() {
    const userData = axios.get('auth/me')
        .then(res => {
            return res.data
        })
    return {
        type: 'GET_USER_INFO',
        payload: userData
    }


}

export function getProducts() {
    let products = axios.get('/api/getproducts')
    .then(res => {
        console.log(res.data)
        return res.data
        
    })
    return {
        type: GET_PRODUCTS,
        payload: products

    }
}

export function addToCart(val) {
    alert('Added to cart!')
    return {
      type: ADD_TO_CART,
      payload: val
    }
  }

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + _FULFILLED:
            return Object.assign({}, state, {user: action.payload})
        case ADD_TO_CART:
            const newCart = state.cart.slice();
            newCart.push(action.payload);
            return Object.assign({}, state, {cart: newCart});
        case GET_PRODUCTS + _FULFILLED:
            return Object.assign({}, state, {products: action.payload})

        default:

            return state;
    }
}