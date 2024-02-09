import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Listado from './pages/Listado'
import Acerca from './pages/Acerca'
import Item from './components/Item'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/list' element={< Listado />}></Route>
          <Route exact path='/list/:id' element={<Item />}></Route>
          <Route exact path='/about' element={< Acerca />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
