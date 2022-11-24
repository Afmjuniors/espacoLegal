import { Container } from './App.styled'
import Header from "./components/Header-SearchBar/Header"
import CartSide from './components/ShoppingCart/Cart-side'
import Main from "./screens/searchScreen/Search"
import Footer from "./components/Footer-Contacts/Footer"
import products from "./JSON-Data/products.json"
import { useEffect, useState } from 'react'
import { changeStringSearchStandard } from './uteis/searchStringStandard'
import Login from './screens/loginScreen/Login'
import Cart from './screens/cartScreen/Cart'
import Welcome from './screens/welcomeScreen/Welcome'
import Product from './screens/productScreen/Product'
import Account from './screens/accountScreen/Account'
import CloseCart from './screens/Ficalizar-compra/CloseCart'
import { formatter } from './uteis/formatterCurrency'


function App() {
  const [currCart, setCurrCart] = useState([])
  const [inputName, setInputName] = useState("")
  const [screen, setScreen] = useState(1)
  const [product, setProduct] = useState({})
  const [isLogOn, setIslogOn] = useState(false)
  const [pageFlowApp, setPageFlowAPP] = useState(1)
  const [user, setUser] = useState([])




  const handleClickProduct = (prod) => {
    localStorage.setItem("product", JSON.stringify(prod))
    setProduct(prod)
    setScreen("product")
  }
  useEffect(() => {
    handleLocalUser()
    handleLocalCart()
  }, [])
  const handleExit = () => {
    localStorage.removeItem("user")
    window.location.reload()
  }

  const handleLocalUser = () => {
    let userString = localStorage.getItem("user")
    userString || localStorage.setItem("user", JSON.stringify([]))
    userString = localStorage.getItem("user")
    setUser(JSON.parse(userString))
  }
  const handleLocalCart = () => {
    let cartString = localStorage.getItem("currCart")
    cartString || localStorage.setItem("currCart", JSON.stringify([]))
    cartString = localStorage.getItem("currCart")
    setCurrCart(JSON.parse(cartString))

  }



  //==========================CART manipulation=============================================
  const addToCart = (productToFind) => {
    const newCart = [...currCart]
    const productFound = newCart.find((product) => product.id === productToFind.id)
    if (!productFound) {
      const priceDiscont = productToFind.price * (1 - (productToFind.offPrice / 100))
      const newProduct = { ...productToFind, quantity: 1, priceDiscont: priceDiscont }
      newCart.push(newProduct)
      setCurrCart(newCart)
      const currCartString = JSON.stringify(newCart)
      localStorage.setItem("currCart", currCartString)
    }
  }
  const addQuantityToProductOnCart = (productToAddQuantity) => {
    const newCart = [...currCart]

    const productFound = newCart.find((product) => product.id === productToAddQuantity.id)

    productFound.quantity++

    setCurrCart(newCart)
    const currCartString = JSON.stringify(newCart)
    localStorage.setItem("currCart", currCartString)


  }
  const reduceQuantityToProductOnCart = (productToReduceQuantity, value = 1) => {
    const newCart = [...currCart]

    const productFound = newCart.find((product) => product.id === productToReduceQuantity.id)
    const indexProduct = newCart.findIndex((product) => product.id === productToReduceQuantity.id)

    productFound.quantity--
    if (productFound.quantity <= 0 || value === 0) {
      newCart.splice(indexProduct, 1)
    }

    setCurrCart(newCart)
    const currCartString = JSON.stringify(newCart)
    localStorage.setItem("currCart", currCartString)


  }
  const productsNames = products.map((prod) => changeStringSearchStandard(prod.name))


  const handleFinalizarCompra = () => {
    const total = formatter.format(currCart.reduce((acc,item)=>acc+(item.quantity*item.priceDiscont),0))
    let conf =false
    isLogOn ?  conf = window.confirm(`Finalizar a compra no valor de ${total}?`) :
      setScreen("login")


      if(conf){
      const newProdutPur = currCart.map((item)=>{
        return {
          id:item.id,
          name: item.name,
          status:3,
          quantity:item.quantity,
          totalValue:item.priceDiscont*item.quantity,
          payment:1,
          image:item.image[0],
          date:new Date.now
        }
      })
      const newHistory = [...newProdutPur, user.purchasesHistoric]
      const newUser = {...user, purchasesHistoric:newHistory}
      setUser(newUser)
        
      }

  }




  //===================================SCREEN Manipulation=======================================
  const handleSwitchScreen = () => {
    switch (screen) {
      case "main":
        return (
          <Main
            inputName={inputName}
            setInputName={setInputName}
            products={products}
            currCart={currCart}
            addToCart={addToCart}
            addQuantityToProductOnCart={addQuantityToProductOnCart}
            reduceQuantityToProductOnCart={reduceQuantityToProductOnCart}
            handleClickProduct={handleClickProduct}
            screen={screen}
          />
        )
      case "login":
        return (
          <Login
            currCart={currCart}
            setScreen={setScreen} />
        )
      case "cart":
        return (
          <Cart
            currCart={currCart}
            addToCart={addToCart}
            addQuantityToProductOnCart={addQuantityToProductOnCart}
            reduceQuantityToProductOnCart={reduceQuantityToProductOnCart}
            handleClickProduct={handleClickProduct}
            setCurrCart={setCurrCart}
            setScreen={setScreen}
            isLogOn={isLogOn}
            handleFinalizarCompra={handleFinalizarCompra}
          />
        )
      case "welcome":
        return <Welcome
          handleClickProduct={handleClickProduct}
        />

      case "product":
        return <Product
          addToCart={addToCart}
          product={product}
          handleFinalizarCompra={handleFinalizarCompra}
        />
      case "account":
        return <Account
          handleExit={handleExit}
          setScreen={setScreen}
          products={products}
          handleClickProduct={handleClickProduct}
          currCart={currCart}

        />
      case "newPage":
        return <CloseCart />
      default:
        setScreen('welcome')

    }
  }



  return (

    // <CloseCart user={user}/>


pageFlowApp===1?
  < Container size={currCart.length} screen={screen} >
      {(screen === "main" || screen === "welcome" || screen === "product") &&
        <CartSide
        addQuantityToProductOnCart={addQuantityToProductOnCart}
          reduceQuantityToProductOnCart={reduceQuantityToProductOnCart}
          setScreen={setScreen}
          currCart={currCart}
          handleClickProduct={handleClickProduct}
          
        />
      }
      <div className='main-container' >

        <Header
          inputName={inputName}
          setInputName={setInputName}
          productsNames={productsNames}
          screen={screen}
          setScreen={setScreen}
          setIslogOn={setIslogOn}
          isLogOn={isLogOn}
        />


        {handleSwitchScreen()}


      </div>
      <Footer />


    </Container >:
     <CloseCart user={user}/>



  )
}

export default App
