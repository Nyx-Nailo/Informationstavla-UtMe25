import 'bootstrap/dist/css/bootstrap.min.css';

const time = (shiftM) => {
  const date = new Date();
  const time = (date.setMinutes(date.getMinutes() + shiftM), (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes());

  return time;
};

const Busstider = () => {
  const buss = [
    { plats: 'Fröstorpsgatan (läge B)', tid: time(4) },
    { plats: 'Tornby Park', tid: time(7) },
    { plats: 'Tornet', tid: time(11) },
    { plats: 'Linköpings resecentrum (läge B3)', tid: time(16) },
  ];

  const tag = [
    { plats: 'Linköping C', tid: time(10), avgång: time(14), spår: '2', info: 'SJ Snabbtåg Bistro Vagnsordning 7-6-5-4-3-1' },
    { plats: 'Norrköping C', tid: time(43), avgång: time(45), spår: '7a', info: 'SJ Snabbtåg Bistro Vagnsordning 7-6-5-4-3-1' },
    { plats: 'Södertälje Syd', tid: time(84), avgång: time(89), spår: '5', info: 'SJ Snabbtåg Ingen påstigning' },
    { plats: 'Stockholm C', tid: time(124), avgång: time(143), spår: '19a', info: 'SJ Snabbtåg Ingen påstigning' },
  ];

  const divStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
  };

  const Table = (props) => {
    const Tr = (props) => {
      return (
        <tr>
          <th scope='row'>{props.num + 1}</th>
          <td>{props.item.plats}</td>
          <td>{props.item.tid}</td>
          <td>{props.item.avgång}</td>
          <td>{props.item.spår}</td>
          <td>{props.item.info}</td>
        </tr>
      );
    };

    return (
      <table className='table'>
        <thead>
          {props.check ? (
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Hållplats</th>
              <th scope='col'>Ankomst</th>
            </tr>
          ) : (
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Station</th>
              <th scope='col'>Ankomst</th>
              <th scope='col'>Avgång</th>
              <th scope='col'>Spår</th>
              <th scope='col'>Information</th>
            </tr>
          )}
        </thead>
        <tbody>
          {props.trans.map((tr, index) => {
            return <Tr item={tr} num={index} key={tr.plats + index} />;
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div id='busstider' style={divStyle}>
      <div style={{ width: 'fit-content' }}>
        <h1>Buss</h1>
        <Table trans={buss} check={true} />
      </div>
      <div style={{ width: 'fit-content' }}>
        <h1>Tåg</h1>
        <Table trans={tag} check={false} />
      </div>
    </div>
  );
};

export default Busstider;
