//visa começa com 4
//master 51 52 53 54 55
//elo 56 57 58 59 50
import masterCard from "../../assets/masterCard.png"
import visa from "../../assets/visa.png"
import elo from "../../assets/elo.png"
import neutro from "../../assets/cardNeutro.png"
import InputMask from "react-input-mask"


import { useEffect, useState } from "react"
import { ConteinerNewCard } from "./CreditCard.styled"

export function AddCreditCard(props) {
    const { setPageFlow } = props

    const [form, setForm] = useState({ number: "", validityMounth: "", validityYear: "", cvc: "", name: "", cpf: "" })
    const [image, setImage] = useState(neutro)
    const [brand, setBrand] = useState("")
    const handleOnChangeForm = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    useEffect(() => {

        const [brand, image] = handleSwicth(form.number)
        setImage(image)
        setBrand(brand)
        setForm({ ...form, brand: brand })

    }, [form.number])

    const handleClickAdicionar = () => {
        
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; //months from 1-12
        const year = dateObj.getUTCFullYear();
        const nomeA = form.name.split(" ")
        let flag = false
        nomeA.length >= 2 ? flag = true : flag = false
        form.validityYear >= year? flag= true: form.validityMounth>month? flag=true:flag = false
        if(flag)
        {
            setPageFlow(2)
            const user = JSON.parse(localStorage.getItem("user"))
            const newCreditCard = {
                choice: true,
                validity:true,
                number:form.number,
                brand:form.brand,
                validityMounth:form.validityMounth,
                validityYear:form.validityYear,
                cvc:form.cvc,
                name:form.name,
                cpf: form.cpf
            }
            user.creditCards.push(newCreditCard)
            localStorage.setItem("user",JSON.stringify(user))
            window.location.reload()

         
        }
       
    }

    const handleSwicth = (number) => {
        const numberString = String(number).slice(0, 1)
        const number1 = Number(numberString)
        const number2String = String(number).slice(0, 2)
        const number2 = Number(number2String)


        if (number1 === 4) {
            return ["Visa", visa]
        } else if (number1 === 5 && number2 > 10) {
            console.log("entrou");

            console.log(number1, number2String)
            if (number2 > 50 && number2 < 56) {
                return ["Master Card", masterCard]
            } else if (number2 >= 56) {
                return ["Elo", elo]
            } else {
                return ["invalid", neutro]
            }
        } else {
            return ["invalid", neutro]
        }



    }


    return (
        <ConteinerNewCard onSubmit={(e) => e.preventDefault()}>
            <div className="card-card">
                <div className="card-full">
                    <img className="img" src={image} alt="" />
                    <div className="card-info">
                        <p className="name-card">{form.name}</p>
                        <p className="number-card">{form.number}</p>
                        {form.validityMounth && <p className="val-card"><span>val.:</span><span>{form.validityMounth}/{form.validityYear}</span><span> CVC {form.cvc}</span></p>}

                    </div>
                </div>


            </div>
            <div className="form-input">

                <label>Numero do cartao</label>
                <InputMask className="input-number-card"
                    type="text"
                    id="number"
                    mask="9999 9999 9999 9999"
                    name="number"
                    onChange={handleOnChangeForm}
                    value={form.number} />
                <label>Nome no Cartão</label>
                <InputMask
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleOnChangeForm}
                    value={form.name} />
                     <label>CPF do titular</label>
                <InputMask
                    type="text"
                    id="cpf"
                    mask="999.999.999-99"
                    name="cpf"
                    onChange={handleOnChangeForm}
                    value={form.cpf} />
                    
                <label>Validade</label>

                <div className="data-card">
                    <InputMask
                        type="tel"
                        id="validityMounth"
                        name="validityMounth"
                        onChange={handleOnChangeForm}
                        value={form.validityMounth} />
                    <span>/</span>
                    <InputMask
                        type="tel"
                        id="validityYear"
                        name="validityYear"
                        onChange={handleOnChangeForm}
                        value={form.validityYear} />
                </div>
                <label>cvc</label>
                <InputMask className="cvc-input"
                    type="tel"
                    id="cvc"
                    name="cvc"
                    onChange={handleOnChangeForm}
                    value={form.cvc} />
                <p className="brand"
                    id="brand"
                    name="brand"
                    onChange={handleOnChangeForm}
                    value={brand}></p>
            </div>

            <button onClick={handleClickAdicionar} className="adicionar-btn">Adicionar</button>


        </ConteinerNewCard>
    )

}
export default AddCreditCard