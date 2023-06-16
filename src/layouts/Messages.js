import './Messages.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Projeto from './Projeto';
import FormProject from './FormProject';
import axios from 'axios';


function Messages({ props }) {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(response => {
                console.log('Api dados', response.data)
                setData(response.data)
            })

    }, [])



    return (

        <section className='container-messages'>
            {/* <p className='paragrafo-messages'>Projetos...</p> */}


            < ul className="list-group list-messages-positioning">
                {data.map((items) => {

                  return  <li className="list-group-item list-messages-style">
                    Nome: {items.nameProject} <br></br> Orçamento: R${items.orcamento}</li>
                })}




            </ul>

        </section >
    )
}

export default Messages;