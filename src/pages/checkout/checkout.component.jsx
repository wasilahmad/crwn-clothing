import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../component/checkout-item/checkout-item.component';
import StripeButton from '../../component/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, total}) => {
    console.log("\n\n Test Card:\n","NUM: 4242 4242 4242 4242 \n", "EXP: 15/22 \n", "CVV: 143 \n\n");
    return (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <div className="pay-summary">   
            {
                total ? (<StripeButton price={total} />) : null
            } 
            <div className='total'>TOTAL: ${total}</div>
        </div>
    </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
