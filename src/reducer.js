// NOTE: Not creating a separate 'core' module because this reducer is simple.
import {Map} from 'immutable'

function setState (state, newState) {
  return state.merge(newState)
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
  }

  return state
}
