import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './layout.scss';
import Head from './head';

function Layout(props) {
    return (
        <main>
            <Head/>
            <Navbar/>
            <div className="body">
            {
                props.children
            }
            </div>
            <Footer/>
        </main>
    )
}

export default Layout
