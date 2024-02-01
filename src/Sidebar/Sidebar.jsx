import { FaShoppingCart } from "react-icons/fa"
import Colors from './Category/Colors/Colors'
import Price from './Category/Price/Price'
import './Sidebar.css'
import Category from './Category/Category'

const Sidebar = ({handleChange}) => {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <h1><FaShoppingCart /></h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </section>
    </>
  )
}

export default Sidebar