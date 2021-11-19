import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

//Components
import Footer from './Components/Footer';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/Login/*" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
