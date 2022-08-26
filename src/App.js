import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Default from "./components/Default";
import  Delete  from "./components/Delete";
import Reset from "./components/Reset";
import Detection from "./components/Detection";
import AddGesture from "./components/AddGesture";
import Edit from "./components/Edit";
import Faq from "./components/Faq";


function App() {
  return (
    <>
      <Router>
        <div className="main">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="paths">
            <Routes>
              <Route exact path='/' element={<Login/>}></Route>
              <Route exact path="/helpapp" element={<Login />} />
              <Route exact path="/default" element={<Default />} />
              <Route exact path='/reset' element={<Reset />} />
              <Route exact path='/delete' element={<Delete />} />
              <Route exact path='edit' element={<Edit />} />
              <Route exact path='/detection' element={<Detection />} />
              <Route exact path='/addgesture' element={<AddGesture />} />
              <Route exact path='/faq' element={<Faq />} />
            </Routes>
          </div>
        </div>
      </Router> 
    </>
  );
}

export default App;

