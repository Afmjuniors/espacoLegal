import { ContaninerProduct } from "./ProductPage.styled"
import locationIcon from "../../assets/location-black.svg"
import starEvaluation from "../../assets/starEvaluation.png"
import { useContext, useEffect, useState } from "react"
import { formatter } from "../../uteis/formatterCurrency"
import certificado from "../../assets/certificado.png"
import { GlobalContext } from "../../contexts/GlobalContext"
import products from "../../JSON-Data/products.json"
import Layout from "../../components/Layout/Layout"
import { useNavigate, useParams } from "react-router-dom"
import ErrorPage from "../ErrorPage"
import { goToErrorPage, goToHomePage, goToProductPage, goToSearchPage } from "../../router/coordinator"

function ProductPage() {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const param = useParams()
    const { cartManipulation } = context
    const product = products.find((prod)=>prod.name===param.name)
    const [currImage, setCurrImage] = useState(0)

    useEffect(()=>{
        product ||
        goToErrorPage(navigate)
    },[])

   if(product)
   {

       const dicontPrice = formatter.format(product.price * (1 - (product.offPrice / 100)))
       
       
       const user = JSON.parse(localStorage.getItem("user"))
       
       
       const porcentage = Math.floor((product.evaluation / 5) * 100)

       
       
       

    return (
        <Layout>

            <ContaninerProduct avalible={product.avalible} porcentage={`${porcentage}%`}>
                <p>{product.categories.map((categoty, i) => (product.categories.length > i + 1 ? <span key={i}>{categoty}-</span> : <span key={i}>{categoty}</span>))}</p>
                <div key={product.id} className="product-view">
                    <div className="image-product">
                        <div className="gallary-product">{product.image.map((image, i) => <img onMouseEnter={() => setCurrImage(i)} key={i} src={`.${image}`} alt="imagem pequena" />)}

                        </div>
                        <img src={`.${product.image[currImage]}`} alt="" />


                    </div>
                    <div className="info-product">
                        <h1>{product.name}</h1>
                        <p>Marca: {product.brand}</p>
                        <div className="stars">
                            <div className="evaluation">
                                <img src={starEvaluation} alt="" />
                            </div>
                            <p>{product.evaluation}/5 ({product.numberEvaluation})</p>
                        </div>
                        {product.avalible &&
                            <div className="price">
                            {product.offPrice > 0 && <span>Desconto de {product.offPrice}%</span>}

                            <div>

                                {product.offPrice > 0 && <p className="full">{formatter.format(product.price)}</p>}
                                <p>{dicontPrice}</p>
                            </div>
                        </div>
                        }
                        <div className="about-product">
                            <div>{product.categories[0] === "Roupas" &&
                                <select>
                                    <option>tamanho</option>
                                    {product.dimensions.map((size, i) => <option key={i} value={size}>{size}</option>)}


                                </select>
                            }
                            </div>
                            <h2>Sobre</h2>
                            <ul>
                                <li>Marca: {product.brand}</li>
                                <li>Material: {product.material}</li>
                                <li>Apartir de {product.idade[0]}{product.idade.length > 1 ? <span> a {product.idade[1]} anos</span> : <span> anos</span>} </li>
                                {product.pages > 0 && <li>Paginas:{product.pages}</li>}
                                {product.warranty > 0 && <li>{product.warranty}</li>}
                                {product.certification && <li><img src={certificado} alt="certificado" /> Certificado</li>}
                            </ul>



                        </div>

                    </div>
                    <div>
                        <div className="addToCart-product">

                            {product.avalible &&
                            <div>
                                {
                            product.offPrice > 0 && <p className="preco discount"> {formatter.format(product.price)}</p>}
                            
                            <p className="preco">{dicontPrice}</p>
                            <p>Entrega em 24hrs</p>
                            <div className="endereco">
                                <img src={locationIcon} alt="location icon" />
                                
                                {user && user.adress &&
                                    <span >Rua {user.adress.street}, {user.adress.complement}, {user.adress.distric} {user.adress.city}-{user.adress.state}</span>}
                            </div>
                                    </div>}
                            <div>

                                {product.avalible ?
                                    <p className="estoque">Em estoque</p> :
                                    <p className="estoque">ESGOTADO</p>}
                            </div>
                            {product.avalible &&
                            <button onClick={() => cartManipulation(product, 1)}>Adicionar ao carrinho</button>}

                            <div className="fav">
                                <input type="checkbox" name="favorito" /><label>Adicionar aos favoritos</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="descricao">
                    <h3>Descrição</h3>
                    <p> {product.description}</p>
                </div>




            </ContaninerProduct>
        </Layout>
    )
    
}else{
   
    goToSearchPage(navigate)
}
}
export default ProductPage
