import React from 'react'
import '../assets/css/header.css'

export default function Header() {
    return (
        <header className='light'>
            <menu>
                <ul>
                    <li><span>Welcome</span></li>
                    <li><span>About Us</span></li>
                    <li><span>What we do</span></li>
                    <li><span>Our portfolio</span></li>
                    <li><span>Contact us</span></li>
                </ul>
            </menu>
            <section>
                <h1>Krisztina Csanyi</h1>
                <h2>Frontend developer</h2>
            </section>
        </header>
    )
}
