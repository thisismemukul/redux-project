import React from 'react';
import "./App.scss";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Header, Footer, PageNotFound, Home, MovieDetail } from './components';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact>
            <Route index element={<Home type="random" />} />
            <Route path="trending" element={<Home type="trend" />} />
            <Route path="subscriptions" element={<Home type="sub" />} />
            <Route path="movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App