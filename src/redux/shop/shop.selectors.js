import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collection
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollection],
    collection => collection[collectionUrlParam]
);