import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const admin = () => {
  return (
    <div className='text-center position-absolute top-50 start-50 translate-middle'>
      <NavLink to='/slideShow'>
        <h3>Starta rotation av sidorna</h3>
      </NavLink>
      <br />
      <br />
      <p className='p-0 m-0'>Kolla enskild sida:</p>
      <NavLink to='/Dagsschema'>Dagsschema</NavLink>&nbsp;
      <NavLink to='/Lunch'>Lunch</NavLink>&nbsp;
      <NavLink to='/Nyheter'>Nyheter</NavLink>&nbsp;
      <NavLink to='/Vader'>Väder</NavLink>&nbsp;
      <NavLink to='/Busstider'>Busstider</NavLink>&nbsp;
    </div>
  );
};

export default admin;
