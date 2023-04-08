import { CardCartStyle } from "./cardCart.js";


export function CardCart({product, removeOfTheCart}) {


  
    return (

            <CardCartStyle key={product.id} >

                <img src={product.img} />

                <div>
                  <h3>{product.name}</h3>
                  <span>{product.category}</span>
                </div>

                <button onClick={() => removeOfTheCart(product.id)}>Remover</button>

            </CardCartStyle>

    );
  }