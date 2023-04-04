import { CartList } from "./Cart/Cart.jsx";
import { ListProducts } from "./ListProducts/ListProduct.jsx";
import { MainArticle } from "./article.js";

export function Article() {
  return (

    <MainArticle>

      <section className="container__products">
        <ListProducts />
      </section>
      <section className="container__card">
        <CartList />
      </section>

    </MainArticle>
    
  );
}
