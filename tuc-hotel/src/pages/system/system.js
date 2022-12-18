import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dagsschema from '../dagsschema/dagsschema';
import Lunch from '../lunch/lunch';
import Nyheter from '../nyheter/nyheter';
import Vader from '../vader/vader';
import Busstider from '../busstider/busstider';

const System = () => {
    const [time, setTime] = useState(new Date());
    const [pageNr, setPageNr] = useState(0);
    const [delay, setDelay] = useState(0);
    const [page, setPage] = useState(<>Loading</>);

    const Clock = () => {
        return (
        <div className='position-absolute top-0 end-0 text-center text-bg-dark col shadow-sm'>
            <div className='p-4'>
                <h5 className='m-0'>{time.toLocaleDateString('sv')}</h5>
                <h2>
                        {time.toLocaleTimeString("sv", { hour: '2-digit', minute: '2-digit' })}
                </h2>
            </div>
        </div>
        );
    };

    /*  Timer för klockan   */
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    /*  Timer för sidorna   */
    useEffect(() => {
        const pages = [<Dagsschema />, <Lunch />, <Nyheter />, <Vader />, <Busstider />];
        /*behöver en sida mer tid ändras det här, tiderna visas i sekunder*/
        const viewTime = [2/*Dagsschema*/, 1/*Lunch*/, 1/*Nyheter*/, 10/*Väder*/, 1/*Buss*/];

        const interval = setInterval(() => {
            setPage(pages[pageNr]);
            setDelay(viewTime[pageNr] * 1000);/*1000 behövs för att tiderna i viewTime ska stämma*/
            if (pageNr === pages.length - 1) {
                setPageNr(0);
            } else {
                setPageNr((prevPageNr) => prevPageNr + 1);
            }
        }, delay);
        return () => clearInterval(interval);
    }, [pageNr, delay]);

    return (
        <>
            <Clock />
            {page}
        </>
  );
};

export default System;
