import React from 'react';
import { Route } from 'react-router-dom';
import './shop.styles.scss';

import CollectionOverview from '../../component/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';


const Shop = ({match}) =>  (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
);

export default Shop;
