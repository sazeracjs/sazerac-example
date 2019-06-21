import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { test, given, forCases } from 'sazerac'
import Product from './Product'

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() })
})

const ProductComponent = product => {
  const component = shallow(<Product product={product} />)

  return {
    product: component.find('.product'),
    errorMessage: component.find('.error-msg'),
    successMessage: component.find('.success-msg'),
  }
}

test(ProductComponent, () => {
  forCases(
    given({}).describe('when given an empty product'),
    given({ price: '1.11', inventory: '111' }).describe(
      'when given product without title'
    ),
    given({ title: 'p1', inventory: '111' }).describe(
      'when given product without price'
    ),
    given({ title: 'p1', price: '1.11' }).describe(
      'when given product without inventory'
    )
  )
    .assert('should render `error` class', p => {
      expect(p.product.hasClass('error')).toBe(true)
    })
    .assert('should display error message', p => {
      expect(p.errorMessage.text()).toMatch(/Please enter all product info/)
    })
    .assert('should not display success message', p => {
      expect(p.successMessage.exists()).toBe(false)
    })

  given({ title: 'p1', price: '1.11', inventory: '111' })
    .describe('when all product fields are defined')
    .assert('should not render `error` class', p => {
      expect(p.product.hasClass('error')).toBe(false)
    })
    .assert('should display success message', p => {
      expect(p.successMessage.text()).toMatch(/Sweet!/)
    })
})
