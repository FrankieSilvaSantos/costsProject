import './Users.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { BiDizzy, BiRefresh } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import App from '../App';



// eslint-disable-next-line react-hooks/rules-of-hooks



function Users() {

    const navigate = useNavigate()


  
   
    





    const [data, setData] = useState([])

    const [error, setError] = useState(true)

    const [success, setSuccess] = useState(false)

    const [users, setUsers] = useState()

    const [users2, setUsers2] = useState()

    const [password, setPassword] = useState()

    const [password2, setPassword2] = useState()

  




    function handleClick(e) {

        e.preventDefault()

      
        axios.get(`http://localhost:5000/cadastro`)


            .then((response) => {
                setData(response.data)


            })
            .then(() => setUsers2(users))
            .then(() => setPassword2(password))



            .then(() => {



                data.map((items) => {

                    if (items.users !== users2 && items.password !== password2) {
                        console.log('erro ao logar');
                        setTimeout(() => window.location.reload(), 1000);
                        return setError(false)


                    }
                })

            })

            .then(() => {


                data.map((items) => {
                   
                    if (items.users === users2 && items.password === password2) {
                        const item = items.users
                        // for (var i = 0; i < item.length; i++) {
                        //     var current = item[i]
                            
                        // }

                     
                        console.log('logado');
                        console.log(item)
                        localStorage.setItem('id',items.id)
                        localStorage.setItem('user',item)
                  
                        setTimeout(() => navigate(`/${localStorage.getItem('id')}`), 1000);
                        
                     return   setSuccess(true)
                   
                     
                    }

                })


            })






    }
















    return (
        <>

            <h1 className='titulo-users'>Faça seu Login</h1>

            <form onSubmit={handleClick} className='container-form-users'>
                <section className='container-inputs-users2'>
                    <div className="form mb-4 container-inputs">
                        <label style={{ fontWeight: "bold" }} className="form-label label-users" htmlFor="users">Login</label>
                        <input type="text" id="users" name='users'
                            className="form-control input-users" pattern='[A-Za-z0-9]+' minLength={5} maxLength={15} required onChange={(e) => setUsers(e.target.value)} />

                    </div>
                </section>


                <section className='container-inputs-users2'>
                    <div className="form mb-4 container-inputs">
                        <label style={{ fontWeight: "bold" }} className="form-label label-users" htmlFor="password">Senha</label>
                        <input type="password" id="password" name='password'
                            className="form-control input-users" maxLength={8} required onChange={(e) => setPassword(e.target.value)} />

                    </div>
                </section>

            

                <section className='container-button-users'>
                    <button className="btn btn-primary btn-block button-users">Entrar</button>



                </section>





            </form >

            {success && (
                <div className='container-alert-users2'>  <div className="alert alert-success container-alert-users" role="alert">
                    <BsFillCheckCircleFill className='icon-users'></BsFillCheckCircleFill> Projeto cadastrado com sucesso!!

                </div>
                </div>
            )}
            {!error && (

                <div className='container-alert-users2'> <div className="alert alert-danger container-alert-users" role="alert">
                    <BiDizzy className='icon-error-users '></BiDizzy> Login ou senha incorretos!!
                </div>
                </div>
            )}




        </>

    )

}

export default Users;

