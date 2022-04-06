import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Volunteer from './component/Volunteer/Volunteer';

function App() {
  return (
    <div className="App">
     <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/volunteers' element={<Volunteer></Volunteer>}></Route>


     </Routes>
    </div>
  );
}

export default App;
