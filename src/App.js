import React from 'react'
import BookForm from './components/BookForm'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='app'>
    <NavBar/>
    <main>
    <div className='container'>
    <BookForm/>
    </div>
    </main>
    <Footer/>
    </div>
  )
}

export default App