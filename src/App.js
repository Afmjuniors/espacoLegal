import { Container } from './App.styled'
import Header from "./components/Header-SearchBar/Header"
import CartSide from './components/ShoppingCart/Cart-side'
import Main from "./components/Preview-Products/Main"
import Footer from "./components/Footer-Contacts/Footer"
import products from "./JSON-Data/products.json"
import users from "./JSON-Data/users.json"
import { useEffect, useState } from 'react'
import { changeStringSearchStandard } from './uteis/searchStringStandard'
import Login from './screens/loginScreen/Login'
import Cart from './screens/cartScreen/Cart'
import Welcome from './screens/welcomeScreen/Welcome'
import Product from './screens/productScreen/Product'

function App() {
  const [currCart, setCurrCart] = useState([])
  const [displayProducts, setDisplayProducts] = useState()
  const [inputName, setInputName] = useState("")
  const [screen, setScreen] = useState(1)
  const [product , setProduct] =useState({})

  useEffect(()=>{
    const cartLocalStorage =JSON.parse(localStorage.getItem("currCart")) 
    setCurrCart(cartLocalStorage)

  },[])


const handleClickProduct = (prod) =>{
  localStorage.setItem("product",JSON.stringify(prod))
  setProduct(prod)
  setScreen("product")
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
  const productsNames = products.map((prod) => prod.name)
  const newProduct = products.filter((product) => changeStringSearchStandard(product.name).includes(inputName))

  //===================================SCREEN Manipulation=======================================
  const handleSwitchScreen = () => {
    switch (screen) {
      case "main":
        return (
          <Main
            inputName={inputName}
            setInputName={setInputName}
            newProduct={newProduct}
            products={products}
            currCart={currCart}
            addToCart={addToCart}
            addQuantityToProductOnCart={addQuantityToProductOnCart}
            reduceQuantityToProductOnCart={reduceQuantityToProductOnCart}
            handleClickProduct={handleClickProduct}
            />
        )
      case "login":
        return (
          <Login />
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
            product={product}
            />
          default:
           setScreen('welcome')

    }
  }



  return (

    <Container size={currCart.length} screen={screen} >
      {(screen ==="main" || screen==="welcome") &&
      <CartSide
        addQuantityToProductOnCart={addQuantityToProductOnCart}
        reduceQuantityToProductOnCart={reduceQuantityToProductOnCart}
        setScreen={setScreen}
        currCart={currCart}
        handleClickProduct={handleClickProduct}
        
      />}
      <div className='main-container' >

        <Header
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
