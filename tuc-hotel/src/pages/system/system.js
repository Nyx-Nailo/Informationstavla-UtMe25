import { useState, useEffect } from 'react';

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
        },1000)
    },[])

    /*  Timer for page change   */
    const pages = [<Dagsschema />, <Lunch />, <Nyheter />, <Vader />, <Busstider />];
    const viewTime = [5000, 1000, 2000, 1000, 2000];
    const [pageNr, setPageNr] = useState(0);
    const [delay, setDelay] = useState(10);
    const [page, setPage] = useState(<>Loading</>)
    useEffect(() => {
        const interval = setInterval(() => {
            setPage(pages[pageNr]);
            setDelay(viewTime[pageNr]);
            if (pageNr == pages.length - 1) {
                setPageNr(0); 
            } else {
                setPageNr((prevPageNr) => prevPageNr + 1);
            }
        }, delay);
        return () => clearInterval(interval);
    }, [pageNr]);


    return (
        <div id='SlideCont'>
            <div id='SlideHead'>{delay} | {time.toLocaleDateString("sv")} : {time.toLocaleTimeString("sv")}</div>
            <div id='SlideMain'>{page}</div>
            <div className='Widget'></div>
            
            
        </div>
    );
};

export default System;