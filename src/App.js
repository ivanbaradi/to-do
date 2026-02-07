import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import About from "./pages/About";
import List from './pages/List'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AddItem from './pages/AddItem';

export default function App() {

  const [list, setList] = useState([]) // list of items
  const [idCounter, setIdCounter] = useState(0) // tracks items by id
  const {pathname} = useLocation() // will need to fetch current pathname whenever web page gets reloaded

  return (
    <div className="App">
      <NavBar pathname={pathname}/>
      <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/add-item' element={<AddItem setList={setList} idCounter={idCounter} setIdCounter={setIdCounter}/>}/>
          <Route path='/list' element={<List list={list} setList={setList}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
