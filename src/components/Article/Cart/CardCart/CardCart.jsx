import { useState } from "react";
import { CardCartStyle } from "./cardCart.js";
import { useEffect } from "react";




export function CardCart() {

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
            <CardCartStyle key={product.id}>

                <img src={product.img} />

                <div>
                  <h3>{product.name}</h3>
                  <span>{product.category}</span>
                </div>

                <button onClick={() => CardCart.close()}>Remover</button>

            </CardCartStyle>
        ))}
      </>
    );
  }