import { useEffect, useState } from "react";

import logo from "./keycode_logo.svg";
import keyCode from "./keycode.svg";

import "./App.css";

function App() {
  const FormattedTimeComponent = ({ time, label }) => (
    <div className="RowGroup horizontal-padding">
      <div className="TimeLabel">
        <div className="TimeLabel-text time-text">
          {time < 10 ? `0${time}` : time}
        </div>
        <div className="TimeLabel-text">{label}</div>
      </div>
    </div>
  );

  const countDownDate = new Date("Aug 28, 2022 09:00:00").getTime();

  const [daysLeft, setDaysLeft] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysLeft(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const getTimeRemaining = () => {
    const days = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (daysLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((daysLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((daysLeft % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };
  const { days, hours, minutes, seconds } = getTimeRemaining();
  return (
    <div className="App">
      <header className="App-header">
      <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div>
          <div className="RowGroup">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={keyCode} className="App-logo App-text" alt="logo" />
          </div>
          <h1>
            <span></span>
            <div class="message">
              <div class="word">250+ Creators</div>
              <div class="word">25 teams</div>
              <div class="word">24 hours</div>
            </div>
          </h1>
          <div className="timer">
            {FormattedTimeComponent({ time: days, label: "Days" })}
            {FormattedTimeComponent({ time: hours, label: "Hours" })}
            {FormattedTimeComponent({ time: minutes, label: "Minutes" })}
            {FormattedTimeComponent({
              time: seconds,
              label: "Seconds",
            })}
          </div>
      </header>
    </div>
  );
}

export default App;
