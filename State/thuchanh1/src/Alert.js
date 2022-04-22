
const {Component} = require ("react");


class Alert extends Component {
    componentWillUnmount() {
        alert("The component is going to be unmounted");
    }
    render() {
        return (
            <div>Hello World!!!</div>
        )
    }
}
export default Alert;