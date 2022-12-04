import styled from "styled-components"

export const ContainerCard = styled.section`


.header-cards{
    display:flex;
    padding:8px;
    align-items:center;
    p{
        padding-left:8px;
        font-size:12px;
        text-decoration:underline;
        color:blue; 
        cursor: pointer;
    }
}
    


.card-card{
    display:flex;
    padding:8px;
    align-items:flex-end;
    > p{
        font-size:12px;
        margin-bottom:12px;
        padding-left:8px;
        color:blue;
        cursor: pointer;

    }
  

}

.card-full{  
    
   

    .img{
      
        width:200px;
        height:130px;
      
    }
    .card-info{
      position:absolute;
      transform:translate(10px, -70px);
       
        color:white;

        .number-card{
            font-size:14px;
        }

        .val-card{
            font-size:12px;
            padding-left:2px;
            > span{
                padding-left:4px;
            }
        }
       
    }

}



`
export const ConteinerNewCard = styled.form`
width:200px;
input{
    padding:2px 4px;
}
.img-stryle{
    img{
        width: 200px;;
        height: 130px;
    }

}


 .form-input{
    display:flex;
    flex-direction:column;
    .input-number-card{
        width:150px;
    }
    
    .data-card{
        display:flex;
        span{
            padding:0 4px;
        }
        input{
            width:40px;
        }
    }
    .cvc-input{
        width:40px;
    }
    .brand{
        display:hidden;
    }

 }
 .adicionar-btn{
    /* padding-left:40px; */
    margin-left:80px;

 }


`