import { CardCount } from "./count.js";

export function Count() {
  return (
    <CardCount>
      <div>
        <h3>Total</h3>
        <h4>R$00,00</h4>
      </div>
      <button onClick>Remover todos</button>
    </CardCount>
  );
}
