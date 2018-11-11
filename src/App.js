import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Obj from './first-level-types/Obj';
import String from './data-types/String';


class Root extends Component {
  constructor(props) {
    super(props)
    const {children} = this.props
    
    this.state = {
      children
    }
  }
  render() {
    let firstLevelItems = React.Children.toArray(this.state.children)
    console.log('first level', firstLevelItems)

    return(
      <div>
        {firstLevelItems}
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <Root>
        <Obj endpoint="/testend">
          <String keyName="jkjk" ui="text" />
          <String keyName="jkjkfgfg" ui="textarea" />
        </Obj>
      </Root>
    );
  }
}


export default App;
