import Alert from "./Alert";
const {Component} = require("react");
 class Display extends Component {
     constructor() {
         super();
         this.state = {display: true}
     }
     delete = () => {
         this.setState({display:false})
     }
     render() {
         let comp;
         if(this.state.display) {
            return(
                <div>
                <h1>Hello world</h1>
                <button onClick={this.delete}>Click</button>
                </div>
            )
         } else {
             return(
                 <Alert/>
             )
         }
         
     }
 }


export default Display;