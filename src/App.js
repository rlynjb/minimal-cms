import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Obj from './first-level-types/Obj';
import String from './data-types/String';
import { store } from './store';


class Root extends Component {
  render() {
    let schema = {}

    let firstLevelItems = React.Children.map(this.props.children, (item, index) => {
      let objectType = {
        keyName: item.props.keyName,
        endpoint: item.props.endpoint,
        type: item.type.displayName,
        fields: {}
      }
      
      React.Children.map(item.props.children, (c, ind) => {
        objectType.fields[c.props.keyName] = {
          keyName: c.props.keyName,
          ui: c.props.ui,
          type: c.type.displayName
        }
      })

      schema[item.props.keyName] = objectType

      return item
    })

    store.dispatch({type: 'CREATE_SCHEMA', payload: schema})

    return(
      <div>
        {firstLevelItems}
        <button onClick={ () => store.dispatch({type: 'TES'}) }>test button</button>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <Root>
        <Obj keyName="activities" endpoint="/testend">
          <String keyName="jkjk" ui="text" />
          <String keyName="jkjkfgfg" ui="textarea" />
        </Obj>

        <Obj keyName="cat" endpoint="/another/end">
          <String keyName="hello" ui="text" />
        </Obj>
      </Root>
    );
  }
}


export default App;
