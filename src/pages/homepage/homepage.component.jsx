import React from 'react';
import './homepage.styles.scss';
import Directory from '../../component/directory/directory.component';

const HomePage = () => {
    return (
        <div className='homepage'>
            <h1>Welcome to my Homepage</h1>
            <Directory />
        </div>
    );
}

export default HomePage;
