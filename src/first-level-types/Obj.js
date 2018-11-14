import React, { Component } from 'react';

class Obj extends Component {
  static displayName = "object"

  handleChangeValue = (v) => {
    console.log(v.target.value)
  }
  render() {
    let dataItems = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        index,
        inputValue: '',
        handleInputValue: this.handleChangeValue
      })
    })
    
    // console.log('data items', dataItems)

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
