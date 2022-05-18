import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addpost from './Component/Addpost';
import Searchpost from './Component/Searchpost';
import Viewall from './Component/Viewall';
import Nav from './Component/Nav';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Addpost/>}/>
      <Route path='/search' exact element={<Searchpost/>}/>
      <Route path='/view' exact element={<Viewall/>}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
