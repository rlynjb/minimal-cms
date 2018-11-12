import React, { Component } from 'react';

class String extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }
  }
  handleInputValue = (v) => {
    this.setState({ inputValue: v.target.value })
    // use state management or use lift up value to parent
  }
  render() {
    if (this.props.ui === "text") {
      return(
        <div className="text-input">
          <label>{this.props.keyName}</label>
          <input type="text"
            value={this.state.inputValue}
            onChange={this.state.handleInputValue}
          />
        </div>
      )
    }

    if (this.props.ui === "textarea") {
      return(
        <div className="textarea-input">
          <label>{this.props.keyName}</label>
          <textarea row="5"
            value={this.state.inputValue}
            onChange={this.state.handleInputValue}
          />
        </div>
      )
    }
  }
}

export default String;
