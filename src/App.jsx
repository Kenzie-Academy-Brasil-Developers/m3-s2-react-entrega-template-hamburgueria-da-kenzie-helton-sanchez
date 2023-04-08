import { useEffect, useState } from 'react'
import { ResetStyle } from './Style/resetStyle.js'
import { GlobalStyle } from './Style/globalStyle.js'
import { Header } from './components/Header/Header.jsx'
import { Article } from './components/Article/Article.jsx'
import { apiHamburgueria } from './services/api.js'

function App() {

  const [apiFood, setApiFood] = useState([]);
  const [addCart, setAddCart] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);


  useEffect(() => {
    async function loadFood () {
      try {
        const apiResponse = await apiHamburgueria.get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products");
        setApiFood(apiResponse.data)
      } catch (error) {

        console.log(error);
      }
    }
    loadFood()
  })

function addToCart (food){
  if(!addToCart.some(product => product.id === food.id)){
    const newCardList = [...addToCart, food]
    setAddCart(newCardList)
  }else{
    console.log("esse item ja foi adicionado ao seu carrinho")
  }
}

function removeOfTheCart (foodId) {
  const removeCart = addToCart.filter(product => product.id !== foodId)
  setAddCart(removeCart)
}


  return (
    <>

      <ResetStyle />
      <GlobalStyle />

      <Header setFilterProduct={setFilterProduct} apiFood={apiFood} />

      <Article apiFood={apiFood} filterProduct={filterProduct} addToCart={addToCart} addCart={addCart} removeOfTheCart={removeOfTheCart} />



    </>
  )
}

export default App
