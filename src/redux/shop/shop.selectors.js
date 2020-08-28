import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections[collectionUrlParam]
);

/*
    I have converted the shop data into an object thus the above code which is also followed by Yihua,
    can be used. If I want to make it run using the array shop data which was the original form, 
    then check codesandbox where yousaf helped me.
*/