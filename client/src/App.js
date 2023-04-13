import logo from './logo.svg';
import './App.css';
import React from "react";
import MaterialList from "./Components/MaterialList/MaterialList"
import Temp from "./Modules/Temp"
import { Route, Routes, Navigate } from "react-router-dom";
import MaterialDetails from "./Modules/MaterialDetails";
function App() {

  return (
    <div className="container app-container ">
        <Routes>
            <Route
                path="/"
                element={
                <div className="Parent_div">
                    <MaterialList />
                    <MaterialDetails/>
                </div>
                }
            ></Route>
            <Route
                path="/:id"
                element={
                    <div className="Parent_div">
                        <MaterialList />
                        <MaterialDetails/>
                    </div>
                }
            ></Route>
        </Routes>
    </div>
  );
}

export default App;
