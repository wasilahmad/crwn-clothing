import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../component/collection-preview/collection-preview.component';

const Shop = ({collection}) =>  (
    <div className="shop-page">
        {collection.map(({id, ...otherCollectionProps}) => {
            return (
                <CollectionPreview key={id} {...otherCollectionProps} />
            )
        })}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collection: selectCollection
})

export default connect(mapStateToProps)(Shop);
