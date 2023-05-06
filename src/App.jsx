import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Posting from './Pages/Posting';
import { ProtectRouter } from './Utils/ProtectRouter';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route element={<ProtectRouter />}>
        <Route path='/posting' element={<Posting />} />
      </Route>
    </Routes>
  );
}

export default App;
