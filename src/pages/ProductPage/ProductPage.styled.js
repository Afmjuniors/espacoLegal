import styled from "styled-components"

export const ContaninerProduct = styled.div`

display:flex;
flex-direction:column;
padding:8px;
padding-left:16px;
.product-view{
    display:flex;

.image-product{
    display:flex;
    


    .gallary-product{
        display:flex;
        flex-direction:column;
       
        img{

            width:50px;
            padding:2px;
            margin-top:4px;

        }
        img:hover{
            border:3px solid blue;

        }
      
    }
    > img{
        width:30vw;
        border:3px solid lightblue;

    }
    

}
.info-product{
    display:flex;
    flex-direction:column;
    width:40vw;
    padding: 0 16px;


    .stars{
        display:flex;
        
        .evaluation{
            background: rgb(255,255,0);
            background: linear-gradient(90deg, rgba(255,255,0,1) ${(props) => props.porcentage}, rgba(255,255,255,1) ${(props) => props.porcentage});
            height:16px;    
            img{
                height:18px;    
            

            }

        }
        
        p{
                padding-left:8px;
                font-size:12px;
            }
    }
    

    .price{
        display:flex;
        align-items:center;
        justify-content:flex-end;
      
        
      
        .full{
          
            text-decoration:line-through;
        }
        > span{
            margin-right:auto;
            color:red;
        }    
        
    }
    .about-product{
        display:flex;
        flex-direction:column;

        select{
        }

        h2{
            padding-left:8px;
        }

        ul{
            padding-left:32px;
            list-style-type:none;
            img{
                width:30px
            }
        }

    }


}
.addToCart-product{
    width:20vw;
    display:flex;
    flex-direction:column;
    margin-left:auto;
    padding:8px;
  
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    
.endereco{
   text-align:center;
}
        


    .preco{
        font-size:20px;
        text-align:center;
    }
    .discount{
        font-size:16px;
        color:grey;
        text-decoration:line-through;
    }


    img{
        width:20px;
    }
    .estoque{
        color:${(props) => props.avalible ? "green" : "red"}
   
    }
    .fav{
        display:flex;
        justify-content:space-around;
    }
}


}
.descricao{
    padding:16px;
  
}



`
