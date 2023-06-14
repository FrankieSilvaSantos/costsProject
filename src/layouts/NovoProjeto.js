import FormProject from './FormProject';
import './NovoProjeto.css'
import { useEffect, useState } from 'react';
import { useEffec } from 'react';

function NovoProjeto() {

   

    return(

        <>

        <h1 className='titulo-NovoProjeto'>Criar Projeto</h1>
        <p className='paragrafo-NovoProjeto'>Crie o seu projeto para após adicionar os serviços</p>
        <FormProject></FormProject>
        
        </>

    )
}

export default NovoProjeto;