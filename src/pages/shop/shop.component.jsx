import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './shop.styles.scss';

import CollectionOverview from '../../component/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';


class Shop extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
            // console.log(snapshot);
            
            // to check converted firebase shop collections data
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            // console.log(collectionsMap);

            // call dispath props here to update collections
             updateCollections(collectionsMap);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
    }

    render(){
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);
