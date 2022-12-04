import { ContainerCard } from "./CreditCard.styled"
import masterCard from "../../../assets/masterCard.png"
import visa from "../../../assets/visa.png"
import elo from "../../../assets/elo.png"
import {  useState } from "react"
import AddCreditCard from "./AddCreditCard"



function CreditCards(props) {
    const {creditCards} = props
    const [cards , setCard] = useState(creditCards)
    const [pageFlow,setPageFlow] =useState(2)

    const handleSwitch = (brand) => {
        switch (brand) {
            case "Visa":
                return visa
            case "Master Card":
                return masterCard
            case "Elo":
                return elo
        }
    }

    const removeCard = (number)=>{
        const newArry =[...cards]
        const creditCardIndex = newArry.findIndex((card)=>card.number===number)
        newArry.splice(creditCardIndex,1)
        setCard(newArry)
        let user = JSON.parse(localStorage.getItem("user"))
        user.creditCards = [...newArry]
        localStorage.setItem("user",JSON.stringify(user))

    
    }



    return (
        <ContainerCard>
            <div className="header-cards">
                <h1>Cartões de crédito</h1>
                <p onClick={()=>setPageFlow(1)}>adcionar novo cartão</p>
            </div>
            {
                pageFlow===1 &&
            <AddCreditCard setPageFlow={setPageFlow} setCard={setCard}/>
            }
            <div className="cards-body">

                {cards.map((creditCard) => {
                    const lastFourS = String(creditCard.number).slice(-4)
                    const lastFour = Number(lastFourS)
                    return (
                        <div key={creditCard.number} className="card-card">
                            <div className="card-full">
                                <img className="img" src={handleSwitch(creditCard.brand)} alt="" />
                                <div className="card-info">
                                    <p className="name-card">{creditCard.name}</p>
                                    <p className="number-card">****************{lastFour}</p>
                                    <p className="val-card"><span>val.: </span><span>{creditCard.validityMounth}/</span><span>{creditCard.validityYear}</span></p>
                                </div>
                            </div>
                            <p onClick={()=>removeCard(creditCard.number)} >excluir</p>
                           
                        </div>

                    )
                })

                }

            </div>



        </ContainerCard>
    )

}
export default CreditCards

/**
 *        "creditCards":[{
            "choice": true,
            "number":1234567890123456,
            "validity":"2022-12",
            "cvc":123,
            "name":"Alexandre Machado",
            "cpf": 12345678901
        }],
 * 
 */