import 'bootstrap/dist/css/bootstrap.min.css';

const Busstider = () => {

  const buss = [{"plats": "Fröstorpsgatan (läge B)", "tid": "13:45"}, {"plats": "Tornby Park", "tid": "13:47"}, {"plats": "Tornet", "tid": "13:48"}, {"plats": "Linköpings resecentrum (läge B3)", "tid": "13:53"}]

  const tag = [{"plats": "Linköping C", "tid": "14:52", "avgång": "14:54", "spår": "2", "info": "SJ Snabbtåg\nBistro\nVagnsordning 7-6-5-4-3-1"}, {"plats": "Norrköping C", "tid": "15:17", "avgång": "15:18", "spår": "7a", "info": "SJ Snabbtåg\nBistro\nVagnsordning 7-6-5-4-3-1"}, {"plats": "Södertälje Syd", "tid": "16:20", "avgång": "", "spår": "5", "info": "SJ Snabbtåg\nIngen påstigning"}, {"plats": "Stockholm C", "tid": "16:38", "avgång": "", "spår": "19a", "info": "SJ Snabbtåg\nIngen påstigning"}]

  const divStyle = 
  {
    display: "flex",
    justifyContent: "space-evenly",
  }

  const Table = (props) => 
  {

    const Tr = (props) => 
      {
        return (
            <tr>
              <th scope="row">{props.num + 1}</th>
              <td>{props.item.plats}</td>
              <td>{props.item.tid}</td>
              <td>{props.item.avgång}</td>
              <td>{props.item.spår}</td>
              <td>{props.item.info}</td>
            </tr>
            )
      }

      return (
        <table className="table">
          <thead>
            { props.check ? (<tr><th scope="col">#</th><th scope="col">Hållplats</th><th scope="col">Ankomst</th></tr>) : (<tr><th scope="col">#</th><th scope="col">Station</th><th scope="col">Ankomst</th><th scope="col">Avgång</th><th scope="col">Spår</th><th scope="col">Information</th></tr>) }  
          </thead>
          <tbody>
            { props.trans.map( (tr, index) => {return <Tr item={tr} num={index} key={tr.plats+index}/>} ) }
          </tbody>
        </table>
      )

  }


  return (
      <div id='busstider' style={divStyle}>
        <div style={{width: "fit-content"}}>
          <h1 style={{textAlign: "center"}}>Buss</h1>
          <Table trans={buss} check={true}/>          
        </div>
        <div style={{width: "fit-content"}}>
          <h1 style={{textAlign: "center"}}>Tåg</h1>
          <Table trans={tag} check={false}/>
        </div>
      </div>
    );
};

export default Busstider;
