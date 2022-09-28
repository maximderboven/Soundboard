/* eslint-disable jsx-a11y/img-redundant-alt */
import {Soundboards} from "./components/Soundboards";
import {Soundboard} from "./components/Soundboard";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/soundboards/" element={<Soundboards />} />
        <Route path="/" element={<Soundboards />} />
        <Route path="/soundboards/:id" element={<Soundboard/>}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
