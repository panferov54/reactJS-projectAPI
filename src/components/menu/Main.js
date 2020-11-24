import React,{Component} from "react";
import {Route, NavLink, HashRouter}from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Stuff from "./pages/Stuff";
import WeatherMain from "../weather/WeatherMain";
import MainTicTacToe from "../tictactoe/MainTicTacToe";
import Hooks from "../hooks/Hooks";
import Ccomponent from "../project/project";
class Main extends Component{
    render() {
        return (
            <HashRouter>
                <ul className={"header"}>
                    <li><NavLink  to={"/home"}  exact>Home </NavLink></li>
                    <li><NavLink  to={"/stuff"}> Stuff</NavLink></li>
                    <li><NavLink  to={"/contact"}>Contact</NavLink></li>
                    <li><NavLink  to={"/weather"}>Weather</NavLink></li>
                    <li><NavLink  to={"/tictactoe"}>TicTacToe</NavLink></li>
                    <li><NavLink  to={"/hooks"}>hooks</NavLink></li>
                    <li><NavLink  to={"/project"}>Coctails</NavLink></li>
                </ul>
                <div className="content">
                    <Route path={"/home"} component={Home} />
                    <Route path={"/stuff"} component={Stuff} />
                    <Route path={"/contact"} component={Contact} />
                    <Route path={"/weather"} component={WeatherMain} />
                    <Route path={"/tictactoe"} component={MainTicTacToe} />
                    <Route path={"/hooks"} component={Hooks} />
                    <Route path={"/project"} component={Ccomponent} />
                </div>
            </HashRouter>

        )
    }
}

export default Main;