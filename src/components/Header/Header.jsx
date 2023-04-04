import logoHamburgueria from "../../assets/img/logoBurguerKenzie.svg";
import { HeaderStyled } from "./header.js";

export function Header() {
  return (
    
    <HeaderStyled>

      <img src={logoHamburgueria} alt="Logo Burguer Kenzie" />
      <div>
        <input type="search" id="search" />
        <button type="submit">Pesquisar</button>
      </div>

    </HeaderStyled>

  );
}
