import Buttons from '../components/Buttons'
import './Recommended.css'
const Recommended = ({handleClick}) => {
  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-btns">
        <Buttons onClickHandler={handleClick} value="" title="All Products"/>
        <Buttons onClickHandler={handleClick} value="Vans" title="Vans"/>
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma"/>
        <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas"/>
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike"/>
      </div>
    </div>
  )
}

export default Recommended