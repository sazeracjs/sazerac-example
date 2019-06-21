const product = (
  state = {
    title: '',
    price: '',
    inventory: '',
  },
  action
) => {
  switch (action.type) {
    case 'UPDATE_PRODUCT_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      }
    default:
      return state
  }
}

export default product
