import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectShopCollection } from '../../redux/shop/shop.selectors'; 

import CollectionPreview from '../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

const CollectionOverview = ({collection}) => {
    return (
        <div className="collection-overview">
            {collection.map(({id, ...otherCollectionProps}) => {
                return (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                )
            })}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collection: selectShopCollection
})

export default connect(mapStateToProps)(CollectionOverview);
