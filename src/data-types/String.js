class String extends Component {
  constructor(props) {
    super(props)
    const {keyName, ui} = this.props

    this.state = {
      ui,
      keyName,
      inputValue: ''
    }
  }
  handleInputValue = (v) => {
    this.setState({ inputValue: v.target.value })
    // use state management here
  }
  render() {
    if (this.state.ui === "text") {
      return(
        <div className="text-input">
          <label>{this.state.keyName}</label>
          <input type="text"
            value={this.state.inputValue}
            onChange={this.handleInputValue}
          />
        </div>
      )
    }

    if (this.state.ui === "textarea") {
      return(
        <div className="textarea-input">
          <label>{this.state.keyName}</label>
          <textarea row="5"
            value={this.state.inputValue}
            onChange={this.handleInputValue}
          />
        </div>
      )
    }
  }
}

export default String;
