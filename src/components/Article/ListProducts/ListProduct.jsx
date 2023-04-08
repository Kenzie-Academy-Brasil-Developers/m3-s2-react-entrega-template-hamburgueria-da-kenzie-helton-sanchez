import { CardProduct } from "./Card/CardProduct.jsx";
import { CardProductStyle } from "./Card/card.js";
import { ListProductsStyle } from "./listProduct.js";

export function ListProducts({ apiFood, filterProduct, addToCart }) {
  return (
    <ListProductsStyle className="container__products--ul">
      {filterProduct.length > 0
        ? filterProduct.map((item) => (
            <CardProductStyle key={item.id}>
              <div className="boxImg">
                <img src={item.img} alt="" />
              </div>
              <div className="description">
                <h3>{item.name}</h3>
                <span> {item.category}</span>
                <p>R$ {item.price.toFixed(2)}</p>
                <button type="submit" onClick={() => addToCart(product)}>
                  Adicionar
                </button>
              </div>
            </CardProductStyle>
          ))
        : apiFood.map((product) => (
            <CardProduct product={product} addToCart={addToCart} />
          ))}
    </ListProductsStyle>
  );
}
