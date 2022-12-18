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
            {time.getHours()}:{time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes()}
          </h2>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const pages = [<Dagsschema />, <Lunch />, <Nyheter />, <Vader />, <Busstider />];
    /*  Timer for page change   */
    const viewTime = [2, 1, 1, 1, 1]; /*Tid i sekunder som sidan med samma index visas*/

    const interval = setInterval(() => {
      setPage(pages[pageNr]);
      setDelay(viewTime[pageNr] * 10000);
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
