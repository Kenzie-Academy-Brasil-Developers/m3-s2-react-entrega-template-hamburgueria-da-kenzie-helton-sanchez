import { CardCart } from "./CardCart/CardCart.jsx";
import { Count } from "./Count/Count.jsx";
import { CartListStyle } from "./cart.js";

export function CartList() {
  return (
    <>

      <CartListStyle>
        <h2>Carrinho de compras</h2>

        <CardCart />
      </CartListStyle>
      
      <Count />
    </>
  );
}
