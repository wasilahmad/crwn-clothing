import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sing-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

// firebase auth service
import { auth, createUserProfileDocument, addCollectionsAndDocuments } from './firebase/firebase.utils';
import { connect } from 'react-redux';

// memoized selectors to enhance performance 
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUser } from './redux/user/user.action';
import { selectCollectionForPreview } from './redux/shop/shop.selectors';

class App extends React.Component {
  
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionArray } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if( userAuth ) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {          
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      // store user into database
      // createUserProfileDocument(userAuth);

      // store user into local state      
      setCurrentUser(userAuth);
      // console.log("User Auth: ", userAuth);
      addCollectionsAndDocuments('collections', collectionArray.map(({title, items}) => ({title, items})));
    });

  }

  // to prevent memory leak when component not mounted
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">        
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={Shop} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/sign-in' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArray: selectCollectionForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
