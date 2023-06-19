
import React from 'react'
import Header from './Header'
import WebFont from 'webfontloader';
function App() {
    WebFont.load({
        google: {
            families: ['Lato']
        }
    });
    return (
        <div className="app">
            <Header />
        </div>
    );
}
export default App;
