import React, { Component } from 'react';

class Obj extends Component {
  constructor(props) {
    super(props)
    const {endpoint, children} = this.props

    this.state = {
      endpoint,
      children
    }
  }
  render() {
    let items = React.Children.toArray(this.state.children)
    console.log('from obj', items)

    return (
      <div>
        <h3>{this.state.endpoint}</h3>
        {items}
        <button>send</button>
      </div>
    )
  }
}

export default Obj;
