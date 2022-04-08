import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Main from './component/Main/Main';
import Volunteer from './component/Volunteer/Volunteer';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/main' element={<Main></Main>}></Route>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/volunteers' element={<Volunteer></Volunteer>}></Route>


     </Routes>
    </div>
  );
}

export default App;
