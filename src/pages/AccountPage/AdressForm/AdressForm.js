import { useContext, useState } from "react"
import { ContainerForm } from "./AdressForm.styled"
import estados from "../../../JSON-Data/estados.json"
import { GlobalContext } from "../../../contexts/GlobalContext"
import useForm from "../../../hooks/useForm"

export default function AdressForm () {
    const context = useContext(GlobalContext)
    const user = JSON.parse(localStorage.getItem("user"))
    const [form , handleChangeForm] = useForm({
        password:user.password,
        email:user.email,
        telefone:user.telefone,
        cep:user.adress.cep,
        estado:user.adress.state,
        street:user.adress.street,
        number:user.adress.number,
        complement:user.adress.complement,  
        city:user.adress.city,
        bairro:user.adress.district
    
    })


const name = `${user.firstName} ${user.middleName} ${user.lastName}`

     
    return (
        <ContainerForm>
            <div className="header-cadastro">
                <h1>Cadastro</h1>
                <p>*campos obrigatorios</p>

            </div>
            <form>
                <div className="dados-conta">

                    <h2>dados da conta</h2>
                    <label>*senha</label>
                    <div>
                        <input 
                        value={form.email}
                        name="email"
                         onChange={handleChangeForm} type="email" placeholder="email" />
                        <span>alterar</span>
                    </div>
                    <label>*senha</label>
                    <div>
                        <input 
                        value={form.password}
                        name="password"
                         onChange={handleChangeForm} type="password" placeholder="***********" />
                        <span>alterar</span>
                    </div>
                </div>
                <hr />
                <div className="dados-pessoais">
                    <h2>dados pessoais</h2>
                    <label>*nome completo</label>
                    <input value={name} type="text" placeholder="Alexandre Machado" />
                    <label>*genero</label>
                    <div className="genero-radio">
                        <input type="radio" id="masculino" value="masculino" name="genero" checked={user.genero==="masculino"}/><label>masculino</label>
                        <input type="radio" id="feminino" value="feminino" name="genero" checked={user.genero==="feminino"} /><label>feminino</label>
                        <input type="radio" id="naoInfo" value="naoInfo" name="genero"  checked={user.genero==="naoInfo"}/><label>Não informar</label>
                    </div>
                    <label>*data de nascimento</label>
                    <div className="data">
                        <input value={user.dayBirth} type="number" min="1" max = "31" placeholder="dia" /><span>/</span>
                        <input value={user.mounthBirth} type="number" min="1" max = "12" placeholder="mes" /><span>/</span>
                        <input value={user.yearBirth} type="number" min="1950" max = "2006" placeholder="ano" />
                    </div>
                    <label>*CPF</label>
                    <input value={user.cpf} className="inputNumber" type="number" placeholder="111.222.333-44" />
                    <label>*telefone</label>
                    <div>
                        <input
                         value={form.telefone} 
                         name="telefone"
                         onChange={handleChangeForm} className="inputNumber" type="number" placeholder="(31)996828531" /><span>alterar</span>
                    </div>

                </div>
                <hr />

                <div className="endereco">
                    <h2>Endereço</h2>
                    <div className="endereco-body">
                        <div>

                            <label>*CEP</label>
                            <input value={form.cep} 
                            name="cep"
                            onChange={handleChangeForm} className="inputNumber" type="number" placeholder="30000-000" />
                        </div>
                        <div>

                            <label>*rua</label>
                            <input value={form.street} 
                            name="street"
                            onChange={handleChangeForm} type="text" placeholder="algum lugar na cidade" />
                        </div>
                        <div className="numero-input">
                            <div>
                                <label>*numero</label>
                                <input value={form.number}
                                name="number"
                                onChange={handleChangeForm} className="number-endereco" type="number" placeholder="0" />
                            </div>
                            <div>
                                <label>complemento</label>
                                <input value={form.complement}
                                name="complement"
                                onChange={handleChangeForm} type="text" placeholder="apto 100" />
                            </div>
                        </div>
                        <div>

                            <label>*bairro</label>
                            <input value={form.bairro}
                            name="bairro" 
                            onChange={handleChangeForm}  type="text" placeholder="Centro" />
                        </div>
                        <div className="cidade-estado">

                            <label>*Cidade</label>
                            <input value={form.city}
                            name="city"
                            onChange={handleChangeForm} type="text" placeholder="Belo Horizonte" />
                            <div className="select-estado">
                                <label>*Estado</label>
                                <select value={form.estado} 
                                name="estado"
                                onChange={handleChangeForm}>
                                    <option>Selecione</option>
                                    {estados &&
                                    estados.map((estado) => <option key={estado} value={estado}>{estado}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <button type="button" className="btn-salvar">Salvar Alterações</button>

            </form>

        </ContainerForm>
    )


}