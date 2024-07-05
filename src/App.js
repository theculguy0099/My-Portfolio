import React, { Suspense, useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import indexRoutes from './routes/index';
import Preloader from './components/preloader';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Router basename={process.env.PUBLIC_URL}>
            <Routes>
              {indexRoutes.map((route, key) => (
                <Route path={route.path} element={route.component} key={key} />
              ))}
            </Routes>
          </Router>
        </Suspense>
      )}
    </>
  );
}

export default App;
