import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component.js';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length
        ? cartItems.map( cartItem => {
          return <CartItem key={cartItem.id} item={cartItem}/>
        })
        : (<p>Your cart is currenty empty!</p>)
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({cart: { cartItems}}) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown);