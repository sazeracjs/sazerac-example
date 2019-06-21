import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ product, onFieldUpdated }) => {
  const { title, price, inventory } = product

  const fieldChangeHandler = field => {
    return event => {
      onFieldUpdated(field, event.target.value)
    }
  }

  return (
    <div className="product-form">
      <div>
        <span className="label">Title:</span>
        <input
          type="text"
          onChange={fieldChangeHandler('title')}
          value={title}
        />
      </div>
      <div>
        <span className="label">Price:</span>
        <input
          type="text"
          onChange={fieldChangeHandler('price')}
          value={price}
        />
      </div>
      <div>
        <span className="label">Inventory:</span>
        <input
          type="text"
          onChange={fieldChangeHandler('inventory')}
          value={inventory}
        />
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    inventory: PropTypes.string,
  }),
  onFieldUpdated: PropTypes.func.isRequired,
}
export default Product
