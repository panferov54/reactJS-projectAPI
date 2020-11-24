import React from "react";

class Form extends React.Component{
    render() {
        return(
            <form action="" onSubmit={this.props.weatherMethod}>
                <input name="city" placeholder="Введите город" type="text"/>
                <select name="country">
                    <option value=""> </option>
                    <option value="ru">Russia</option>
                    <option value="us">USA</option>
                    <option value="uk">Great Britain</option>
                    <option value="es">Spain</option>
                    <option value="it">Italy</option>
                    <option value="fr">France</option>
                </select>
                <button>Узнать погоду</button>
            </form>
        )
    }
}

export default Form;