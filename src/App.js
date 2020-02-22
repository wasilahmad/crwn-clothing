import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sing-in-and-sign-up/sign-in-and-sign-up.component';

// firebase auth service
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
  
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
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
            <Route path='/sign-in' component={SignInAndSignUpPage} />
          </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
