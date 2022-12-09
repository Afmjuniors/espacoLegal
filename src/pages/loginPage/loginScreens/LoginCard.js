
import accountImg from "../../../assets/account.svg"
import lockImg from "../../../assets/lock.svg";
import visibilityOn from "../../../assets/visibilityOn.svg";
import visibilityOff from "../../../assets/visibilityOff.svg";
import { useContext, useEffect, useState } from "react";
import { FormContainer } from "./LoginCard.styled";
import users from "../../../JSON-Data/users.json"
import { GlobalContext } from "../../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { goToCartPage, goToSearchPage } from "../../../router/coordinator";



function FormLogin({setFormFlow}) {
    const context = useContext(GlobalContext)
    const { currCart, setIslogOn} = context
    const [visibility, SetVisibility] = useState(1)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isUserNameValid, setIsUserNameValid] = useState(true)
    const [isFirstRun, setIsFirstRun] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        setIsFirstRun(true)
    },[])






    const handleLogin = () => {
        setIsFirstRun(false)
        
        const user = users.find((user) => {
            setIsUserNameValid(false)

            if (userName === user.username || userName === user.email) {
                setIsUserNameValid(true)
                if (password === user.password) {
                   
                    currCart.length ? goToCartPage(navigate) : goToSearchPage(navigate)
                    setIslogOn(true)    
                    return user
                }
            }

        })
        if(user){
            const stringUser = JSON.stringify(user)
            localStorage.setItem("user", stringUser)

        }
        
       
    }
   







    return (
        <FormContainer isPaswordValid2={isFirstRun}>
            <h1>Login</h1>
            
            <div className="form-data">
                <label>Username</label>
                {isUserNameValid || <p>Username ou email invalido</p>}
                <div>
                    <img src={accountImg} alt="Account Icon" />
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username ou Email" />

                </div>
            </div>
            <div className="form-data">
                <label>Password</label>
                <div className="input-data">
                    <img src={lockImg} alt="password Icon" />

                    {
                        visibility === 1 ?
                            <div>

                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
                                <img className="eye" onClick={() => SetVisibility(2)} src={visibilityOff} alt="Visibility Off icon" />
                            </div>


                            : <div>

                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Digite sua senha" />
                                <img className="eye" onClick={() => SetVisibility(1)} src={visibilityOn} alt="Visibility On icon" />
                            </div>

                    }
                </div>
               {isFirstRun || <p className="password2">password invalido</p>}
            </div>


            <button  onClick={handleLogin}>Entrar</button>
            <button onClick={() => setFormFlow(2)}>Cadastrar</button>



        </FormContainer>
    )
}
export default FormLogin
