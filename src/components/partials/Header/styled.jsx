import styled from "styled-components";

export const HeaderArea = styled.div`
  background-color: #ffffff;
  height: 80px;
  border-bottom: 1px solid #ccc;
  .container {
    max-width: 1200px;
    margin: auto;
    display: flex;
  }

  a {
    text-decoration: none;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 80px;

    .logoName {
      font-size: 30px;
      font-weight: bold;
      color: #3374db;
    }
  }
  nav {
    padding-top: 10px;
    padding-bottom: 10px;

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    ul {
      display: flex;
      align-items: center;
      height: 60px;
    }
    li {
      margin-left: 20px;
      margin-right: 20px;

      a, button {
        border: 0;
        background: none;
        color: #333333;
        font-size: 16px;
        text-decoration: none;
        cursor: pointer;

        &:hover {
          color: #3374db;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .container{ 
      flex-direction: column;
    }
  }
`;
