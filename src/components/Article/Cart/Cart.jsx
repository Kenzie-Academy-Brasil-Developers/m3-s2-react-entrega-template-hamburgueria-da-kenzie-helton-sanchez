import { CardCart } from "./CardCart/CardCart.jsx";
import { Count } from "./Count/Count.jsx";
import { CartListStyle } from "./cart.js";

export function CartList({addCart, removeOfTheCart}) {
  return (
    <>

      <CartListStyle>
        <h2>Carrinho de compras</h2>

        {addCart.map(product => (
        <CardCart product={product} removeOfTheCart={removeOfTheCart} />
        ))}

      </CartListStyle>
      
      <Count />
    </>
  );
}
