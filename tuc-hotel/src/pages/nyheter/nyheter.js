import 'bootstrap/dist/css/bootstrap.min.css';
import'./nyheter.css'

const nyheter = () => {
  return (
    <div id='nyheter'>
      <h1>Nyheter!</h1>
      <div id="container">
      <div id="wrapper">
        <img src='scans/ex1.jpg' alt=''></img>
        <img src='scans/ex2.png'alt=''></img>
        <img src='scans/ex3.jpg'alt=''></img>
        <img src='scans/ex4.jpg' alt=''></img>
      </div>
      </div>
    </div>
  );
};

export default nyheter;
