import { CardProductStyle } from "./card.js";

export function CardProduct({ product, addToCart }) {

  return (

    <CardProductStyle key={product.id}>
      <div className="boxImg">
        <img src={product.img} />
      </div>

      <div className="description">
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <p>R$ {product.price.toFixed(2)}</p>
        <button type="submit" onClick={() => addToCart(product)}>
          Adicionar
        </button>
      </div>
    </CardProductStyle>
    
  );
}
