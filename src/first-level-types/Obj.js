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
    console.log(items)
    // form json structure here and handle api post

    return (
      <div>
        <h3>{this.state.endpoint}</h3>
        {items}
        <button>send</button>
      </div>
    )
  }
}

export deafult Obj;
