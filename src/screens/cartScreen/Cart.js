import { formatter } from "../../uteis/formatterCurrency"
import { ContaninerCart, CardProduct, ManipulationItem } from "./Cart.styled"
import addIcon from "../../assets/addIcon.svg"
import suntractIcon from "../../assets/subtractIcon.svg"
import deleteIcon from "../../assets/deleteIcon.svg"

function Cart(props) {
    const { currCart,
        addToCart,
        addQuantityToProductOnCart,
        reduceQuantityToProductOnCart,
        handleClickProduct,
        setCurrCart,
        handleFinalizarCompra,
         } = props

    let subTotal = (currCart.reduce((acc, product) => (product.quantity * product.priceDiscont + acc), 0)).toFixed(2)
    let priceFull = (currCart.reduce((acc, product) => (product.quantity * product.price + acc), 0)).toFixed(2)
    let quantitySum = (currCart.reduce((acc, product) => (product.quantity + acc), 0))


    const handleFinalizaCompraCart = () =>{
        currCart.length>0?
        handleFinalizarCompra(): alert("Caarrinho Vazio")
    }




    return (
        <ContaninerCart>
            <div className="card-item">
                <div className="title">

                    <h1>Carrinho de compras</h1>
                    <div className="subtitle">
                        <span onClick={()=>setCurrCart([])}><img src={deleteIcon} alt="delete icon" /> Remover todos</span>
                        <span>Preço</span>

                    </div>
                </div>



                {subTotal==="0.00"?
               <div>
                <hr/>
                    <h3 className="carrinho-vazio">Carrinho Vazio</h3>
                </div>
                   :
                currCart.map((product) => {
                    const priceDiveded = formatter.format(product.priceDiscont / 5)
                    return (
                        <CardProduct key={product.id} discount={product.offPrice}>

                            <img  onClick={()=>handleClickProduct(product)} className="image-product" src={product.image[0]} alt="" />
                            <div className="info-product">
                                <h2>{product.name}</h2>
                                <p>Marca: {product.brand}</p>
                                <ManipulationItem>
                                    <div>
                                        <img onClick={()=>reduceQuantityToProductOnCart(product)} src={suntractIcon} alt="sibtractIcon" />
                                        <input value={product.quantity} />
                                        <img onClick={()=>addQuantityToProductOnCart(product)} src={addIcon} alt="Add icon" />
                                    </div>
                                    <img onClick={()=>reduceQuantityToProductOnCart(product,0)} src={deleteIcon} alt="subtract icon" />
                                </ManipulationItem>
                            </div>
                            <div className="price-product">
                                <p className="full-price">{formatter.format(product.price)}</p>
                                {product.offPrice > 0 && <p className="off-price">{formatter.format(product.priceDiscont)}</p>}
                                <p>5x de {priceDiveded} sem juros</p>

                            </div>
                        </CardProduct>
                    )
                })

                }
            </div>
            <div>
                <div className="resume-cart">
                    <h2>Resumo da compra</h2>
                    <p>Itens Totais ({quantitySum})</p>
                    <div>
                        <p><span>Valor:</span><span className="r-side">{formatter.format(priceFull)}</span></p>
                        <p><span>Disconto:</span> <span className="r-side">- {formatter.format(priceFull - subTotal)}</span></p>
                        <hr/>
                        <p className="subtotal"><span>SubTotal:</span><span className="r-side">{formatter.format(subTotal)}</span></p>
                    </div>
                    <button onClick={handleFinalizaCompraCart}>Finalizar compra</button>

                </div>

            </div>
        </ContaninerCart>

    )
}
export default Cart