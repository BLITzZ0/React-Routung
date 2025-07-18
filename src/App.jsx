import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import { Suspense } from "react";
// import {Dashboard} from "./components/Dashboard";
// import Landing from "./components/landing";

//below we have implememtned the lazy loading 
const Dashboard = React.lazy(()=> import('./components/Dashboard'));
const Landing = React.lazy(()=> import('./components/landing'));

function App() {
  return (
    <div>
    <BrowserRouter> 
    <Appbar/>
      <Routes>
        {/* To implement the lazy loading we should use the Suspense API */}
        <Route path="/dashboard" element={<Suspense fallback={"Loading..."}> <Dashboard /></Suspense>} />
        <Route path="/" element={<Suspense fallback={"Loading ..."}><Landing /></Suspense>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const Appbar = React.memo(function Appbar(){
  const navigate = useNavigate();

  return (
    <div >
        <button onClick={()=>{navigate("/")}}>Landing</button>
        <button onClick={()=>{navigate("/dashboard")}}>Dashboard</button>
    </div>
  )
});

export default App;
