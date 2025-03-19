import { createStore } from "redux";

const ADD_TO_CART = 'addtocart';
const GET_PRODUCT = 'getprod';
const GET_USERS = 'getusers';

const initState = {
    products: [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    users: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            let updatedCart;

            if (existingItem) {
                updatedCart = state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, count: item.count + 1, cartPrice: (item.count + 1) * item.price }
                        : item
                );
            } else {
                updatedCart = [...state.cart, { ...action.payload, count: 1, cartPrice: action.payload.price }];
            }

            return {
                ...state,
                cart: updatedCart
            };

        case GET_PRODUCT:
            return {
                ...state,
                products: action.payload.map((el) => ({
                    ...el,
                    count: 1,
                    cartPrice: el.price
                }))
            };

        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };

        default:
            return state;
    }
};


export const getProductAC = (products) => ({ type: GET_PRODUCT, payload: products });
export const getUsersAC = (users) => ({ type: GET_USERS, payload: users });
export const addToCartAC = (product) => ({ type: ADD_TO_CART, payload: product });


export const store = createStore(reducer);
