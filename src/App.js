import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ListProvider } from './context/ListContext';
import About from "./pages/About";
import List from './pages/List'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AddItem from './pages/AddItem';

export default function App() {

  return (
    <ListProvider>
      <NavBar />
      <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/add-item' element={<AddItem />}/>
          <Route path='/list' element={<List />}/>
      </Routes>
      <Footer />
    </ListProvider>
  )
}
