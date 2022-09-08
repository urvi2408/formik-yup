import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Admin from "./Admin";
import User from "./User";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/user' element={<User/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
