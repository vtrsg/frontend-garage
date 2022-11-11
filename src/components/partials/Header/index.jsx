import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "./styled";

import { isLogged, doLogout } from "../../../helpers/authHandler";

const Header = () => {
  let logged = isLogged();

  const handleLogout = () =>{
    doLogout()
    window.location.href="/"
  }

  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logoName">GARAGE</span>
          </Link>
        </div>
        <nav>
          <ul>
            {logged && (
              <>
                <li>
                  <Link to="/">Comprar carro</Link>
                </li>
                <li>
                  <Link to="/post-an-ad">Vender carro</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
            {!logged && (
              <>
                <li>
                  <Link to="/">Comprar carro</Link>
                </li>
                <li>
                  <Link to="/signin">Vender carro</Link>
                </li>
                <li>
                  <Link to="/signup">Cadastrar</Link>
                </li>
                <li>
                  <Link to="/signin">Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};

export default Header;
