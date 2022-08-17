import logo from './keycode_logo.svg';
import keyCode from './keycode.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {
  const FormattedTimeComponent = ({time, label, isLastElement}) => (
    <div className="RowGroup">
    <div className="TimeLabel">
      <p className="TimeLabel-text">{time}</p>
      <p className="TimeLabel-text">{label}</p>
    </div>
    {!isLastElement && <p className="TimeLabel-text">:</p> }
    </div>
  );

  const countDownDate = new Date("Aug 28, 2022 09:00:00").getTime();

  const [daysLeft, setDaysLeft] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysLeft(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);
  
  const getTimeRemaining = () => {
  const days = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((daysLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((daysLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((daysLeft % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
  }
  const { days, hours, minutes, seconds } = getTimeRemaining();
  return (
    <div className="App">
      <header className="App-header">
        <div className="RowGroup">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={keyCode} className="App-logo App-text" alt="logo" />
        </div>
        <div className="RowGroup">
          {FormattedTimeComponent({time: days, label: 'Days'})}
          {FormattedTimeComponent({time: hours, label: 'Hours'})}
          {FormattedTimeComponent({time: minutes, label: 'Minutes'})}
          {FormattedTimeComponent({time: seconds, label: 'Seconds', isLastElement: true})}
        </div>
      </header>
    </div>
  );
}

export default App;
