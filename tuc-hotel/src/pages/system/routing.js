import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import System from './system';
import Admin from './admin';
import LogIn from './logIn';

import Dagsschema from '../dagsschema/dagsschema';
import Lunch from '../lunch/lunch';
import Nyheter from '../nyheter/nyheter';
import Vader from '../vader/vader';
import Busstider from '../busstider/busstider';

const routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/slideShow' element={<System />} />
        <Route path='/Dagsschema' element={<Dagsschema />} />
        <Route path='/Lunch' element={<Lunch />} />
        <Route path='/Nyheter' element={<Nyheter />} />
        <Route path='/Vader' element={<Vader />} />
        <Route path='/Busstider' element={<Busstider />} />
      </Routes>
    </Router>
  );
};

export default routing;
