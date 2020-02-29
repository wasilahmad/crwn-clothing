import { createSelector } from 'reselect';

// input selector
const selectCart = state => state.cart

// output selector for cartItems[]
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

// selector to cart.cartHidden
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

// output selector for cartItemsCount
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
);

// output selector for selectCartTotal
export const selectCartTotal= createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0)
);