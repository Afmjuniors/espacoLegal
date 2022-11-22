import { Container } from './App.styled'
import Header from "./components/Header-SearchBar/Header"
import CartSide from './components/ShoppingCart/Cart-side'
import Main from "./screens/searchScreen/Main"
import Footer from "./components/Footer-Contacts/Footer"
import products from "./JSON-Data/products.json"
import users from "./JSON-Data/users.json"
import { useEffect, useState } from 'react'
import { changeStringSearchStandard } from './uteis/searchStringStandard'
import Login from './screens/loginScreen/Login'
import Cart from './screens/cartScreen/Cart'
import Welcome from './screens/welcomeScreen/Welcome'
import Product from './screens/productScreen/Product'
import Account from './screens/accountScreen/Account'


function App() {
  const [currCart, setCurrCart] = useState([])
  const [inputName, setInputName] = useState("")
  const [screen, setScreen] = useState(1)
  const [product , setProduct] =useState({})




const handleClickProduct = (prod) =>{
  localStorage.setItem("product",JSON.stringify(prod))
  setProduct(prod)
  setScreen("product")
}
useEffect(()=>{
  const user = localStorage.getItem("user")
  user===null && localStorage.setItem("user",JSON.stringify({}))
  const cart = localStorage.getItem("currCart")
  cart===null && localStorage.setItem("currCart",JSON.stringify({}))
})
const handleExit = () => {
  localStorage.setItem("user", JSON.stringify({}))
  setScreen("welcome")
}



//==========================CART manipulation=============================================
  const addToCart = (productToFind) => {
    const newCart = [...currCart]
    const productFound = newCart.find((product) => product.id === productToFind.id)
    if (!productFound) {
      const priceDiscont = productToFind.price * (1-(productToFind.offPrice/100))
      const newProduct = { ...productToFind, quantity: 1 , priceDiscont: priceDiscont }
      newCart.push(newProduct)
      setCurrCart(newCart)
      const currCartString = JSON.stringify(newCart)
      localStorage.setItem("currCart",currCartString)
    } 
  }
  const addQuantityToProductOnCart = (productToAddQuantity) => {
    const newCart = [...currCart]

    const productFound = newCart.find((product) => product.id === productToAddQuantity.id)

    productFound.quantity++

    setCurrCart(newCart)
    const currCartString = JSON.stringify(newCart)
    localStorage.setItem("currCart",currCartString)


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
    localStorage.setItem("currCart",currCartString)


  }
  const productsNames = products.map((prod) => changeStringSearchStandard(prod.name))
  
  


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
          setScreen={setScreen}/>
        )
        case "cart":
          return(
            <Cart 
            currCart={currCart}
            addToCart={addToCart}
            addQuantityToProductOnCart={addQuantityToProductOnCart}
            reduceQuantityToProductOnCart={reduceQuantityToProductOnCart}
            handleClickProduct={handleClickProduct}
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
            />
            case "account":
              return <Account 
              handleExit={handleExit}
              setScreen={setScreen}
              products={products}
              handleClickProduct={handleClickProduct}
              currCart={currCart}

              />
          default:
           setScreen('welcome')

    }
  }



  return (

    <Container size={currCart.length} screen={screen} >
      {(screen ==="main" || screen==="welcome" || screen==="product") &&
      <CartSide
        addQuantityToProductOnCart={addQuantityToProductOnCart}
        reduceQuantityToProductOnCart={reduceQuantityToProductOnCart}
        setScreen={setScreen}
        currCart={currCart}
        handleClickProduct={handleClickProduct}
        
      />}
      <div className='main-container' >

        <Header
        inputName={inputName}
          setInputName={setInputName}
          productsNames={productsNames}
          screen={screen}
          setScreen={setScreen}
        />


        {handleSwitchScreen()}


      </div>
      <Footer />


    </Container>
  )
}

export default App
