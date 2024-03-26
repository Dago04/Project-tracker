import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
export default function App() {
    return (
        <>
            <Navbar />
            <section>
                <div className='background-image'>
                </div>
                <Hero />
            </section>
        </>
    )
}
