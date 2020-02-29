import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component.js';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch, ...otherProps}) => {
  // console.log('dropdown props:', otherProps);
  return (  
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
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

// if we omit mapDispatchToProps(), by default it will be pass to the connect() function as an argument
export default withRouter(connect(mapStateToProps)(CartDropdown));