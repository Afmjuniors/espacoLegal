import React, {  useState } from 'react'
import { ContainerInfo } from './Info.styled'
import infoIcon from "../../../assets/icons/info-icon.svg"

const Info = () => {
    const [pageFlow, setPageFlow] = useState(false)

    return (
        <ContainerInfo pageFlow={pageFlow} onMouseEnter={() => setPageFlow(true)} onMouseLeave={() => setPageFlow(false)}>
            {
                pageFlow &&
                
                <div className="info-div">
                <h2>Login Info</h2>

                <p>Algumas funções como fechamento da página e acesso aos dados cadastrais do usuário é só acessível por meio de login.</p>
                <p>Ficar logado é vinculado ao acesso ao localStorage.</p>
                <p>
                    É possível logar com um usuário criado na página de cadastro,
                </p>
                <p>O site tem 2 usuários mokados para testes, eles são:</p>
                <hr />

                <p>Username: camila</p>
                <p>Password: 123456Ab</p>
                <hr />
                <p>UserName: afmjunior</p>
                <p>Password: 123456Ab</p>
                <hr />

                <p> Os botões de entrar com o google e facebook são apenas decorativos.</p>
            </div>


            }
            <div className='imagemDiv' >
                <img src={infoIcon} alt='info' />
            </div>
        </ContainerInfo >
    )
}

export default Info