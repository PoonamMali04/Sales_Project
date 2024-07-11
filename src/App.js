
import './App.css';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Product from './Component/Product';
import Sales from './Component/Sales';
import Sales_Exp from './Component/Sales_Exp';

function App() {
  return (
    <div className="App">

      <>
        <BrowserRouter>
          
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/sales' element={<Sales />} />
            <Route path='/sales_exp' element={<Sales_Exp />} />


          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
