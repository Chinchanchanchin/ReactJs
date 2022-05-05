import { useState, useEffect } from "react";


function Selector() {
    const [selected, setSelected] = useState("0")
    const [valueSelected, setValueSelected] = useState("");

    const choice = e => {
        setSelected(e.target.value);
    };
    useEffect(() => {
        switch(selected) {
            case "0": setValueSelected("Java");
            break;
            case "1": setValueSelected("Agular");
            break;
            case "2": setValueSelected("Javascript");
            break;
            case "3": setValueSelected("Php");
            break;
            default:
        }
    }, [selected]);
    return (
        <div>
            khoa hoc:
            <select onChange={e =>{choice(e);}}>
                <option value="0">Java</option>
                <option value="1">Angular</option>
                <option value="2">Javascript</option>
                <option value="3">Php</option>
            </select>
            <h2>Your selected: {valueSelected}</h2>
        </div>
    )
}
export default Selector;