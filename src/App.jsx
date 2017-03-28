import React from 'react'
import Navbar from 'COMPONENT/Navbar/'

const App = ({ children, location }) => (
    <div>
        <Navbar location={location} />
        <div className='container'>
            {children}
        </div>
    </div>
)

export default App
