import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import './Editar.css';


function Editar() {

    const navigate = useNavigate()


    const [data, setData] = useState([])

    const params = useParams()

    const [post, setPost] = useState({
        nameProject: '',
        orcamento: '',
        categories: '',

    })

    const [post2, setPost2] = useState()



    useEffect(() => {



        axios.get(`http://localhost:5000/categories`)
            .then(response => {
                console.log('Api dados', response.data)
                setData(response.data)

            })

    }, [])



    function handleInput(e) {
        setPost({ ...post, [e.target.name]: e.target.value })
    }



    function editar(e) {

        e.preventDefault()



        axios.put(`http://localhost:5000/categories/${params.id}`, post)
            .then((response) => {
                console.log(response.data)
            })

            .then(() => {
                setPost2(post)
            })

            .then(() => setTimeout(() => navigate('/projeto'), 1000))




    }

    return (

        <>

            
            <h1 className='titulo-editar'>Editar Projeto</h1>
            
            

            <form onSubmit={editar}


                className='container-FormProject'>

                <div>
                    <div className="row mb-4 form-container">
                        <div className="col">
                            <div className="form">


                                <label className="form-label label-FormProject" htmlFor="nameProject">Nome do Projeto</label>
                                <input type="text" style={{ marginBottom: "20px" }} id='nameProject' name='nameProject'
                                    className="form-control input-FormProject"
                                    placeholder="Insira o nome do projeto"
                                    pattern='[A-Z a-z0-9]{5,16}' required onChange={handleInput} />

                            </div>

                        </div>
                        <div className="col">
                            <div className="form">
                                <label className="form-label label-FormProject" htmlFor="orcamento">Orçamento</label>
                                <input type="number" min={500} max={3333} id="orcamento" name='orcamento' className="form-control input-FormProject"
                                    placeholder="Insira o orçamento do projeto" required onChange={handleInput} />

                            </div>

                            <div>
                                <select className="form-select select-FormProject" onChange={handleInput} defaultValue={'DEFAULT'} name='categories' id='categories' aria-label="Default select example">
                                    <option value="DEFAULT" disabled>Selecione uma opção</option>

                                    <option value={'Infra'}>Infra</option>
                                    <option value={'Design'}>Design</option>
                                    <option value={'Planejamento'}>Planejamento</option>
                                    <option value={'Desenvolvimento'}>Desenvolvimento</option>

                                </select>

                            </div>
                        </div>
                    </div>






                    <button className="btn button-messages-style">
                        <BiEdit className='icon-button-messages'></BiEdit> Editar</button>


                    {post2 && (

                        <div className="alert alert-success container-alert-editar" role="alert">
                            <BsFillCheckCircleFill className='icon-editar'></BsFillCheckCircleFill> Projeto editado com sucesso!!
                        </div>
                    )}






















                </div>
            </form >


        </>

    )
}


export default Editar;