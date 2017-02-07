import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Product from './components/Product'
import ProductForm from './components/ProductForm'
import { updateProductField } from './actions'

const App = ({ product, onProductFieldUpdated }) => {
  return (
    <div className='product-app'>
      <Product product={product} />
      <ProductForm product={product} onFieldUpdated={onProductFieldUpdated} />
    </div>
  )
}

App.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    inventory: PropTypes.string
  }),
  onProductFieldUpdated: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    product: state.product
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onProductFieldUpdated: (field, value) => {
      dispatch(updateProductField(field, value))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
