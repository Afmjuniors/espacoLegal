import products from "./JSON-Data/products.json"
import { useEffect, useState } from 'react'
import { formatter } from './uteis/formatterCurrency'
import { useNavigate } from 'react-router-dom'
import { changeStringSearchStandard } from './uteis/searchStringStandard'
import { goToAcoountPage, goToHomePage, goToLoginPage, goToProductPage } from './router/coordinator'


function GlobalState () {
    const [currCart, setCurrCart] = useState([])
    const [inputName, setInputName] = useState("")
    const [screen, setScreen] = useState(1)
    const [product, setProduct] = useState({})
    const [isLogOn, setIslogOn] = useState(false)
    const [user, setUser] = useState({})
    const navigate = useNavigate()

  


    const handleClickProduct = (prod) => {
        setProduct(prod)
        
        goToProductPage(navigate,prod.name)
    
      }

      function cartManipulation(productInPut, value) {
        const newCart = [...currCart]
        const productFound = newCart.find((product) => product.id === productInPut.id)
        const productFoundIndex = newCart.findIndex((product) => product.id === productInPut.id)
        if (!productFound) {
          const priceDiscont = productInPut.price * (1 - (productInPut.offPrice / 100))
          const newProduct = { ...productInPut, quantity: 1, priceDiscont: priceDiscont }
          newCart.push(newProduct)
        } else {
          productFound.quantity += Number(value)
          if (productFound.quantity <= 0 || value === 0) {
            newCart.splice(productFoundIndex, 1)
          }
        }
        setCurrCart(newCart)
        const currCartString = JSON.stringify(newCart)
        localStorage.setItem("currCart", currCartString)
    
      }
      const productsNames = products.map((prod) => changeStringSearchStandard(prod.name))
      const cateNames = []
      for (let prod of products) {
        for (let cat of prod.categories) {
          if (!cateNames.includes(cat)) {
            cateNames.push(cat)
          }
        }
      }
      const datalistArray = [...cateNames, ...productsNames]

      const handleFinalizarCompra = () => {
        const total = formatter.format(currCart.reduce((acc, item) => acc + (item.quantity * item.priceDiscont), 0))
        let conf = false
        isLogOn ? conf = window.confirm(`Finalizar a compra no valor de ${total}?`) :
          goToLoginPage(navigate)
        const localUserS = localStorage.getItem('user')
        const localUser = JSON.parse(localUserS)
    
    
        if (conf) {
          const newProdutPur = currCart.map((item) => {
            return {
              id: item.id,
              name: item.name,
              status: 2,
              quantity: item.quantity,
              totalValue: item.priceDiscont * item.quantity,
              payment: 1,
              image: item.image[0],
              date: "12/12/2022"
            }
          })
          const newHistory = [...newProdutPur, ...localUser.purchasesHistoric]
          console.log(newHistory);
    
          const newUser = { ...localUser, purchasesHistoric: newHistory }
          setUser(newUser)
          localStorage.setItem('user', JSON.stringify(newUser))
          setCurrCart([])
          localStorage.setItem("currCart", JSON.stringify([]))
          goToAcoountPage(navigate)
    
        }
    
    
      }
    

    const GlobalState = {
        products,
        currCart,
        setCurrCart,
        inputName,
        setInputName,
        screen,
        setScreen,
        product,
        setProduct,
        isLogOn,
        setIslogOn,
        handleClickProduct,
        cartManipulation,
        handleFinalizarCompra,
        datalistArray,
        productsNames,
   
    
    }


    return GlobalState
}
export default GlobalState




