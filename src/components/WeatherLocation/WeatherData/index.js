import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weathers';
import './styles.css'

const WheatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature
            temperature={20}
            weatherState={CLOUDY}
        ></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
)   

export default WheatherData;
