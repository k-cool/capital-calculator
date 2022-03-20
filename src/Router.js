import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.P';

export default function Router(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
