import { createSelector } from 'reselect';

// input selector
const selectCart = state => state.cart

// output selector for cartItems[]
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

// output selector for cartItemsCount
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
);