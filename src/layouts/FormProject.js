import './FormProject.css'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';


import axios from "axios";


import { BsFillCheckCircleFill } from 'react-icons/bs'



function FormProject() {

   


    const navigate = useNavigate()



    const [data, setData] = useState([])

    const [nameProject, setNameProject] = useState()

    const [nameProject2, setNameProject2] = useState()

    const [orcamento, setOrcamento] = useState()

    const [orcamento2, setOrcamento2] = useState()

    const [categories, setCategories] = useState()

    const [categories2, setCategories2] = useState()


     useEffect(() => {
         axios.get('http://localhost:5000/categories')
             .then(response => {
                 console.log('Api dados', response.data)
                 setData(response.data)
             })

     }, [])

    




    function cadastrarForm(e) {

            e.preventDefault()

            axios.post('http://localhost:5000/categories', {

                nameProject,
                orcamento,
                categories,



            }).then(() => {
                    setTimeout(() => navigate("/projeto"), 2000);


                    


                })

                .then(() => {
                 
                    setNameProject2(nameProject)

                })

                .then(() => {
                 
                    setOrcamento2(orcamento)

                })

                .then(() => {
                 
                    setCategories2(categories)

                })

    }

    return (


        <div>


            <form onSubmit={cadastrarForm}


                className='container-FormProject'>

                <div>
                    <div className="row mb-4 form-container">
                        <div className="col">
                            <div className="form">


                                <label className="form-label label-FormProject" htmlFor="nameProject">Nome do Projeto</label>
                                <input type="text" style={{ marginBottom: "20px" }} id='nameProject' name='nameProject'
                                    className="form-control input-FormProject"
                                    placeholder="Insira o nome do projeto"
                                    pattern='[A-Z a-z0-9]{5,16}' required onChange={((e) =>
                                        setNameProject(e.target.value)
                                    )} />

                            </div>

                        </div>
                        <div className="col">
                            <div className="form">
                                <label className="form-label label-FormProject" htmlFor="orcamento">Orçamento</label>
                                <input type="number" min={500} max={3333} id="orcamento" name='orcamento' className="form-control input-FormProject"
                                    placeholder="Insira o orçamento do projeto" required onChange={((e) => {
                                        setOrcamento(e.target.value)
                                    })} />

                            </div>

                            <div>
                                <select className="form-select select-FormProject" onChange={((e) => { setCategories(e.target.value) })} defaultValue={'DEFAULT'} name='categoriesName' id='categoriesName' aria-label="Default select example">
                                    <option value="DEFAULT" disabled>Selecione uma opção</option>

                                    <option value={'Infra'}>Infra</option>
                                    <option value={'Design'}>Design</option>
                                    <option value={'Planejamento'}>Planejamento</option>
                                    <option value={'Desenvolvimento'}>Desenvolvimento</option>

                                </select>

                            </div>
                        </div>
                    </div>






                    <button className="btn btn-block mb-4 button-FormProject-style">Cadastrar</button>






                    {nameProject2 && orcamento2 && categories2 && (

                        <div className="alert alert-success container-alert-FormProject" role="alert">
                            <BsFillCheckCircleFill className='icon-FormProject    '></BsFillCheckCircleFill> Projeto cadastrado com sucesso!!
                        </div>
                    )}


















                </div>
            </form>

        </div>

    )

}
export default FormProject;

