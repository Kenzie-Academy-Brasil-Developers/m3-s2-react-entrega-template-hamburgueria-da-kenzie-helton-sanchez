import { CardProductStyle } from "./card.js";
import { useState } from "react";
import { useEffect } from "react";
import { apiHamburgueria } from "../../../../services/api.js";

export function CardProduct() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProducts (){
      try {
        const responseApi = await apiHamburgueria.get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products");
        setProducts(responseApi.data)
      } catch (error) {
        console.log(error)
      }
    }
    loadProducts()
  })

  return (
    <>
      {products.map(product => (
              <CardProductStyle key={product.id}>
              <div className="boxImg">
                <img src={product.img} />
              </div>
      
              <div className="description">
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <p>R$ {product.price.toFixed(2)}</p>
                <button type="submit">Adicionar</button>
              </div>
            </CardProductStyle>
      ))}
    </>
  );
}
