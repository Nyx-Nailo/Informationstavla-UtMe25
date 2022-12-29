import 'bootstrap/dist/css/bootstrap.min.css';
import './nyheter.css';

const nyheter = () => {
  return (
    <div id='nyheter'>
      <div id='container'>
        <div id='wrapper'>
          <img src='scans/ex1.jpg' className='pic' alt=''></img>
          <img src='scans/ex2.png' className='pic' alt=''></img>
          <img src='scans/ex3.jpg' className='pic' alt=''></img>
          <img src='scans/ex4.jpg' className='pic' alt=''></img>
        </div>
      </div>
    </div>
  );
};

export default nyheter;
