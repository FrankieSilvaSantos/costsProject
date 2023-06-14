import './FormProject.css'

function FormProject() {

    function cadastrarForm(){


 }
    return(

        <>
            <form onSubmit={cadastrarForm} className='container-FormProject'>

        <div>
  <div className="row mb-4 form-container">
    <div className="col">
      <div className="form">
      <label className="form-label label-FormProject" htmlFor="nome">Nome do Projeto</label>
        <input type="text" style={{marginBottom:"20px"}} id="nome" className="form-control input-FormProject" placeholder="Insira o nome do projeto" required />
        
      </div>    
    </div>
    <div className="col">
      <div className="form">
      <label className="form-label label-FormProject" htmlFor="orcamento">Orçamento</label>
        <input type="number" id="orcamento" className="form-control input-FormProject" placeholder="Insira o orçamento do projeto" required />
        
      </div>
    </div>
  </div>

  
  


  
  <button type="submit" className="btn btn-block mb-4 button-FormProject-style">Cadastrar</button>


  
  </div>
</form>
        </>

    )
}

export default FormProject