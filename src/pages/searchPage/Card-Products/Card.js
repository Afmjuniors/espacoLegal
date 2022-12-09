import React, { useContext } from 'react'
import { CardContainer } from './Card.styled'
import saleImg from '../../../assets/sale.svg'
import { formatter } from '../../../uteis/formatterCurrency';
import addIcon from "../../../assets/addIcon.svg"
import subIcon from "../../../assets/subtractIcon.svg"
import { GlobalContext } from '../../../contexts/GlobalContext';




function Card({product}) {

    const context = useContext(GlobalContext)
    const {currCart,handleClickProduct,cartManipulation} = context
    const priceFormat = formatter.format(product.price)
    const priceOffFormat = formatter.format(product.price * (1 - (product.offPrice) / 100))
    const priceDiveded = formatter.format((product.price / 5))

    const productInCart = currCart.find((productCard) => productCard.id === product.id)

    return (


        <CardContainer avalible={product.avalible}>

            <div className='image-product-div'>
                {product.offPrice ? 
                    <div className='label-off'>
                        <img src={saleImg} alt="off label" />
                        <h3>{product.offPrice}%</h3>
                    </div> : ''}

                <img onClick={()=>handleClickProduct(product)} src={product.image[0]} alt="Product Image" />
            </div>

            <h2>{product.name}</h2>

            <div className='price'>
                {product.offPrice ? <p className='price-full'>{priceFormat}</p> : <br/>}
                <p className='price-discount'>{priceOffFormat}</p>
                <p className='p-cash'>á vista </p>
                <p className="payment-option">ou <span>5x</span> de {priceDiveded}</p>
            </div>
            {product.avalible &&
          (  productInCart ?
                <div className='btn-group'>
                    <img onClick={() => cartManipulation( productInCart , -1)} src={subIcon} alt="SubIcon" />
                    <p>{productInCart.quantity}</p>
                    <img onClick={() => cartManipulation(productInCart,1)} src={addIcon} alt="addIcon" />
                </div>

                : <button className='add-cart' onClick={() => cartManipulation(product,1)}>Adicionar ao carrinho</button>

           ) }

        </CardContainer>
    )
}
export default Card;