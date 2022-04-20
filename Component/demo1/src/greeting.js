// const Hello = (props) => {
//     return (<h1>{props.x*props.y}</h1>)
// }
// export default Hello;

// const Person = ({tall, height}) => {
//     return (<h1>hello chieu cao {tall}  can nang {height}</h1>)
// }
// export default Person;
const Hello = ({value, tall}) => {
    return (<h1>hello {value} {tall}</h1>)
}
export default Hello;