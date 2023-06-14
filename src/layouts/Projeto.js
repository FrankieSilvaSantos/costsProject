import './Projeto.css'
import Messages from './Messages';
import FormProject from './FormProject';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


function Projeto() {

   
  

    return(

        <>
            <h1 className="titulo-projeto">Meus Projetos</h1>


        

        <Messages></Messages>
        
            
        </>

    )
}

export default Projeto;