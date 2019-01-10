import React from 'react';
import btn from '../img/rezerwujBtn.png';
import zajete from '../img/zajete.png';
import wybrane from '../img/wybrane.png';
import wolne from '../img/wolne.png';

class Info extends React.Component{

    render(){
        return (
                <div className = 'info'>
                    <ul className='resInfo'>
                        <li><h2>Tytuł:</h2></li>
                        <li><h2>Czas:</h2></li>
                        <li><h2>Miejsca:</h2></li>
                    </ul>
                    <button id = 'rezerwujBtn'><img src={btn} alt="rezerwuj"/></button>
                    <ul className="seatsStatus">
                        <li><img src={zajete} alt='zajęte'/><h3>Zajęte</h3></li>
                        <li><img src={wybrane} alt='wybrane'/><h3>Wybrane</h3></li>
                        <li><img src={wolne} alt='wolne'/><h3>Wolne</h3></li>
                    </ul>
                </div>
        );
    }
}
export default Info;