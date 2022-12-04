import { FooterContainer } from './Footer.styled'
import espacoLegal from "../../assets/espacaLegal.png"
import bandeiras from "../../assets/bandeiras.png"
import pix from "../../assets/pix.png"
import boleto from "../../assets/boleto.png"
import gitHub from "../../assets/icons/Github-Dark.svg"
import linkedin from "../../assets/icons/LinkedIn.svg"
import whatsapp from "../../assets/icons/whatsApp-icon.svg"


function Footer() {
    return (
        <FooterContainer>

            <img src={espacoLegal} alt='Logo' />
            <div className='sobre'>
                <div>

                    <h3>Espaço legal</h3>
                    <h4>made by</h4>
                    <h4>Alexandre Machdo</h4>
                </div>
                <div className='social'>
                    <a href='https://www.linkedin.com/in/afmjuniors/' target="_blank">
                    <img src={linkedin} alt="Linkedin" />
                    </a>
                    <a href='https://github.com/Afmjuniors/projeto-frontendreact' target="_blank">
                    <img src={gitHub} alt="Github" />
                    </a>
                    <a href='https://api.whatsapp.com/send?phone=5531996828531&text=Ol%C3%A1%20vi%20seu%20site!' target="_blanck">
                    <img src={whatsapp} alt="WhatsApp" />
                    </a>
                </div>
                <div className='contact'>

                    
                        <p >afmjuniors@gmail.com</p>
                    
                    <p>tel.: +55 (31) 99682-8531</p>
                </div>
            </div>
            <div className='pagamento'>
                <h3>Metodos de pagamento</h3>
                <img src={bandeiras} alt='Cartado de credito' />
                <div>

                <img src={boleto} alt='Boleto Bancario' />
                <img src={pix} alt='Pix' />
                </div>
            </div>



        </FooterContainer>


    )

}
export default Footer