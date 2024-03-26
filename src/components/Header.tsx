import React from 'react'
import '../styles/Header.css'

export default function Header() {
    return (
        <div className='header-container'>
            <div className='title-treine'>
                <h1>treine.me</h1>
            </div>
            <div className='sub-titles'>
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Treine</a>
            </div>
        </div>
    )
}
