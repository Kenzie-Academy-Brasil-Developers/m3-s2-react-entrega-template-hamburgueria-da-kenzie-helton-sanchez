import { CartList } from "./Cart/Cart.jsx";
import { ListProducts } from "./ListProducts/ListProduct.jsx";
import { MainArticle } from "./article.js";

export function Article({apiFood, filterProduct, addToCart, addCart, removeOfTheCart}) {
  return (

    <MainArticle>

      <section className="container__products">
        <ListProducts apiFood={apiFood} filterProduct={filterProduct} addToCart={addToCart} addCart={addCart} />
      </section>
      <section className="container__card">
        <CartList addCart={addCart} removeOfTheCart={removeOfTheCart} />
      </section>

    </MainArticle>
    
  );
}
