import styled from "styled-components";

export const Item = styled.div`
  a {
    display: block;
    border: 1px solid #ccc;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    .itemImage img{
        width: 100%;
        border-radius: 5px;
    }
    .itemName {
        color:#333333;
        font-weight: bold;
    }
    .itemPrice{
        color: #3374db;
    }
  }
`;
