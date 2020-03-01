import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CustomButtom from '../custom-button/custom-button.component';


const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_iaklA5aFr5beZgQJoFrdpDRa00VYBjgY8T';

    const onToken = (token) => {
        console.log('Payment Token:', token);
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey} 
        ComponentClass="div">
            <CustomButtom>Pay Now</CustomButtom>
        </StripeCheckout>
    );
}

export default StripeButton;
