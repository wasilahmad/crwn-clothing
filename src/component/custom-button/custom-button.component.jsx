import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return (
        <button className={`${inverted ? 'inverted' : '' } ${isGoogleSignIn ? 'btn-google-sign-in' : '' } custom-button`} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;
