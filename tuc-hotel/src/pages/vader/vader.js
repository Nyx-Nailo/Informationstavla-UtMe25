import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const url =
  'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/15.596/lat/58.4343/data.json';

const symbols = [
  'Klar himmel',
  'Nästan klar himmel',
  'Blandade moln',
  'Halv klar himmel',
  'Molnig himmel',
  'Mulet',
  'Dimma',
  'Lätta regnskurar',
  'Måttliga regnskurar',
  'Kraftiga regnskurar',
  'Åskstorm',
  'Lätta snöblandade regnskurar',
  'Måttliga snöblandade regnskurar',
  'Kraftiga snöblandade regnskurar',
  'Lätta snöskurar',
  'Måttliga snöskurar',
  'Kraftiga snöskurar',
  'Lätt regn',
  'Måttligt regn',
  'Kraftigt regn',
  'Åska',
  'Lätt snöblandat regn',
  'Måttligt snöblandat regn',
  'Kraftigt snöblandat regn',
  'Lätt snöfall',
  'Måttligt snöfall',
  'Kraftigt snöfall',
];
const days = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];

export const VaderIDag = (props) => {
  const firstTemp = props.data[0].temperature;
  const firstWind = props.data[0].wind;
  const firstSymbol = props.data[0].weatherSymbol;

  return (
    <div className='text-center position-absolute top-50 start-50 translate-middle'>
      <div className='card-body'>
        <div>
          <h6 className='p-0 m-0' style={{ fontSize: '1rem' }}>
            {days[new Date().getDay()]}
          </h6>
          <h1 className='p-0 m-0' style={{ fontSize: '6rem' }}>
            {Math.ceil(firstTemp)}°
          </h1>
          <p className='p-0 m-0'>
            {Math.floor(firstWind)}m/s, {symbols[firstSymbol]}
          </p>
        </div>
      </div>
    </div>
  );
};

export const VaderSjuDagar = (props) => {
  return (
    <div className='position-absolute bottom-0 container-fluid'>
      <div className='row text-center'>
        {props.data.map((data, index) => {
          if (
            data.time.slice(8, -1).slice(0, 2) !== new Date().getDate() &&
            index !== 0 &&
            index <= 7
          ) {
            let whatDay = new Date(data.time.replace('T', ' ').replace('Z', '').slice(0, 11));
            let dayNumber = whatDay.getDay();

            return (
              <div key={index} className='card col m-2 p-3'>
                <div>
                  <h6>{days[dayNumber]}</h6>
                </div>
                <div>
                  <h1>{Math.ceil(data.temperature)}°</h1>
                  {Math.floor(data.wind)}m/s, {symbols[data.weatherSymbol]}
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

const Vader = () => {
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!weatherData) {
      setIsLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const temperatureData = data.timeSeries
            .filter((timePeriod) => timePeriod.validTime.slice(11, -4) === '12:00')
            .map((timePeriod) => {
              const temperatureParameter = timePeriod.parameters.find(
                (parameter) => parameter.name === 't'
              );
              const windParameter = timePeriod.parameters.find(
                (parameter) => parameter.name === 'ws'
              );
              const weatherSymbol = timePeriod.parameters.find(
                (parameter) => parameter.name === 'Wsymb2'
              );

              return {
                time: timePeriod.validTime,
                temperature: temperatureParameter.values,
                wind: windParameter.values,
                weatherSymbol: weatherSymbol.values - 1,
              };
            });

          setWeatherData(temperatureData);
        });
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoading && weatherData) {
    return (
      <div id='vader'>
        <VaderIDag data={weatherData} />
        <VaderSjuDagar data={weatherData} />
      </div>
    );
  } else {
    return (
      <div className='text-center position-absolute top-50 start-50 translate-middle'>
        <div className='card-body'>
          <div>
            <h1>Loading...</h1>
          </div>
        </div>
      </div>
    );
  }
};

export default Vader;
