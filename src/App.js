import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignUp from "./Screens/UserAuth/SignUp";
import SIgnIn from "./Screens/UserAuth/SIgnIn";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/" element={<SIgnIn/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
