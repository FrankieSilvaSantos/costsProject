import './Projeto.css'
import Messages from './Messages';
import { Link } from 'react-router-dom';

function Projeto() {




    return (

        <div className='container-projeto'>

            <section className='container-items'>
                <h1 className="titulo-projeto">Meus Projetos</h1>
                <Link to={'/novoprojeto'}><button type="button" className="btn button-projeto-style">Criar Projeto</button></Link>
            </section>

            <section className='container-messages'>
            <Messages></Messages>
            </section>

        </div>

    )
}

export default Projeto;