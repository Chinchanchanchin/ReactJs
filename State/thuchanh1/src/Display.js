import Alert from "./Alert";
const {Component} = require("react");


class Display extends Component {
    constructor() {
        super();
        this.state = {
            display: true
        };
    }
    delete = () => {
        this.setState({display: false});
    };
    render () {
        let comp;
        if (this.state.display) {
            comp = <Alert/>
        }
        return (
            <div style={{ textAlign: "center"}}>
                {comp}
                <button onClick={this.delete}>
                Delete the component    
                </button>
            </div>
        )
    }
}
export default Display;