
import Layout from "../../components/Layout/Layout";
import { ContainerWealcome } from "./Homepage.styled"
import inauguracao from "../../assets/inauguraçao.svg"
import {arrayBestOff ,arrayBestEvaluatiob ,arrayMostBougth } from "../../uteis/formatterCurrency"
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

function HomePgae (){
    const context = useContext(GlobalContext)
    const {handleClickProduct} =context
    return(
 
       <Layout>
       <ContainerWealcome>

<img src={inauguracao} alt="Inauguração" />


<div>

    <div className="contaniners-destaques">
        <h2>Produtos maiores promoções</h2>
   {arrayBestOff
   .map((product) => <img onClick={()=>handleClickProduct(product)} key={product.id} src={product.image[0]} alt={product.altImage} /> )               }
    
    </div>

    <div className="contaniners-destaques">
        <h2>Produtos mais vendidos</h2>
        {arrayMostBougth
        .map((product) => <img  onClick={()=>handleClickProduct(product)} key={product.id} src={product.image[0]} alt={product.altImage} /> )               }

    
    </div>
    <div className="contaniners-destaques">
        <h2>Produtos melhores avaliados</h2>
        {arrayBestEvaluatiob
        .map((product) => <img onClick={()=>handleClickProduct(product)} key={product.id} src={product.image[0]} alt={product.altImage} /> )               }


    </div>
</div>

</ContainerWealcome>

       </Layout>
     

    )
}
export default HomePgae