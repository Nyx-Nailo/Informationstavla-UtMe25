import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const url = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/15.596/lat/58.4343/data.json';

const symbols = [
  {
    type: 'Klar himmel',
    img: '../img/img/vader/sun.svg',
  },
  {
    type: 'Nästan klar himmel',
    img: '../img/vader/sunsmallcloud.svg',
  },
  {
    type: 'Blandade moln',
    img: '../img/vader/suncloud.svg',
  },
  {
    type: 'Halv klar himmel',
    img: '../img/vader/sunsmallcloud.svg',
  },
  {
    type: 'Molnig himmel',
    img: '../img/vader/cloud.svg',
  },
  {
    type: 'Mulet',
    img: '../img/vader/cloud.svg',
  },
  {
    type: 'Dimma',
    img: '../img/vader/fog.svg',
  },
  {
    type: 'Lätta regnskurar',
    img: '../img/vader/lightrain.svg',
  },
  {
    type: 'Måttliga regnskurar',
    img: '../img/vader/rain.svg',
  },
  {
    type: 'Kraftiga regnskurar',
    img: '../img/vader/rain.svg',
  },
  {
    type: 'Åskstorm',
    img: '../img/vader/lightingrain.svg',
  },
  {
    type: 'Lätta snöblandade regnskurar',
    img: '../img/vader/snow.svg',
  },
  {
    type: 'Måttliga snöblandade regnskurar',
    img: '../img/vader/snow.svg',
  },
  {
    type: 'Kraftiga snöblandade regnskurar',
    img: '../img/vader/snow.svg',
  },
  {
    type: 'Lätta snöskurar',
    img: '../img/vader/snow.svg',
  },
  {
    type: 'Måttliga snöskurar',
    img: '../img/vader/snow.svg',
  },
  {
    type: 'Kraftiga snöskurar',
    img: '../img/vader/snow.svg',
  },
  {
    type: 'Lätt regn',
    img: '../img/vader/rain.svg',
  },
  {
    type: 'Måttligt regn',
    img: '../img/vader/rain.svg',
  },
  {
    type: 'Kraftigt regn',
    img: '../img/vader/rain.svg',
  },
  {
    type: 'Åska',
    img: '../img/vader/lightning.svg',
  },
  {
    type: 'Lätt snöblandat regn',
    img: '../img/vader/snow.svg',
  },
  {
    type: 'Måttligt snöblandat regn',
    img: '../img/vader/snow.svg',
  },
  {
    type: 'Kraftigt snöblandat regn',
    img: '../img/vader/snow.svg',
  },
  {
    type: 'Lätt snöfall',
    img: '../img/vader/snow.svg',
  },
  {
    type: 'Måttligt snöfall',
    img: '../img/vader/snow.svg',
  },
  {
    type: 'Kraftigt snöfall',
    img: '../img/vader/snow.svg',
  },
];
const days = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];

const VaderIDag = (props) => {
  const firstTemp = props.data[0].temperature;
  const firstWind = props.data[0].wind;
  const firstSymbol = props.data[0].weatherSymbol;

  return (
    <div className='text-center position-absolute start-50 translate-middle-x container-fluid mt-5'>
      <div className='card-body p-5' style={{ backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'linear-gradient(295deg, rgba(255, 255, 255, .5), rgba(255,255,255, 0.25)), url(' + symbols[props.data[0].weatherSymbol].img }}>
        <div>
          <h6 className='p-0 m-0' style={{ fontSize: '1rem' }}>
            {days[new Date().getDay()]}
          </h6>
          <h1 className='p-0 m-0' style={{ fontSize: '6rem' }}>
            {Math.ceil(firstTemp)}°
          </h1>
          <p className='p-0 m-0'>
            {Math.floor(firstWind)}m/s, {symbols[firstSymbol].type}
          </p>
        </div>
      </div>
    </div>
  );
};

const VaderSjuDagar = (props) => {
  return (
    <div className='position-absolute bottom-0 container-fluid'>
      <div className='row text-center'>
        {props.data.map((data, index) => {
          if (data.time.slice(8, -1).slice(0, 2) !== new Date().getDate() && index <= 6) {
            let whatDay = new Date(data.time.replace('T', ' ').replace('Z', '').slice(0, 11));
            let dayNumber = whatDay.getDay();

            return (
              <div key={index} className='card col m-2 p-3 shadow-sm' style={{ backgroundPosition: '-115%', backgroundRepeat: 'no-repeat', backgroundImage: 'linear-gradient(295deg, rgba(255, 255, 255, 1), rgba(255,255,255, 0.75), rgba(255,255,255, 0.25)), url(' + symbols[data.weatherSymbol].img }}>
                <div>
                  <h6>{days[dayNumber]}</h6>
                </div>
                <div>
                  <h1>{Math.ceil(data.temperature)}°</h1>
                  {Math.floor(data.wind)}m/s, {symbols[data.weatherSymbol].type}
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
  const [todayWeatherData, setTodayWeatherData] = useState();
  const [sevenDayData, setSevenDayData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  useEffect(() => {
    if (typeof sevenDayData === 'undefined' || typeof todayWeatherData === 'undefined' || todayWeatherData[0].validTime.slice(0, -10) !== today) {
      setIsLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const transformedTimeSeries = data.timeSeries.map((timeseries) => {
            const temperatureParameter = timeseries.parameters.find((parameter) => parameter.name === 't');
            const windParameter = timeseries.parameters.find((parameter) => parameter.name === 'ws');
            const weatherSymbol = timeseries.parameters.find((parameter) => parameter.name === 'Wsymb2');
            return {
              validTime: timeseries.validTime,
              temperature: temperatureParameter.values,
              wind: windParameter.values,
              weatherSymbol: weatherSymbol.values - 1,
            };
          });

          transformedTimeSeries.length = 1;

          setTodayWeatherData(transformedTimeSeries);

          const temperatureData = data.timeSeries
            .filter((timePeriod) => timePeriod.validTime.slice(11, -4) === '12:00')
            .map((timePeriod) => {
              const temperatureParameter = timePeriod.parameters.find((parameter) => parameter.name === 't');
              const windParameter = timePeriod.parameters.find((parameter) => parameter.name === 'ws');
              const weatherSymbol = timePeriod.parameters.find((parameter) => parameter.name === 'Wsymb2');

              return {
                time: timePeriod.validTime,
                temperature: temperatureParameter.values,
                wind: windParameter.values,
                weatherSymbol: weatherSymbol.values - 1,
              };
            });

          if (temperatureData[0].time.slice(0, -10) === today) {
            temperatureData.shift();
          }

          temperatureData.length = 7;

          setSevenDayData(temperatureData);
        });
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoading && sevenDayData) {
    return (
      <div id='vader'>
        <VaderIDag data={todayWeatherData} />
        <VaderSjuDagar data={sevenDayData} />
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
