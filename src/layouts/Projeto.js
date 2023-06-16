import './Projeto.css'
import Messages from './Messages';
import FormProject from './FormProject';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


function Projeto() {




    return (

        <>

           
                <h1 className="titulo-projeto">Meus Projetos</h1>

                <section className='container-projeto'>


                <Messages></Messages>
                <button type="button" className="btn button-projeto-style">Criar Projeto</button>
            </section>
        </>

    )
}

export default Projeto;