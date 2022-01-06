import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.page';

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
