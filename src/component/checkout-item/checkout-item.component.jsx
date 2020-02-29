import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem: {imageUrl, name, price, quantity}}) => {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{price}</span>
            <span className='price'>{quantity}</span>
            <div className='remove-button'>&#10005;</div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CheckoutItem);
