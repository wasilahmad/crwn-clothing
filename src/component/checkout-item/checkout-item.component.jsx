import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { removeItem } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, removeCartItem}) => {
    const { imageUrl, name, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{price}</span>
            <span className='price'>{quantity}</span>
            <div className='remove-button' onClick={() => removeCartItem(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeCartItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
