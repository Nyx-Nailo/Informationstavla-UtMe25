import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import System from './system';
import Admin from './admin';
import LogIn from './logIn';

const routing = () => {
	return (
        <Router>
            <Routes>
                <Route path='/' element={<LogIn />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/slideShow' element={<System />} />
            </Routes>
        </Router>
		);
}

export default routing;