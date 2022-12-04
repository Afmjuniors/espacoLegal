
export const goToHomePage = (navigate)=>{
    navigate("/")
}
export const goToProductPage = (navigate, name)=>{
    navigate(`/product/${name}`)
}
export const goToLoginPage = (navigate)=>{
    navigate("/login")
}
export const goToSearchPage = (navigate)=>{
    navigate("/search")
}
export const goToAcoountPage = (navigate,screen = "history")=>{
    navigate(`/account/${screen}`)
}
export const goToCartPage = (navigate)=>{
    navigate(`/cart`)
}
export const goToErrorPage = (navigate)=>{
    navigate(`/error`)
}