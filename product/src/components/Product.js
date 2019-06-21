import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ product }) => {
  const { title, price, inventory } = product

  let err = false
  if (!title || !price || !inventory) {
    err = true
  }

  const message = err ? (
    <div className="error-msg">Please enter all product info</div>
  ) : (
    <div className="success-msg">Sweet!</div>
  )

  return (
    <div className={'product' + (err ? ' error' : '')}>
      <div className="product-info">
        <div>Title: {title}</div>
        <div>Price: {price}</div>
        <div>Inventory: {inventory}</div>
      </div>
      {message}
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    inventory: PropTypes.string,
  }),
}
export default Product
