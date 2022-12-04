import styled from "styled-components";

export const FooterContainer = styled.footer`

display:flex;
justify-content:space-between;
width:100vw;
margin-top:auto;
box-shadow: 0px -4px 5px 0px rgba(196,194,196,1);
background-color:#3AAAFF;

 > img{
   padding-left:32px;
   margin-top:auto;
    height:200px;
}

.sobre{
    display:flex;
    flex-direction:column;
    align-items:center;
    

    > div{
        h3{
            font-size:32px;
        }

       
        > h4 {
            font-size:20px;
            text-align:center;
        }
        img{
            width:40px;
            margin:4px;
        }
        > p{
            font-size:16px;
        }
    }
    .social{
        margin-top:auto;
    }
    .contact{
        padding-bottom:32px;


    }
}
.pagamento{
    display:flex;
    flex-direction:column;
  
    align-items:center;
    margin-top:32px;
    max-width:30vw;
   
    padding: 16px;
    > img{
        width:100%;
    }
    h3{
            font-size:24px;
        }

   
    > div{
        display:flex;
        > img{
        width:50px;
        margin:0 16px;
    }

    }
    
}


`


