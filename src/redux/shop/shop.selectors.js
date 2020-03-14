import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectShopCollection],
    collections => collections ? Object.keys(collections).map( key => collections[key]) : [] // to convert collection object, back to array of object  
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollection],
    collections => (collections ? collections[collectionUrlParam] : null)
);