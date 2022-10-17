import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Ho from './component/Ho';
 import Cont from './component/Cont';
import CRUD from './component/CRUD';
// import CRUD.css from './component'




function App() {
  return (
    <div>
       <BrowserRouter> 
        <Routes>
          <Route path='/' element = {<Ho/>} ></Route> 
           <Route path='/CRUD' element = {<CRUD/>} ></Route> 
          <Route path='/Cont' element = {<Cont/>} ></Route> 
          {/* <Route path='/Stud/New' element={<New/>}></Route> */}
          
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;