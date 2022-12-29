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
  const [page, setPage] = useState(<>Loading</>);
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const ProgressBar = () => {
    return (
      <div className='progress fixed-bottom' style={{ height: '8px' }}>
        <div className='progress-bar' role='progressbar' aria-label='Basic example' style={{ width: progress + '%' }} aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'></div>
      </div>
    );
  };

  const Clock = () => {
    return (
      <div className='position-absolute top-0 end-0 text-center text-bg-dark col shadow-sm' style={{ zIndex: '2' }}>
        <div className='p-4'>
          <h5 className='m-0'>{time.toLocaleDateString('sv')}</h5>
          <h2>{time.toLocaleTimeString('sv', { hour: '2-digit', minute: '2-digit' })}</h2>
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
    const viewTime = [2 /*Dagsschema*/, 2 /*Lunch*/, 10 /*Nyheter*/, 3 /*Väder*/, 2 /*Buss*/];
    const interval = setInterval(() => {
      setPage(pages[pageNr]);
      console.log(elapsed);
      setElapsed((prevElapsed) => prevElapsed + 0.01);
      setProgress((elapsed / viewTime[pageNr]) * 100);
      if (elapsed > viewTime[pageNr]) {
        if (pageNr === pages.length - 1) {
          setPageNr(0);
        } else {
          setPageNr((prevPageNr) => prevPageNr + 1);
        }
        setElapsed(0);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [elapsed, progress, pageNr]);

  return (
    <>
      <Clock />
      <ProgressBar />
      {page}
    </>
  );
};

export default System;
