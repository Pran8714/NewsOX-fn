
import './App.css';
import React from 'react';
import Navbar from './Component/Navbar';
import { useState } from 'react';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";

function App() { 
  const [progress, setProgress] = useState(0)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
      <Route exact path="/business" element={<News setProgress={setProgress} key="business" country="in" category="business"/>}></Route>
      <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" country="in" category="entertainment"/>}></Route>
      <Route exact path="/" element={<News setProgress={setProgress}  key="general" country="in" category="general" />}></Route>
      <Route exact path="/science" element={<News setProgress={setProgress}  key="science" country="in" category="science"/>}></Route>
      <Route exact path="/health" element={<News setProgress={setProgress}  key="health" country="in" category="health"/>}></Route>
      <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" country="in" category="sports"/>}></Route>
      <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" country="in" category="technology"/>}></Route>
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
