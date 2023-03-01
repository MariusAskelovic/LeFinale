import './OneProduct.css'

const OneProduct = (props) => {
  return (
    <div className='mainDiv'> {
      props.items.map((item, index) => (
        <div key={index} className="productCard">
          <img src={item.image} alt="product photo" className='productPhoto' />

          <div className="productCardChild">
            <p className='productTitle'>{item.title}</p>
          </div>

          <div>
            <p className='productDescription'>{item.description}</p>
            <div className='priceRating'>
              <p className='productPrice'>Price: {item.price} $</p>
              <p className='productRating'>{item.rating.rate} &#9734; ( {item.rating.count} ) </p>
            </div>
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default OneProduct
