import axios from 'axios';
const initialState = {
    user: {},
    cart: []
}

const GET_USER_INFO ='GET_USER_INFO';
const ADD_TO_CART ='ADD_TO_CART';


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

export function addToCart(val) {
    return {
      type: ADD_TO_CART,
      payload: val
    }
  }

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFULLED':
            return Object.assign({}, state, {user: action.payload})
        case ADD_TO_CART:
            const newCart = state.cart.slice();
            newCart.push(action.payload);
            return Object.assign({}, state, {cart: newCart});

        default:

            return state;
    }
}