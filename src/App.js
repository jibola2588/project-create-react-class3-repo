import {Routes,Route,Link} from 'react-router-dom'
import {Home} from './pages/Home'
import {People} from './pages/People'
import {Detail} from './pages/Detail'


function App() {
  return (
    <div className="App">
      <nav className="py-2 px-4"style={{ display:'flex',gap:'30px',marginBottom:'40px',borderBottom:'1px solid gray'}} > 
          <Link to="/">Home</Link>
          <Link to="/people">People</Link>
          {/* <Link to="/detail">Detail</Link> */}
      </nav>
    <Routes>
       <Route path = "/"  element = { <Home />} />
       <Route path = "/people"  element = { <People />} />
       <Route path = "/people/:id"  element = { <Detail />} />
    </Routes> 
    </div>
  );
}

export default App;
