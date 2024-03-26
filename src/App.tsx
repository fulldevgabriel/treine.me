import React from 'react'
import './styles/main.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='main-card'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
