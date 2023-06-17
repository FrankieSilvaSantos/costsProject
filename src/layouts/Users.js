import './Users.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { BiDizzy, BiRefresh } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom';

function Users() {

    const navigate = useNavigate()

   

   

    const [data, setData] = useState([])

    const [error, setError] = useState(false)

    const [success, setSuccess] = useState()

    const [users, setUsers] = useState()

    const [users2, setUsers2] = useState()

    const [password, setPassword] = useState()

    const [password2, setPassword2] = useState()

    // useEffect(() => {
    //     axios.get('http://localhost:5000/cadastro')
    //         .then((response) => {

    //             setData(response.data)
    //         })

    // }, [])




    //     setUsers('')
    //     setPassword('')
    //     setPassword2(password)
    //     setUsers2(users)


    // }
    // data.map((items) => {
    //     if(items.users === document.getElementsByName('users').value && items.password === document.getElementsByName('password').value) {

    //       console.log('logado')
    //     }
    //     return <div className="alert alert-success container-alert-FormProject" role="alert">
    //     <BsFillCheckCircleFill className='icon-FormProject'></BsFillCheckCircleFill> Projeto cadastrado com sucesso!!
    // </div>

    // })

    function handleClick(e) {

        e.preventDefault()



        axios.get(`http://localhost:5000/cadastro`)


            .then((response) => {
                setData(response.data)
                console.log(response.data)

            })
            .then(() => setUsers2(users))
            .then(() => setPassword2(password))



            .then(() => {

                // eslint-disable-next-line no-lone-blocks
                {
                    data.map((items) => {

                        if (items.users !== users && items.password !== password) {
                            console.log('erro ao logar');
                            setTimeout(() => window.location.reload(), 1000);
                            return setError(true)

                        } else {

                            console.log('logado');
                            setTimeout(() => navigate('/'), 1000);
                            return setSuccess(true)

                        }

                    })


                }
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

                {/* <div className="row mb-4">
                    <div className="col d-flex justify-content-center">

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                            <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                        </div>
                    </div>
                </div> */}

                {/* <div className="col">
      
      <a href="#!">Forgot password?</a>
    </div>
  </div> */}

                <section className='container-button-users'>
                    <button type='submit' className="btn btn-primary btn-block button-users">Entrar</button>



                </section>



                {/* {data.map((items) =>
                           { if(items.users === users2 && items.password === password2) {
                            return  <div key={items.id} className='container-alert-users2'>  <div  className="alert alert-success container-alert-users" role="alert">
                            <BsFillCheckCircleFill className='icon-users'></BsFillCheckCircleFill> Projeto cadastrado com sucesso!!
                         
                        </div>
                        </div>
                           }    */}
                {/* if(error === false) { 
                           
                           return <div key={items.id} className='container-alert-users2'> <div className="alert alert-danger container-alert-users" role="alert">
                           <BiDizzy className='icon-error-users '></BiDizzy> Login ou senha incorretos!!
                          </div>
                          </div>
                                }} 
     
                         )} */}




            </form >

            {success && (
                <div className='container-alert-users2'>  <div className="alert alert-success container-alert-users" role="alert">
                    <BsFillCheckCircleFill className='icon-users'></BsFillCheckCircleFill> Projeto cadastrado com sucesso!!

                </div>
                </div>
            )}
            {error && (

                <div  className='container-alert-users2'> <div className="alert alert-danger container-alert-users" role="alert">
                    <BiDizzy className='icon-error-users '></BiDizzy> Login ou senha incorretos!!
                </div>
                </div>
            )}




        </>
    )
}

export default Users;