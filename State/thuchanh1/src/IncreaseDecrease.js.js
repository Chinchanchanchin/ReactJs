const {Component} = require ('react');

class DemoState1 extends Component {
    constructor () {
        super();
        this.state = {number: 0}
    }
    increase = () => {
        this.setState({number: this.state.number +1});
    }
    decrease = () => {
        this.setState({number: this.state.number - 1})
    }
    render () {
        return(
        <div style={{textAlign: "center", padding: 30}}>
            <button onClick={this.increase}>Increase</button>
            <span style={{padding:10}}>{this.state.number}</span>
            <button onClick={this.decrease}>Decrease</button>
        </div>
        );
    }
}
export default DemoState1;