import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import { Toaster } from "react-hot-toast";


function App() {
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}/>
      </Routes> 
      </BrowserRouter>
      <Toaster></Toaster>
  </div>
}

export default App;
