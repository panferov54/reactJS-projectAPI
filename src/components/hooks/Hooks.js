import React, {Component, useState} from "react";

//кликер по кнопке
// class Hooks extends Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             count:0,
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h3>ВЫ кликнули: {this.state.count}</h3>
//            <button onClick={()=>{
// this.setState({
//     count:this.state.count+1
// })
//            }}>ТЫК ТЫК</button>
//             </div>
//         )
//     }
// }

function Hooks() {
    const [count,setCount]=useState(0);
return(
    <div>
        <h3>ВЫ кликнули: {count}</h3>
        <button onClick={()=>{
            setCount(count+1)
        }}>ТЫК ТЫК</button>
    </div>
)
}

export default Hooks;