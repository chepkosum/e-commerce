import Card from '../components/Card'
import './Products.css'
export const Products = ({result}) => {
  return (
    <>
    <section className="card-container">
      {result}
    </section>
    </>
  )
}
