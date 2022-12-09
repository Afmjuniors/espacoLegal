import { useContext, useState } from "react"
import { CartCardContainer, CartContainer } from "./Cart-side.styled";
import addIcon from "../../assets/addIcon.svg"
import subIcon from "../../assets/subtractIcon.svg"
import deleteIcon from "../../assets/deleteIcon.svg"
import { GlobalContext } from "../../contexts/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
import { goToCartPage } from "../../router/coordinator";




function CartSide() {
    
    const context = useContext(GlobalContext)
    const {
        cartManipulation,
        handleClickProduct,
        handleFinalizarCompra,

    } = context
    const navigate = useNavigate()
    const param = useParams()

    const currCart = JSON.parse(localStorage.getItem("currCart"))
    if(!currCart){
        localStorage.setItem("currCart",JSON.stringify([]))
    }

        let subTotal = (currCart.reduce((acc, product) => (product.quantity * product.priceDiscont + acc), 0)).toFixed(2)





    return (


        <CartContainer size={currCart.length}>

            <div>
                <p>SubTotal</p>
                <span>R${subTotal}</span>
                <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
               
            </div>
            <hr />
            {currCart &&
            currCart
                .map((product) => {
                    


                    return (
                        < div key={product.id}>
                        
                        <CartCardContainer >                          

                            <img className="image-prod" onClick={() => handleClickProduct(product)} src={param.name?`.${product.image[0]}`:product.image[0]} alt={product.altImage} />

                            <p>R${product.priceDiscont.toFixed(2)}</p>
                            <div>
                                <img onClick={() => cartManipulation(product,-1)} src={subIcon} alt="SubIcon" />
                                <p>{product.quantity}</p>
                                <img onClick={() => cartManipulation(product,1)} src={addIcon} alt="addIcon" />
                            </div>
                            <img className="lixeira" onClick={() => cartManipulation(product,0)} src={deleteIcon} alt="Delete Icon" />

                      </CartCardContainer>
                        <hr />
                        </div>
                        )
                        

                })

            }
             
            <div>
                <p>SubTotal</p>
                <span>R${subTotal}</span>
                <button onClick={() => goToCartPage(navigate)}>ir para carrinho</button>
            </div>




        </CartContainer>
    )

}
export default CartSide