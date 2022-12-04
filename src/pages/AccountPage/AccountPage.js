import { useContext, useState } from "react"
import CreditCards from "./CreditCards/CreditCards"
import CardPurchase from "./PurchaseSection/PurchaseSection"
import { ContainerAcount } from "./AcountPage.styled"
import FavCard from "./FavCard/FavCard"
import creditCard from "../../assets/creditCard.svg"
import heart from "../../assets/heart.svg"
import rightArrow from "../../assets/right-arrow.svg"
import shoppingBag from "../../assets/shopping_bag.svg"
import account from "../../assets/account.svg"
import { GlobalContext } from "../../contexts/GlobalContext"
import AdressForm from "../../pages/AccountPage/AdressForm/AdressForm"
import { useNavigate, useParams } from "react-router-dom"
import ErrorPage from "../ErrorPage"
import Layout from "../../components/Layout/Layout"
import { goToAcoountPage, goToHomePage } from "../../router/coordinator"



function AccountPage() {
    const context = useContext(GlobalContext)
    const {
        products,
        handleClickProduct,
        setIslogOn
    } = context
    const navigate = useNavigate()
    const { sreen } = useParams()
    const user = JSON.parse(localStorage.getItem("user"))


    const handleClickHistory = (id) => {
        const productFound = products.find((product) => product.id === id)
        handleClickProduct(productFound)

    }

    const handleRender = () => {

        switch (sreen) {
            case "history":
                return <CardPurchase produtos={user.purchasesHistoric} handleClickHistory={handleClickHistory} />
            case "info":
                return <AdressForm />
            case "credit-cards":
                return <CreditCards creditCards={user.creditCards} />
            case "favorities":
                return <FavCard
                    favorites={user.favorites}
                />

            default:
                return <ErrorPage />
        }
    }



    const miniCards = [
        {
            name: "Pedidos",
            param: "history",
            description: "Ver ultimos pedidos",
            image: `${shoppingBag}`
        },
        {
            name: "Cadastro",
            param: "info",

            description: "Ver e editar dados cadastrais",
            image: `${account}`
        },
        {
            name: "Metodos de Pagamentos",
            param: "credit-cards",
            description: "Ver e adicionar metodos de pagamento",
            image: `${creditCard}`
        },
        {
            name: "Favoritos",
            param: "favorities",
            description: "Ver produtos favoritos",
            image: `${heart}`
        }
    ]

    const handleExit = () =>{
        localStorage.setItem('user',JSON.stringify({}))
        setIslogOn(false)
        goToHomePage(navigate)

    }




    return (
        <Layout>

            <ContainerAcount>
                <div>

                    <section className="side-nav">

                        {miniCards.map((card) => {

                            return (


                                <div key={card.name} onClick={() => goToAcoountPage(navigate,card.param)} className="mini-card">
                                    <img className="icon-image" src={card.image} alt="icon" />
                                    <div className="body-card">
                                        <h2 className="name">{card.name}</h2>
                                        <p className="description">{card.description}</p>
                                    </div>
                                    <img className="icon-image" src={rightArrow} alt="seta" />

                                </div>
                            )

                        })
                        }
                        <div onClick={handleExit} className="mini-card">
                            <img className="icon-image" src={account} alt="icon" />
                            <div className="body-card">
                                <h2 className="name">Sair</h2>
                                <p className="description">sair da conta</p>
                            </div>
                            <img className="icon-image" src={rightArrow} alt="seta" />
                        </div>
                    </section>
                    <section className="main-view">
                        {handleRender()}

                    </section>

                </div>


            </ContainerAcount>
        </Layout>
    )

}
export default AccountPage
