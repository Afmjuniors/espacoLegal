import { useState } from "react"
import { CartCardContainer, CartContainer } from "./Cart-side.styled";
import addIcon from "../../assets/addIcon.svg"
import subIcon from "../../assets/subtractIcon.svg"
import deleteIcon from "../../assets/deleteIcon.svg"




function CartSide(props) {
    const {
        currCart,
        setScreen,
        addQuantityToProductOnCart,
        reduceQuantityToProductOnCart,
        handleClickProduct,
        handleFinalizarCompra,

    } = props


    let subTotal = (currCart.reduce((acc, product) => (product.quantity * product.priceDiscont + acc), 0)).toFixed(2)





    return (


        <CartContainer size={currCart.length}>

            <div>
                <p>SubTotal</p>
                <span>R${subTotal}</span>
                <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
               
            </div>
            <hr />
            {currCart
                .map((product) => {


                    return (
                        <>
                        
                        <CartCardContainer key={product.id}>                          

                            <img className="image-prod" onClick={() => handleClickProduct(product)} src={product.image[0]} alt={product.altImage} />

                            <p>R${product.priceDiscont.toFixed(2)}</p>
                            <div>
                                <img onClick={() => reduceQuantityToProductOnCart(product)} src={subIcon} alt="SubIcon" />
                                <p>{product.quantity}</p>
                                <img onClick={() => addQuantityToProductOnCart(product)} src={addIcon} alt="addIcon" />
                            </div>
                            <img className="lixeira" onClick={() => reduceQuantityToProductOnCart(product,0)} src={deleteIcon} alt="Delete Icon" />

                      </CartCardContainer>
                        <hr />
                        </>
                        )
                        

                })

            }
             
            <div>
                <p>SubTotal</p>
                <span>R${subTotal}</span>
                <button onClick={() => setScreen('cart')}>ir para carrinho</button>
            </div>




        </CartContainer>
    )

}
export default CartSide