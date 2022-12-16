import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dagsschema from '../dagsschema/dagsschema';
import Lunch from '../lunch/lunch';
import Nyheter from '../nyheter/nyheter';
import Vader from '../vader/vader';
import Busstider from '../busstider/busstider';



const System = () => {
    
    /*  Clock   */
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [])
    const Clock = () => {
        return (
            <>
                {time.toLocaleDateString("sv")} {time.toLocaleTimeString("sv")}
            </>
            );
    }

    /*  Timer for page change   */
    const pages = [<Dagsschema />, <Lunch />, <Nyheter />, <Vader />, <Busstider />];
    const viewTime = [5, 3, 3, 3, 3]; /*Tid i sekunder som sidan med samma index visas*/
    const [pageNr, setPageNr] = useState(0);
    const [delay, setDelay] = useState(0);
    const [page, setPage] = useState(<>Loading</>)
    useEffect(() => {
        const interval = setInterval(() => {
            setPage(pages[pageNr]);
            setDelay(viewTime[pageNr]* 1000);
            if (pageNr === pages.length - 1) {
                setPageNr(0); 
            } else {
                setPageNr((prevPageNr) => prevPageNr + 1);
            }
        }, delay);
        return () => clearInterval(interval);
    }, [pageNr, delay]);


    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-10"></div>
                <div className="col-1">
                    <Clock />
                </div>
            </div>
            <div className='row'>
                <div className='col'></div>
                <div className='col'>{page}</div>
                <div className='col'></div>
            </div>
        </div>
    );
};

export default System;