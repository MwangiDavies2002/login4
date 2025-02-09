import './App.css';
import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
import Signup from './Components/Signup.jsx';
import Login from './Components/Login.jsx';

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;