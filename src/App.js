import { useState } from 'react';
import Navigation from './Navigation/Nav'
import { Products } from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import './index.css'

//DATABASE
import products from './db/data'
import Card from './components/Card';
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  //input Filter
  const[query, setQuery] = useState("")

  const handleInputChange = e =>{
    setQuery(e.target.value)
  }


const filteredItems = products.filter((product) =>
  product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
);

//RADIO FILTER
const handleChange = e =>{
  setSelectedCategory(e.target.value)
}

//BUTTONS FILTER
const handleClick = e =>{
  setSelectedCategory(e.target.value)
}

  function filteredData(products, selected,query){
    let filteredProducts = products

    //FILTERED INPUT ITEMS
    if (query) {
      filteredProducts = filteredItems
    }

    //SELECTED FILTER
    if (selected) {
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected||
        title ===selected
      
      )
    }

    return filteredProducts.map(({img, star, reviews,title, newPrice, prevPrice}) =>(
      <Card
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice ={prevPrice}
      />
    ))

  }

  const result = filteredData(products, selectedCategory, query)

  return (
    <>
    <Sidebar handleChange ={handleChange}/>
    <Navigation query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
    </>
  );
}

export default App;
