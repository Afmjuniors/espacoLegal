import { ConateinerLayout } from "./Layout.styled"
import Header from "../Header-SearchBar/Header"
import Footer from "../Footer-Contacts/Footer"
import CartSide from "../ShoppingCart/Cart-side"
import { useLocation, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"


function Layout(props) {
const location =useLocation()

const [isCartSide, setIscarSide]= useState(true)
const currCart = JSON.parse(localStorage.getItem("currCart"))



useEffect(()=>{

    if(currCart){    
        if(currCart.length){
            if(location.pathname==="/" || location.pathname==="/search" || location.pathname.includes("product") || location.pathname==="/error"){
                setIscarSide(true)
            }else{
                setIscarSide(false)
            }
        }else{
            setIscarSide(false)
        }
    }
},[location,currCart])


    return (
        <ConateinerLayout isCartSide={isCartSide}>
           {isCartSide && <CartSide />}
            <div className='main-container' >
                <Header />
                <main>
                    {props.children}
                </main>
            </div>
                <Footer />
        </ConateinerLayout>

    )
}
export default Layout