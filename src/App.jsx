import React from 'react';
import {Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Parent from './pages/Parent';



const App = () => {
  return (
    <div>
      <Parent />
  
      {/* <nav className='flex bg-indigo-400 text-white py-4 px-4 gap-4 cursor-pointer'>
          <Link to='/'>
                Home
          </Link>
          <Link to='/about'>
                About
          </Link>
          <Link to='/contact'>
               Contact
          </Link>
      </nav>
    
      
      <Routes>
         <Route path = '/' element= {<Home />} />
         <Route path = '/about' element= {<About />} />
         <Route path = '/contact' element= {<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;
