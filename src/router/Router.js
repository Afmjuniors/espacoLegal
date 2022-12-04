import { BrowserRouter, Route, Routes } from "react-router-dom"
import AccountPage from "../pages/AccountPage/AccountPage"
import CartPage from "../pages/CartPage/CartPage"
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage/HomePage" 
import Login from "../pages/loginPage/LoginPage"
import ProductPage from "../pages/ProductPage/ProductPage"
import SearchPage from "../pages/searchPage/SearchPage"

function Router(){
    return(
        
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="*"  element={<ErrorPage />}/>
            <Route path="/product/:name" element={<ProductPage />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/account/:sreen" element={<AccountPage />}/>
            <Route path="/cart" element={<CartPage/>} />
        </Routes>
       
    )
}

export default Router