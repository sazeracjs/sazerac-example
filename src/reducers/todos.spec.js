import { test, given } from 'sazerac'
import todos from './todos'

test(todos, () => {

  given(undefined, {}).expect([])

  given([], {
    type: 'ADD_TODO',
    text: 'Run the tests',
    id: 0
  })
  .describe('when state is empty and a todo is added')
  .assert('should add the todo and set `id` property', (state) => {
    expect(state[0].id).toEqual(0)
  })
  .assert('should add the todo and set `text` property', (state) => {
    expect(state[0].text).toEqual('Run the tests')
  })
  .assert('should set completed:false on the added todo', (state) => {
    expect(state[0].completed).toEqual(false)
  })
  .assert('should add only one todo', (state) => {
    expect(state.length).toEqual(1)
  })

  given([
    {
      text: 'Run the tests',
      completed: false,
      id: 0
    }
  ], {
    type: 'ADD_TODO',
    text: 'Use Redux',
    id: 1
  })
  .describe('when state has an existing todo and another todo is added')
  .assert('should add the todo after the existing todo', (state) => {
    expect(state[1].id).toEqual(1)
  })
  .assert('should add only one todo', (state) => {
    expect(state.length).toEqual(2)
  })

  given([
    {
      text: 'Run the tests',
      completed: false,
      id: 1
    }, {
      text: 'Use Redux',
      completed: false,
      id: 0
    }
  ], {
    type: 'TOGGLE_TODO',
    id: 1
  })
  .describe('when a todo with completed:false is toggled')
  .assert('should set complete:true on the toggled todo', (state) => {
    expect(state[0].completed).toEqual(true)
  })
  .assert('should not toggle any other todos', (state) => {
    expect(state[1].completed).toEqual(false)
  })

  given([
    {
      text: 'Run the tests',
      completed: true,
      id: 1
    }
  ], {
    type: 'TOGGLE_TODO',
    id: 1
  })
  .describe('when a todo with completed:true is toggled')
  .assert('should set complete:false on the toggled todo', (state) => {
    expect(state[0].completed).toEqual(false)
  })

})
