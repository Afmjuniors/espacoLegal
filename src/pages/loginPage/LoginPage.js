import { ContainerMainForm, ContainerForm } from "./LoginPages.styled"
import facebookIcon from "../../assets/icons/facebook-F-icon.svg"
import googleIcon from "../../assets/icons/google-G-icon.svg"
import { useContext, useState } from "react";
import FormSignUp from "./loginScreens/SignUpCard";
import FormLogin from "./loginScreens/LoginCard";
import Info from "./Info/Info";
import { GlobalContext } from "../../contexts/GlobalContext";
import Layout from "../../components/Layout/Layout";


function Login(props) {
    const context = useContext(GlobalContext)
    const {setScreen, currCart} =context
    

    const [formFlow, setFormFlow] = useState(1)

    return (
        <Layout>

  


         
            <ContainerMainForm>
                <ContainerForm>
                    {formFlow===1? 
                    <FormLogin currCart={currCart}setScreen={setScreen} setFormFlow={setFormFlow} /> : 
                    <FormSignUp />}
                    
                    <div className="buttonOutSide">
                        <span>OU</span>

                        <button><span>Entrar com Google</span> <img src={googleIcon} alt="Google Icon" /></button>
                        <button><span>Entrar com Facebook</span> <img src={facebookIcon} alt="Facebook Icon" /></button>
                    </div>


                </ContainerForm>
        <Info/>

            </ContainerMainForm>
      
        </Layout>

    )


}

export default Login
