import { createStore } from 'redux'


const initialState = {
  schema: ''
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "CREATE_SCHEMA": {
      return Object.assign({}, state, {
        schema: action.payload
      })
    }
    default: {
      return state
    }
  }
}


export const store = createStore(reducer)

// use subscribe to listen for changes
// getState
// dispatch action
