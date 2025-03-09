import { Route, Routes } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import Applyjob from './pages/Applyjob';
import Applications from './pages/Applications';
import Home from './pages/home'; // Updated to match the filename case

const App = () => {
  const {showRecruiterLogin} = useContext(AppContext)
  return (
    {showRecruiterLogin && <RecruiterLogin/>}
    <AppContextProvider>
      <div>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/apply-job/:id' element={<Applyjob />} />
        <Route path='/applications' element={<Applications />} />
        </Routes>
      </div>
    </AppContextProvider>
  );
};

export default App;
