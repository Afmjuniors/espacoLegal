import styled from "styled-components"

export const ConateinerFavBody = styled.section`

box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
width:200px;

display:flex;

gap:16px;
padding:16px;
.label-off{
    position:absolute;
    width:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    transform: translate(2px,16px);
    img{
        position:absolute;
    }

    h3{
        position:absolute;
        color:white;
        font-size:12px;
    }

}

.image-product-div{
    width:200px;
    height:210px;

    >img{
        width:100%;
        max-height:100%;
        
    }
}

`