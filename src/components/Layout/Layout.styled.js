import styled from "styled-components"

export const ConateinerLayout = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:row-reverse;
width:100vw;
min-height:100vh;
.main-container{
    
  width:${(props)=> props.isCartSide?"85%":"100vw"};
 
   
}


`