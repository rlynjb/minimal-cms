import React, { Component } from 'react';

class Obj extends Component {
  static displayName = "object"
  
  listenForFieldValue() {
    // form obj structure and send value to store here
  }

  render() {
    let dataItems = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        index,
        inputValue: ''
      })
    })

    return (
      <div>
        <h3>{this.props.endpoint}</h3>
        {dataItems}
        <button>send</button>
      </div>
    )
  }
}

export default Obj;
