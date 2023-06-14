import './FormProject.css'
import { useState } from 'react'
import { useEffect } from 'react'

function FormProject() {
    const [categories,setCategories] = useState([])

    function fetchData() {



    fetch("http://localhost:5000/categories")

    .then(response => {
        return response.json()
    })

    .then(data => {
        setCategories(data)
    })

}
    useEffect(() => {
        fetchData()
    },[])

    
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
        <input type="text" style={{marginBottom:"20px"}} id="name" name='name' className="form-control input-FormProject" placeholder="Insira o nome do projeto" required />
        
      </div>    
    </div>
    <div className="col">
      <div className="form">
      <label className="form-label label-FormProject" htmlFor="orcamento">Orçamento</label>
        <input type="number" id="orcamento" name='orcamento' className="form-control input-FormProject" placeholder="Insira o orçamento do projeto" required />
        
      </div>
        
      <div>
      <select className="form-select select-FormProject" defaultValue={'DEFAULT'} name='category-id' aria-label="Default select example">
  <option  value="DEFAULT" disabled>Selecione uma opção</option>
  {categories.map((category) => (
    <option value={category.id} key={category.id}>{category.name}</option>
  ))}
</select>

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