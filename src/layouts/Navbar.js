import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {

    return(
        <>
            <nav class="navbar navbar-expand-lg nav-style">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src='./img/costs_logo.png' height={'50px'}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbar-positioning" id="navbarNav">
      <ul className="navbar-nav ul-style">
        <li className="nav-item">
          <Link className="nav-link anchor-style" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link anchor-style" to="/contato">Contato</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link anchor-style" to="/companhia">Companhia</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link anchor-style" to="/projeto">Projeto</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link anchor-style" to="/novoprojeto">Novo Projeto</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        </>
    )
}

export default Navbar;