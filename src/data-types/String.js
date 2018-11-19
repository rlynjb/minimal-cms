import React, { Component } from 'react';
import { store } from '../store';

class String extends Component {
  static displayName = "string"

  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  handleInputValue = (v) => {
    this.setState({value: v.target.value})

    let val = {
      obj: '',
      field: this.props.keyName,
      value: v.target.value
    }

    // store.dispatch({type:'UPDATE_FIELD_VALUE', payload: val})
    // this._reactInternalFiber._debugOwner.type.name
    console.log('child to parent, by event bus or store or up lift')
  }

  render() {
    if (this.props.ui === "text") {
      return(
        <div className="text-input">
          <label>{this.props.keyName}</label>
          <input type="text"
            value={this.state.value}
            onChange={this.handleInputValue}
          />
        </div>
      )
    }

    if (this.props.ui === "textarea") {
      return(
        <div className="textarea-input">
          <label>{this.props.keyName}</label>
          <textarea row="5"
            value={this.state.value}
            onChange={this.handleInputValue}
          />
        </div>
      )
    }
  }
}

export default String;
