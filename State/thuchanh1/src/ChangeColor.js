const {Component} = require ('react');
class ChangeColor extends  Component {
    constructor() {
        super();
        this.state = {color: 'black'};
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({color: 'pink'})
        }, 5000);
    }
    render() {
        return (
            <div style={{
                backgroundColor: this.state.color,
                paddingTop: 20,
                width: 400,
                height: 80,
                margin: 'auto' 
            }}>

            </div>
        )
    }
}
export default ChangeColor;