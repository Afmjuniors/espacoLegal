import { DatalistWrapper, HeaderContainer } from './Header.styled'
import logo from '../../assets/logo.png'
import locationIcon from "../../assets/location.png"
import entrar from "../../assets/entrar.png"
import carrinho from "../../assets/carrinho.png"
import logOn from "../../assets/logon.png"
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import { useLocation, useNavigate } from 'react-router-dom'
import {goToHomePage, goToAcoountPage, goToSearchPage, goToCartPage, goToLoginPage} from "../../router/coordinator"


function Header() {
    const context = useContext(GlobalContext)
    const {
        
        inputName,
        setInputName,
        isLogOn,
        setIslogOn,
        datalistArray,
        productsNames
    } = context
const navigate = useNavigate()
const location = useLocation()

const currCart = JSON.parse(localStorage.getItem("currCart"))

const user = JSON.parse(localStorage.getItem("user"))
useEffect(()=>{


    user &&
    user.userId &&
    setIslogOn(true)

},[])

    
    const handleChange = (e) =>{
        setInputName(e.target.value)
      if(location.pathname!=="/search")
      {
          goToSearchPage(navigate)

      }
    }

    return (
        <HeaderContainer>
            <img onClick={() => goToHomePage(navigate)} className='logo' src={logo} alt="logo Espaço Legal" />

            {(location.pathname !== "/login") &&

                <div className='input-endereco'>
                 { user &&
                 user.adress &&  <div>
                        <img src={locationIcon} alt="icon location" />
                        <p>Rua {user.adress.street} - {user.adress.city}-{user.adress.state} - CEP: {user.adress.cep}</p>
                    </div>}
                    <DatalistWrapper>

                    <input 
                    type="search"
                    className='data' 
                    value={inputName} 
                    onChange={handleChange} 
                    placeholder="Escrever aqui" 
                    list='products'  />
                    <datalist  id="products"  >
                        {productsNames &&
                            productsNames.map((productName) => {
                                return <option className='opts' value={productName} key={productName} />
                            })
                        }
                    </datalist>
                </DatalistWrapper>
                       

                </div>

            }
            <div className='icons'>
                {
                    location.pathname !== "/login" &&
                    <div className='login'>
                        {
                            isLogOn ?
                                <img onClick={() => goToAcoountPage(navigate)} src={logOn} alt="LogOn" />
                                : <img onClick={() => goToLoginPage(navigate)} src={entrar} alt="Login Sing up" />
                        }
                        {isLogOn && <p  onClick={() => goToAcoountPage(navigate)} >Olá, {user.firstName}</p>}
                    </div>
                }
                {
                    location.pathname !== "/cart" &&
                    <div className='cart'>
                    <img onClick={() => goToCartPage(navigate)} className='cartImg' src={carrinho} alt="Cart" />
                     {currCart.length>0 && <p>{currCart.length}</p> }
                    </div>
                }
            </div>







        </HeaderContainer>

    )


}
export default Header