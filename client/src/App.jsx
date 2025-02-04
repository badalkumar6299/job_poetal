import { Route, Routes } from 'react-router-dom';
import Applyjob from './pages/Applyjob';
import Applications from './pages/Applications';
import Home from './pages/home'; // Updated to match the filename case

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/apply-job' element={<Applyjob />} />
        <Route path='/applications' element={<Applications />} />
      </Routes>
    </div>
  );
};

export default App;
