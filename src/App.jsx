import { useState } from 'react'
import { ResetStyle } from './Style/resetStyle.js'
import { GlobalStyle } from './Style/globalStyle.js'
import { Header } from './components/Header/Header.jsx'
import { Article } from './components/Article/Article.jsx'
// import { ListProducts } from './components/ListProducts/ListProduct.jsx'

function App() {


  return (
    <>

      <ResetStyle />
      <GlobalStyle />

      <Header />

      <Article />

      {/* <ListProducts /> */}


    </>
  )
}

export default App
