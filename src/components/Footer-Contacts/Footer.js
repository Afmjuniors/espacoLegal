import {
    FooterContainer,
    DivParteCima,
    ImagemAstro,
    SobreContainer,
    TituloSobre,
    LinkSobre,
    EscritaLink,
    DivParteBaixo,
    EscritaBaixo,
} from './Footer.styled'

function Footer() {
    return (
        <FooterContainer>
          
                <img src='' alt='Logo' />
                <div>
                    <h3>Espaço legal</h3>
                    <h4>made by Alexandre Machdo</h4>
                    <img src='' alt="Linkedin" />
                    <img src='' alt="Github" />
                    <img src='' alt="HackerRank" />
                </div>
                <div>
                    <h3>Metodos de pagamento</h3>
                    <img src='' alt='Cartado de credito'/>
                    <img src='' alt='Boleto Bancario'/>
                    <img src='' alt='Pix'/>
                </div>



        </FooterContainer>


    )

}
export default Footer