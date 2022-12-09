import { ConateinerFavBody } from "./FavCard.styled"
import saleImg from '../../../assets/sale.svg'
import { useContext } from "react"
import { GlobalContext } from "../../../contexts/GlobalContext"

function FavCard({ favorites }) {
    const context = useContext(GlobalContext)
    const {
        products,
        handleClickProduct,
    } = context

    const newCardsFav = products.filter((prod) => favorites.includes(prod.id))
    return (
        <ConateinerFavBody>
            {newCardsFav &&
                newCardsFav.map((product) => {
                    return (
                        <div>
                            <div className='image-product-div'>
                                {product.offPrice ?
                                    <div className='label-off'>
                                        <img src={saleImg} alt="off label" />
                                        <h3>{product.offPrice}%</h3>
                                    </div> : ''}

                                <img onClick={() => handleClickProduct(product)} src={`.${product.image[0]}`} alt="Product Image" />
                            </div>

                            <h2>{product.name}</h2>
                        </div>

                    )
                })

            }

        </ConateinerFavBody>
    )

}
export default FavCard