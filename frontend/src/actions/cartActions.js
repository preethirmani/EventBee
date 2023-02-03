import axios from 'axios';
import {CART_ADD_ITEM, CART_REMOVE_ITEM,
        CART_SAVE_BILLING, CART_SAVE_PAYMENT} from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const {data} = await axios.get(`/api/programs/${id}`);
  console.log('qty in action::' + qty)
  console.log('id in action::' + id)
  dispatch({
    type : CART_ADD_ITEM,
    payload : {
      program: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      seatsAvailable: data.seatsAvailable,
      qty
    }
  })
  localStorage.setItem('cartItelms', JSON.stringify(getState().cart.cartItems));

}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveBillingInfo = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_BILLING,
    payload: data
  })
  localStorage.setItem('billingInfo', JSON.stringify(data));
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT,
    payload: data
  })
  localStorage.setItem('paymentMethod', JSON.stringify(data));
}