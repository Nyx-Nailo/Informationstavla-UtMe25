import { React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import "./style.css";




const LunchMenu = () => {
  
  const menu = [
    {
      day: 'Måndag',
      huvudrätt: 'Grillad kyckling med ris och brunsås',
    },
    {
      day: 'Tisdag',
      huvudrätt: 'Lasagne',
    },
    {
      day: 'Onsdag',
      huvudrätt: 'Tacos',
    },
    {
      day: 'Torsdag',
      huvudrätt: 'Köttbullar och mosad potatis',
    },
    {
      day: 'Fredag',
      huvudrätt: 'Panerad fisk',
    }
  ];


  const LunchWidget = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    let lunchTime;
    if (currentHour >= 12 && currentHour < 13) {
      lunchTime = 'It is lunchtime now!';
    } else {
      lunchTime = 'Lunchtime is coming soon! Lunch is being served between 12 and 13';
    }
  
    return (
      <div className="lunch-time-widget">
        {lunchTime}
      </div>
    );
  };

  const DinnerWidget = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    let DinnerTime;
    if (currentHour >= 17 && currentHour < 20) {
      DinnerTime = 'It is Dinner time now!';
    } else {
      DinnerTime = 'Dinner time is coming soon! Dinner is being served between 17 and 20';
    }
  
    return (
      <div className="Dinner-Time-Widget">
        {DinnerTime}
      </div>
    );
  };


  return (
    <div className="lunch-menu">
      
      <h1>Veckomeny</h1>
      <CardDeck>
        {menu.map(item => (
             <Card key={item.day} color="Lightblue" className="text-center">
            <CardBody>
              <CardTitle>{item.day}</CardTitle>
              <CardSubtitle>Huvudrätt: {item.huvudrätt}</CardSubtitle>
            </CardBody>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
};

export default LunchMenu; 