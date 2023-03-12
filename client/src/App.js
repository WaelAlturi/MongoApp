//import LIBS
import {BrowserRouter,Routes, Route} from 'react-router-dom'
//import App Pages
import Dashbord from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
   <BrowserRouter>
   <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Dashbord' element={<Dashbord/>} />
        <Route path='/Register' element={<Register/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
