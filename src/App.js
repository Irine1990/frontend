
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Transaction from './components/Transaction';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/transaction" element={<Transaction />} />
         
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
