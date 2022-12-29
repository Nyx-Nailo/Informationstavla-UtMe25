import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, CardGroup } from 'reactstrap';
import './style.css';

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
    },
    {
      day: 'Lördag',
      huvudrätt: 'Oxfilé',
    },
    {
      day: 'Söndag',
      huvudrätt: 'Pankakor',
    },
  ];

  return (
    <div className='lunch-menu p-2'>
      <h1>Veckomeny</h1>
      <CardGroup>
        {menu.map((item) => (
          <Card key={item.day} color='Lightblue'>
            <CardBody>
              <CardTitle tag='h5'>{item.day}</CardTitle>
              <CardSubtitle tag='h6'>Huvudrätt</CardSubtitle>
              <CardText>{item.huvudrätt}</CardText>
            </CardBody>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default LunchMenu;
