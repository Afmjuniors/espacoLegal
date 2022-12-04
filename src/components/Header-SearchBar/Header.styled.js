import styled from "styled-components";
import backgroundImg from '../../assets/background-header.png'

export const HeaderContainer = styled.header`
display:flex;
height:100px;
width:100%;
align-items:center;
justify-content:space-between;
background-image:url(${backgroundImg});
-webkit-box-shadow: 0px 4px 5px 0px rgba(24,36,97,0.43);
-moz-box-shadow: 0px 4px 5px 0px rgba(24,36,97,0.43);
box-shadow: 0px 4px 5px 0px rgba(24,36,97,0.43);

 .logo{
    height:100%;
    padding:8px 0 8px 8px;
  
   
 }

 .input-endereco{

  
   
    width:50%;
    div{
        display:flex;
        justify-content:center;
        margin-bottom:8px;
        align-items:center;
    }

    img{
        width:20px;
        margin-right:4px;
    }
    p{
        color:white;
        font-size:10px;
    }
    input{
        width:100%;
    }

    
 }

 >img{
    height:70%
 }




.icons{
   display:flex;
   align-items:center;
   
   


   .cart{
      position:relative;
      display:flex;

      > img{

         width:50px;
         margin-right:32px;
      }
      > p{
         right:50%;
         display:flex;
         justify-content:center;
         align-items:center;
         position:absolute;
         color:black;
         background-color:lightblue;
         border-radius:50%;
         width:16px;
         height:16px;
      }

 }

 .login{
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   height:100px;
    color:white;
    margin-right:32px;
    img{
      height:50px;

    }
 }


}



`

export const DatalistWrapper = styled.div`

datalist {
  position: absolute;
  max-height: 20em;
  border: 0 none;
  overflow-x: hidden;
  overflow-y: auto;
}
datalist option {
  font-size: 0.8em;
  padding: 0.3em 1em;
  background-color: #ccc;
  cursor: pointer;
}

datalist option:hover, datalist option:focus {
  color: #fff;
  background-color: #036;
  outline: 0 none;
}



`

