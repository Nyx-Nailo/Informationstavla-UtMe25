import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const logIn = () => {
  return (
    <div className='bg-info d-grid position-absolute top-50 start-50 translate-middle shadow-lg rounded border border-primary'>
      <label className='mt-2 ms-2'>Användarnamn</label>
      <input className='ms-2 me-2' type='text'></input> 
      <label className='ms-2 mt-2'>Lösenord</label>
      <input className='ms-2 me-2' type='password'></input>
      <NavLink className='w-50 text-center ms-5 mb-2 mt-3' to='/admin'><button className='rounded w-100'>Log In</button></NavLink>
    </div>
  );
}

export default logIn;