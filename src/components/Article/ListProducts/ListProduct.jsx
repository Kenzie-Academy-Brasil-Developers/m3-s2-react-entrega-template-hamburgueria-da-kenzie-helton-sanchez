import { CardProduct } from "./Card/CardProduct.jsx";
import { ListProductsStyle } from "./listProduct.js";

export function ListProducts() {

  return(

  <ListProductsStyle className="container__products--ul">

    <CardProduct />

  </ListProductsStyle>

  )

  
}
