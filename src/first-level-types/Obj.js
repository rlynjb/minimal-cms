import React, { Component } from 'react';

class Obj extends Component {
  static displayName = "object"

  render() {
    let dataItems = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        id: index,
        parentName: this.constructor.displayName,
        parentId: this.props.id
      })
    })

    return (
      <div>
        <h3>{this.props.id} - {this.props.endpoint}</h3>
        {dataItems}
        <button>send</button>
      </div>
    )
  }
}

export default Obj;
