import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './Home';
import { MovieDetails } from './MovieDetails';

const AppRoutes= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/MovieDetails/:id" element={<MovieDetails/>} />
      </Routes>
    </BrowserRouter>
  );
};

export  {AppRoutes};
