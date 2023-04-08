import { useState } from "react";
import logoHamburgueria from "../../assets/img/logoBurguerKenzie.svg";
import { HeaderStyled } from "./header.js";

export function Header({setFilterProduct, apiFood}) {

  
  const [searchProduct, setSearchProduct] = useState("");

  function search() {
    const filter = apiFood.filter((item) =>
      item.name.toLowerCase().includes(searchProduct.toLowerCase()) || item.category.toLowerCase().includes(searchProduct.toLowerCase())
    );
    setFilterProduct(filter);
  }

  return (
    
    <HeaderStyled>

      <img src={logoHamburgueria} alt="Logo Burguer Kenzie" />
      <div>
        <input type="search" id="search" onChange={(event) => setSearchProduct(event.target.value)} />
        <button onClick={() => search()}>Pesquisar</button>
      </div>

    </HeaderStyled>

  );
}
