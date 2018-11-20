import React, { Component } from 'react';

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
    console.log('value', v.target.value)
    console.log('props', this.props)
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
