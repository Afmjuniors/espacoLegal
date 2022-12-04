import masterCard from "../../../assets/masterCard.png"
import visa from "../../../assets/visa.png"
import elo from "../../../assets/elo.png"
import neutro from "../../../assets/cardNeutro.png"
import InputMask from "react-input-mask"
import useForm from "../../../hooks/useForm"

import { useEffect, useState } from "react"
import { ConteinerNewCard } from "./CreditCard.styled"

export function AddCreditCard(props) {
    const { setPageFlow , setCard} = props

    const [form , handleOnChangeForm] = useForm({ number: "", validityMounth: "", validityYear: "", cvc: "", name: "", cpf: "" })
    const [image, setImage] = useState(neutro)
    const [brand, setBrand] = useState("")

    useEffect(() => {

        const [brand, image] = handleSwicth(form.number)
        setImage(image)
        setBrand(brand)

    }, [form.number])

    

    const handleClickAdicionar = (e) => {
        e.preventDefault()
        
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; //months from 1-12
        const year1 = dateObj.getUTCFullYear();
        const year = year1%100;
        let flag = false
        let flag2 = false
        brand==="invalid"?flag2=false:flag2=true
        form.validityYear > year? flag= true: form.validityMounth>=month? flag=true:flag = false
        console.log(year);
        if(flag && flag2)
        {
            setPageFlow(2)
            const user = JSON.parse(localStorage.getItem("user"))
            const newCreditCard = {
                choice: true,
                validity:true,
                ...form,   
                brand:brand,
            }
            user.creditCards.push(newCreditCard)
            setCard(user.creditCards)
            localStorage.setItem("user",JSON.stringify(user))
           

         
        }
        else{
            alert("dados invalidos, verifique a data de validade e se o cartao tem uma bandeira valida")
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
        <ConteinerNewCard onSubmit={handleClickAdicionar}>
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
                        mask="99"
                        onChange={handleOnChangeForm}
                        value={form.validityMounth} />
                    <span>/</span>
                    <InputMask
                        type="tel"
                        mask="99"
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
                    mask="999"
                    onChange={handleOnChangeForm}
                    value={form.cvc} />
                <p className="brand"
                    id="brand"
                    name="brand"
                    onChange={handleOnChangeForm}
                    value={brand}></p>
            </div>

            <button className="adicionar-btn">Adicionar</button>


        </ConteinerNewCard>
    )

}
export default AddCreditCard