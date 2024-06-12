import logo from './logo.svg';
import './App.css';
import Form from './component/form';
import { Route, Routes } from 'react-router-dom';
import Table from './component/table';
import FormUpdate from './component/formUpdate';
import Home from './component/Home';
function App() {
 return(
  <div>
    
    <Routes>
    <Route path ='/' element={<Home/>} ></Route>
    <Route path='/form' element={<Form/>}></Route>
      <Route path='/table' element={<Table/>}></Route>
      <Route path='/update' element={<FormUpdate/>}></Route>
    </Routes>
  </div>
 )
}

export default App;
