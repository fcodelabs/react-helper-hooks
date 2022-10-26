import * as React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import UseWindowSizeComponent from "./components/UseWindowSizeComponent/UseWindowSizeComponent";
import UseLocalStorage from "./components/UseLocalStorageComponent/UseLocalStorageComponent";
import Home from "./containers/Home/Home";


function App(): JSX.Element {

  return (
    <div className="App">
      <header className="App-header">
       <h1 style={{margin: 0, padding: 0}}>React Helper Hooks</h1>
       <p>@fcodelabs/react-helper-hooks</p>
      </header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-window-size" element={<UseWindowSizeComponent />}/>
          <Route path="/use-local-storage" element={<UseLocalStorage />}/>
      </Routes>
    </div>
  );
}

export default App;
