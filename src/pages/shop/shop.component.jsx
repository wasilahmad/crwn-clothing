/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../component/collection-preview/collection-preview.component';

export class Shop extends Component {
    constructor() {
        super();
        
        this.state = {
            collection: SHOP_DATA
        }
    }

    render() {
        return (
            <div className="shop-page">
                {this.state.collection.map(({id, ...otherCollectionProps}) => {
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    )
                })}
            </div>
        );
    }
}

export default Shop;
