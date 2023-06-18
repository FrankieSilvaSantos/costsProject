import './App.css';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './layouts/Home';
import Contato from './layouts/Contato';
import Companhia from './layouts/Companhia';
import NovoProjeto from './layouts/NovoProjeto';
import Footer from './layouts/Footer';
import Projeto from './layouts/Projeto';
import Editar from './layouts/Editar';
import Users from './layouts/Users';
import NavbarUsers from './layouts/NavbarUsers';
import HomeUsers from './layouts/HomeUsers';




function App({props}) {


  const id = localStorage.getItem('id')
  const params = useParams()
  
  return (
  
 
<Router>
  
   <Navbar></Navbar>


   <Routes>
   
    <Route path={`/${id}`} element={<Home></Home>}></Route>

    <Route path='/contato' element={<Contato></Contato>}></Route>

    <Route path='/companhia' element={<Companhia></Companhia>}></Route>

    <Route path='/novoprojeto' element={<NovoProjeto></NovoProjeto>}></Route>

    <Route path='/projeto' element={<Projeto></Projeto>}></Route>

    <Route path='/editar/:id'    element={<Editar></Editar>}></Route>

    <Route path={`/users/:users`} element={<Users></Users>}></Route>

    <Route path='homeusers' element={<HomeUsers></HomeUsers>}></Route>


   

    
   </Routes>
   <Footer></Footer> 
   </Router>
 


 


  )
}

export default  App;
