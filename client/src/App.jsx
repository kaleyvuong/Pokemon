import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';

const Home = lazy(() => import('./components/Home'));

const App = () => {
  return (
    <Router basename='/'>
      <Suspense fallback={<div>Loading...</div>}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '90vh'}}>
        <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Routes>
            <Route path="/" element={
              <Home />
              }/>
          </Routes>
        </div>
      </div>
      </Suspense>
    </Router>
  );
};

export default App;