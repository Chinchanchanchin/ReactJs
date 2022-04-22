const {Component} = require("react");

class KeyPress extends Component {
    constructor () {
        super();
        this.state = {keypressed : ''}
    }
    handler = (e) => {
        this.setState({keypressed: e.key})
    }
    render() {
        return(
            <div>
                <h1>Nhap vao: {this.state.keypressed}</h1>
                <input text="text" onKeyPress={(e) => this.handler(e)}></input>
            </div>
        )
    }
}
export default KeyPress;