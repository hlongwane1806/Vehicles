import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({preloader,children}) {
    return (
        <div className={preloader ? 'preloader':''}>
                <Navbar/>
                <main> {children}</main>
                <Footer />
        </div>
    )
}

export default Layout;
