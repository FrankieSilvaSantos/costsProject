import './Home.css';
import { Link } from 'react-router-dom';


function Home() {

    return(    
    
    
    <>
        <h2 className='titulo-style'>Bem-vindo ao <span className="span-titulo-style">Costs</span></h2>

        <p className='paragrafo-home'>Como gerenciar seus projetos agora mesmo!!</p>

        <section className='container-button-home'>
            
        <Link  to={'./novoprojeto'}><button type="button" className="btn button-home-style">Criar Projeto</button></Link>
        </section>


        <section className='container-img-home'>
        <img src='./img/savings.svg' className='img-home'></img>
        </section>
    </>
    
    )
}

export default Home;

