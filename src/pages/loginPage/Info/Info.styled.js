import styled from "styled-components"

export const ContainerInfo = styled.aside`
position:fixed;
left:0;
bottom:0;


 .imagemDiv{
    
    img{
        width:80px;
        
    }
 }
 

 .info-div{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border: 1px solid black;
    background-color:white;
    width:300px;
    padding:16px;
    margin: 0 0 16px 16px;

  h2{
text-align:center;
  }
  p{
    padding: 0 4px;
  }
  hr{
    margin-top:4px;
  }
 }
 .info-div :active{
    display:none;
 }



`