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
    case "UPDATE_FIELD_VALUE": {
      // update value of field using obj keyname and field keyname
      console.log('fr. store', action)
      break
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
