import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
 
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from './header.styles';


const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionContainer>
                <OptionLink  to='/shop'>
                    SHOP
                </OptionLink>
                {
                    currentUser ? (<OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>) : (<OptionLink  to='/sign-in'>SIGN IN</OptionLink> )
                }
                <OptionLink to='/'>
                    CONTACT
                </OptionLink>
                <CartIcon />
            </OptionContainer>
            {
                hidden ? null : <CartDropdown />
            }               
        </HeaderContainer>
    );
}

// 1. using indiviusal selector, in this case state are getting repeatative for all selector
// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

// 2. using createStructuredSelector() method and state object will be automatically attached
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
