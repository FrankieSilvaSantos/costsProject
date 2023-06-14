import './FormProject.css'
import { useState } from 'react'
import { useEffect } from 'react'
import {UseHistory} from 'react-router-dom';
import axios from 'axios';
import React from 'react';

function FormProject() {

       
    

    

   
    
     const [nameProject,setNameProject] = useState()

     const [orcamento,setOrcamento] = useState()

     const [categories,setCategories] = useState()

 
    


    function fetchData() {
        


    fetch("http://localhost:5000/categories")
    

    .then(response => {
        return response.json()
    })

    .then(data => {
        setCategories(data)
    })

    .then(data2 => {
        setNameProject(data2)
    })

    .then(data3 => {
        setOrcamento(data3)
    })

  

}
    useEffect(() => {
        fetchData()
    },[])

    
    function cadastrarForm(e){
        e.preventDefault()
       
            axios.post('http://localhost:5000/categories', {

                nameProject:nameProject,
                orcamento:orcamento,
                categories:categories
            })
        

         axios.post("http://localhost:5000/categories") 
         .then(response => {
                setNameProject(nameProject)
                 console.log(response)
         })


         .then(response => {
            setOrcamento(orcamento)
            console.log(response)
         })

         .then(response => {
            setCategories(categories)
            console.log(response)
         })


 }
 
    return(

        <>
            <form onSubmit={cadastrarForm} className='container-FormProject'>

        <div>
  <div className="row mb-4 form-container">
    <div className="col">
      <div className="form">


      <label className="form-label label-FormProject" htmlFor="nameProject">Nome do Projeto</label>
        <input type="text" style={{marginBottom:"20px"}} id="nameProject" name='nameProject' 
        className="form-control input-FormProject" 
        placeholder="Insira o nome do projeto" required onChange={((e) => 
        setNameProject(e.target.value)
        )}/>
        
      </div>   

    </div>
    <div className="col">
      <div className="form">
      <label className="form-label label-FormProject" htmlFor="orcamento">Orçamento</label>
        <input type="number" id="orcamento" name='orcamento'   className="form-control input-FormProject"
         placeholder="Insira o orçamento do projeto" required onChange={((e) => {
            setOrcamento(e.target.value)
         })}/>
        
      </div>
        
      <div>
      <select className="form-select select-FormProject" onChange={((e) => {setCategories(e.target.value)})} defaultValue={'DEFAULT'} name='categoriesName[]' id='categoriesName' aria-label="Default select example">
  <option  value="DEFAULT" disabled>Selecione uma opção</option>
  
    <option value={'Infra'}>Infra</option>
    <option value={'Design'}>Design</option>
    <option value={'Planejamento'}>Planejamento</option>
    <option value={'Desenvolvimento'}>Desenvolvimento</option>
  
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