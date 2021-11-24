import React from 'react';
import Hero from './Hero';
import Footer from './Footer';

export default function Layout({children}) {
    return (
        <div>
            <Hero />
            {children}
            <Footer />
        </div>
    )
}
