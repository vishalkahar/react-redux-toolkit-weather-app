import { useGetWeatherByCityQuery } from "../redux/weatherApi";

const WeatherDisplay = ({ city }) => {
    const da = useGetWeatherByCityQuery(city, { skip: !city || city === '' })
    console.log('da', da)
    const { data, isLoading, error } = da

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Something went wrong</p>;
    }

    if (!data) {
        return <p>Please Enter City</p>;
    }

    const currentCondition = data?.current_condition[0];
    return (
        <div className="weather-info">
            <h2>Weather in {city}</h2>
            <p>Temperature: {currentCondition.temp_C} °C</p>
            <p>Weather Conditions are: {currentCondition.weatherDesc[0].value}</p>
        </div>
    );
};

export default WeatherDisplay;