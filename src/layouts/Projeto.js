import './Projeto.css'
import Messages from './Messages';
import FormProject from './FormProject';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Projeto() {




    return (

        <>

            <section className='container-projeto'>
                <h1 className="titulo-projeto">Meus Projetos</h1>
                <Link to={'/novoprojeto'}><button type="button" className="btn button-projeto-style">Criar Projeto</button></Link>
            </section>


            <Messages></Messages>


        </>

    )
}

export default Projeto;