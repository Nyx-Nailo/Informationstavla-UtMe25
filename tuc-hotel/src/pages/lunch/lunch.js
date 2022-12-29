import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, CardGroup } from 'reactstrap';

const LunchMenu = () => {
  const menu = [
    {
      day: 'Måndag',
      huvudrätt: 'Grillad kyckling med ris och brunsås',
      vegorätt: 'Råkost',
      efterrätt: 'Cheesecake i glas',
    },
    {
      day: 'Tisdag',
      huvudrätt: 'Lasagne',
      vegorätt: 'Chever Knyte',
      efterrätt: 'Äppelkaka med salt kolasås',
    },
    {
      day: 'Onsdag',
      huvudrätt: 'Tacos',
      vegorätt: 'Vegan Kebab',
      efterrätt: 'Chockladpudding',
    },
    {
      day: 'Torsdag',
      huvudrätt: 'Köttbullar och mosad potatis',
      vegorätt: 'Grillad Quorn',
      efterrätt: 'Citrondessert',
    },
    {
      day: 'Fredag',
      huvudrätt: 'Panerad fisk',
      vegorätt: 'Lassagna al forna',
      efterrätt: 'Brietårta',
    },
    {
      day: 'Lördag',
      huvudrätt: 'Oxfilé',
      vegorätt: 'Halloumi Deli Tallrik',
      efterrätt: 'Créme Brûlée',
    },
    {
      day: 'Söndag',
      huvudrätt: 'Pankakor',
      vegorätt: 'Pasta canneloni',
      efterrätt: 'Tiramisu',
    },
  ];

  const check = (day) => {
    const n = new Date();
    let v = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag ', 'Torsdag', 'Fredag', 'Lördag'];

    let dag = v[n.getDay()];

    return dag === day ? 'bg-light' : '';
  };

  return (
    <div className='p-2'>
      <h1>Veckomeny</h1>
      <CardGroup>
        {menu.map((item) => (
          <Card key={item.day} className={check(item.day)}>
            <CardBody>
              <CardTitle tag='h5' className='pb-2'>
                {item.day}
              </CardTitle>
              <CardSubtitle tag='h6'>
                <b>Huvudrätt</b>
              </CardSubtitle>
              <CardText>{item.huvudrätt}</CardText>
              <CardSubtitle tag='h6'>
                <b>Vegetariskt</b>
              </CardSubtitle>
              <CardText>{item.vegorätt}</CardText>
              <CardSubtitle tag='h6'>
                <b>Efterrätt</b>
              </CardSubtitle>
              <CardText>{item.efterrätt}</CardText>
            </CardBody>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default LunchMenu;
