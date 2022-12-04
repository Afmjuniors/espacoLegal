import styled from "styled-components"

export const CartContainer = styled.div`
display:${(props)=> props.size ? "block": "none"};
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
border-left:1px grey solid;


margin-left:auto;
width:15%;

 > div{
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:16px;

    p{
        padding:8px;
    }
    span{
        color:darkblue;
    }
    button{
        margin-top:8px;
        background-color:lightblue;
        border-radius:4px;
        padding:2px 4px;
        width:80%;
        border:1px lightgray solid;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;


    }
 }



`
export const CartCardContainer =styled.div`
padding: 16px 0;




   .image-prod{
        height:100px;;
        
    }
    > p{
        text-align:center;
        padding:4px 8px;
    }
    >div{
        display:flex;
        justify-content:center;
        align-items:center;
        p{
            padding:4px 4px;

        }
        img{
            height:16px;
            cursor: pointer;
        }
    }

    .lixeira{
        height:20px;
        cursor: pointer;
        padding-left:40%;
       
    }

`