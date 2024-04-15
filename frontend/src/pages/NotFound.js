import React from 'react';
import notfound from '../images/notfound.jpeg';

const NotFound = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: 'center', backgroundImage: `url(${notfound})`, width: '100vw', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
                <h1 style={{ fontSize: '100px', color: 'rgb(91 33 182)' }}>404 - Not Found!</h1>
                <p style={{ fontSize: '24px', color: 'white' }}>Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
    )
}

export default NotFound