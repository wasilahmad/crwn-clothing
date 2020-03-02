import React from 'react';
import { Route } from 'react-router-dom';
import './shop.styles.scss';

import CollectionOverview from '../../component/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


class Shop extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot( async snapshot => {
            console.log(snapshot);
            // to check converted firebase shop collections data
            convertCollectionsSnapshotToMap(snapshot);
        })
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

export default Shop;
