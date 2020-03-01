import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collection
);

const COLLECTION_ID_MAP = {
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
};

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollection],
    collection => collection.find( collectionItem =>
        collectionItem.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
);