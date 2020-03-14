import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './shop.styles.scss';

// with spinner HOC
import WithSpinner from '../../component/with-spinner/with-spinner.component';

import CollectionOverview from '../../component/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

// call collectionOverview and CollectionPage component with spinner
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class Shop extends React.Component {
    state = {
        loading: true
    };

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

            // to hide spinner after collection data loaded
            this.setState({ loading:false });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
    }

    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);
