import 'bootstrap/dist/css/bootstrap.min.css';

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const weathers = ['Sol', 'Regn', 'Snö', 'Mulet'];
const days = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];

const VaderNu = () => {
  return (
    <div id='vaderNu' className='text-center position-absolute top-50 start-50 translate-middle'>
      <div className='card-body'>
        <h6 className='p-0 m-0' style={{ fontSize: '1rem' }}>
          {days[new Date().getDay()]}
        </h6>
        <h1 className='p-0 m-0' style={{ fontSize: '6rem' }}>
          {randomInteger(-10, 4)}°
        </h1>
        {weathers[randomInteger(0, 3)]}, {randomInteger(0, 4)}m/s
      </div>
    </div>
  );
};

const BoxSeven = (props) => {
  return (
    <div className='card col m-2 p-3'>
      <div>
        <h6>{days[props.day]}</h6>
      </div>
      <div>
        <h1>{randomInteger(-8, 5)}°</h1>
      </div>
      <div>
        {weathers[randomInteger(0, 3)]},<br /> {randomInteger(0, 4)}m/s
      </div>
    </div>
  );
};

const VaderSju = () => {
  const box = () => {
    let iDag = new Date().getDay() + 1;
    let box = [];

    for (let i = 0; i < 7; i++) {
      box.push(<BoxSeven key={i} day={iDag} />);
      if (iDag === 6) {
        iDag = 0;
      } else {
        iDag++;
      }
    }
    return box;
  };

  return (
    <div id='vaderSju' className='position-absolute bottom-0 container-fluid'>
      <div className='row text-center '>{box()}</div>
    </div>
  );
};

const Vader = () => {
  return (
    <div id='vader'>
      <VaderNu />
      <VaderSju />
    </div>
  );
};

export default Vader;
