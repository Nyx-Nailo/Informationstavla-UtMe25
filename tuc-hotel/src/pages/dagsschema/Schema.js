import'./styles.css';
const Schema = () =>{
  return (<div className="container">
<div className="Text-center">
<div className="subtitle-alt-font"><span className="text-primary">#04</span><span className="title">Timetable</span></div>
<h2 className="display">Committed to the fabilous and great <span className="text-primary">#Timetable</span></h2>
  </div>
  <div className="row">
  <div className="col-md-12">
  <div className="schedule-table">
  <div className="table bg-white">
  <thread>
    <tr>
      <th>Rutin</th>
      <th>10:00</th>
      <th>11:00</th>
      <th>15:00</th>
      <th>17:00</th>
      <th className="Last">19:00</th>
    </tr>
  </thread>
  <tbody>
  <tr>
  <td className="dag">Måndag</td>
  <td className="aktiv">
    <h4>Gym</h4>
    <p>10:00 - 11-00</p>
  </td>
  <td></td>
<td className="aktiv">
<h4>Yoga</h4>
<p>15:00 - 16:00</p>
</td>
<td className="aktiv">
<h4>Boxning</h4>
<p>17:00 - 18:00</p>
</td>
<td></td>
  </tr>
  <tr>
    <td className="dag">Tisdag</td>
    <td></td>
    <td className="aktiv">
    <h4>cykling</h4>
    <p>11:00 - 12:00</p>
  </td>
  <td className="aktiv">
    <h4>Karate</h4>
    <p>15:00 - 17:00</p>
  </td>
  <td></td>
  <td class="active">
    <h4>Crossfit</h4>
    <p>07 pm - 08 pm</p>
  </td>
  </tr>
  <tr>
    <td className="dag">Onsdag</td>
    <td className="aktiv">
      <h4>Spinning</h4>
      <p>10:00 - 23:00</p>
    </td>
    <td></td>
<td></td>
<td className="aktiv">
  <h4>Bootcamp</h4>
  <p>17:00 - 18:00</p>
  </td>
  <td className="aktiv">
    <h4>Boxercise</h4>
    <p>19:00 - 20:00</p>
  </td>
  </tr>
  <tr>
    <td className="dag">Torsdag</td>
    <td className="aktiv">
      <h4>Body Building</h4>
      <p>10:00 - 24:00</p>
  </td>
  <td></td>
  <td className="aktiv">
    <h4>Dans</h4>
    <p>15:00 - 17:00</p>
    </td>
<td></td>
<td className="aktiv">
<h4>Hälsa</h4>
<p>19:00 - 20:00</p>
</td>
  </tr>
  <tr>
<td className="dag">Fredag</td>
<td></td>
<td className="aktiv">
<h4>Bootcamp</h4>
<p>11:00 - 24:00</p>
</td>
<td></td>
<td className="aktiv">
<h4>Body Building</h4>
<p>17:00 - 18:00</p>
</td>
<td></td>
</tr>
<tr>
<td className="dag">Lördag</td>
<td className="aktiv">
<h4>Drifta</h4>
<p>10:00 - 11:00</p>
</td>
<td></td>
<td className="aktiv">
<h4>Energy Ass blast</h4>
<p>15:00 - 17:00</p>
</td>
<td></td>
<td className="aktiv">
<h4>Hoppa</h4>
<p>19:00 - 20:00</p>
</td>
</tr>
<tr>
<td className="dag">Söndag</td>
<td></td>
<td></td>
<td className="aktiv">
<h4>Aerobics</h4>
<p>15:00 - 16:00</p>
</td>
<td className="aktiv">
<h4>Cykling</h4>
<p>17:00 - 18:00</p>
</td>
<td></td>
</tr>
  </tbody>
  </div>
  </div>
  </div>
  </div>   
  </div>
  )
}
export default Schema;