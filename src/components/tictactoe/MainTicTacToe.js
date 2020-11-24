import React from "react";
import Board from "./Board";

class MainTicTacToe extends React.Component{
    render() {
        return(
            <div>
<h1>крестики нолики</h1>
         <div className={"game-board"}>
             <Board />
         </div>
                <div className={"game-info"}>

                </div>
            </div>
        )
    }
}
export default MainTicTacToe;