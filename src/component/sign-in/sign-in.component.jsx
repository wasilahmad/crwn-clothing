import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in-styles.scss';

// firebase auth services
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export class SignIn extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email:'',
                password:''
            });
        }catch(error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className="buttons">                    
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
