import React from "react";
import WeatherController from "./WeatherController";
import Info from "./Info";
import Form from "./Form";


const API_KEY='eaff0e9f3f2963719e6b456224c130e3';

class WeatherMain extends React.Component{
    state ={
        iconUrl:null,
        alt:null,
        wind:null,
        main:null,
        temp:null,
        city:null,
        country:null,
        sunrise:null,
        sunset:null,
        error:null,
    }
    //Promise ( обещание) - это объект, представляющий окончательное заверщение или сбой асинхронного запроса. Промисс возвращает объект, к которому прикрепляется коллбэк

    gettingWeather=async(e)=>{
        e.preventDefault();
       const city= e.target.elements.city.value; // получаем значение введеного в поля формыс name city
        const country= e.target.elements.country.value;

        //выполняем асинхронный запрос
        //при успешном выполнениее получаем статус сервера 200

        const apiUrl= await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}`);

//        считываем данные
        const data = await apiUrl.json();

        try {
            let sunrise=data.city.sunrise;
            let sunset=data.city.sunset;
            let date=new Date((sunrise+data.city.timezone)*1000);
            let date2=new Date((sunset+data.city.timezone)*1000);
            console.log(date2);
            let sunriseDate=date.getUTCHours()+' : ' + date.getMinutes() + ' : ' + date.getSeconds();
            let sunsetDate=date2.getUTCHours()+' : ' + date2.getMinutes() + ' : ' + date2.getSeconds();
            this.setState({
                main:data.list[0].weather[0].main,
                iconUrl:"http://openweathermap.org/img/w/"+data.list[0].weather[0].icon+".png",
                alt:data.list[0].weather[0].description,
                temp:Math.round(data.list[0].main.temp-273.15),
                wind:data.list[0].wind.speed,
                city:data.city.name,
                country:data.city.country,
                sunrise:sunriseDate,
                sunset:sunsetDate
            })

        }catch (error) {
            alert("Нет такого города")
        }


        //setState - позволяет установиь новые значения в state и как только это произойдет наш компонент будет перерисован с новыми данными

}


    render() {
        return(
            <div>
             <Info />
             <Form weatherMethod={this.gettingWeather} />
             <WeatherController
                main={this.state.main}
                iconUrl={this.state.iconUrl}
                wind={this.state.wind}
                city={this.state.city}
                country={this.state.country}
                sunset={this.state.sunset}
                sunrise={this.state.sunrise}
                alt={this.state.alt}
                temp={this.state.temp}
             />
            </div>
        )
    }
}

export default WeatherMain;