import './FormProject.css'
import { useState } from 'react'
import { useEffect } from 'react'
import {UseHistory} from 'react-router-dom';
import axios from 'axios';
import React from 'react';

function FormProject() {

       


    
   
   
    
     const [nameProject,setNameProject] = useState()

     const [nameProject2,setNameProject2] = useState()

     const [orcamento,setOrcamento] = useState()

     const [orcamento2,setOrcamento2] = useState()

     const [categories,setCategories] = useState()

     const [categories2,setCategories2] = useState()

 
    


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
                setNameProject2(nameProject)
                 console.log(response)
         })


         .then(response => {
            setOrcamento(orcamento)
            setOrcamento2(orcamento)
            console.log(response)
         })

         .then(response => {
            setCategories(categories)
            setCategories2(categories)
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
        placeholder="Insira o nome do projeto"
        pattern='[A-Za-z]{5,16}' required onChange={((e) => 
        setNameProject(e.target.value)
        )}/>
        
      </div>   

    </div>
    <div className="col">
      <div className="form">
      <label className="form-label label-FormProject" htmlFor="orcamento">Orçamento</label>
        <input type="number" min={500} max={3333} id="orcamento" name='orcamento'   className="form-control input-FormProject"
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
         {nameProject2 && orcamento2 && categories2 && (
        
   
        <p className='p-FormProject-ok'>Cadastrado com Sucesso!! c:</p>
       
         )}
         

         

  
  </div>
</form>
        </>

    )
}


export default FormProject