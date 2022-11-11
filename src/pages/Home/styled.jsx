import styled from "styled-components";

export const SearchArea = styled.div`
  height: auto;
  padding-top: 10px;
  background-color: #fff;

  .SearchBox {
    background-color: #3374db;
    padding: 0 8px;
    height: 50px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      display: flex;
      flex: 1;

      input {
        width: 100%;
        font-size: 14px;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 3px;
        outline: 0;
        color: #333333;
      }
      select {
        border-radius: 3px;
        color: #333333;
        margin-left: -10px;
        border: none;
        outline: 0;
      }
      button {
        background-color: #3374db;
        border: 0;
        outline: 0;
        border-radius: 4px;
        color: #fff;
        font-size: 15px;
        cursor: pointer;
      }
    }
  }
  
`;

export const PageArea = styled.div`
h2{
    font-size: 20px;
}
.list{
    display: flex;
    flex-wrap: wrap;
    .adItem{
        width: 25%;
    }
}
`;
