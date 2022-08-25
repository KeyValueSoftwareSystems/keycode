import { useEffect, useState } from "react";

import kvLogo from "./kvLogo.svg";
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

  const countDownDate = new Date("Aug 27, 2022 09:00:00").getTime();

  const [daysLeft, setDaysLeft] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysLeft(countDownDate - new Date().getTime());
    }, 1000);

    startAnimation();

    return () => clearInterval(interval);
  }, [countDownDate]);

  const getTimeRemaining = () => {
    if (daysLeft > 0) {
      const days = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (daysLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((daysLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((daysLeft % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };
  const { days, hours, minutes, seconds } = getTimeRemaining();

  const startAnimation = () => {
    const words = document.getElementsByClassName("word");
    let activeWord = 0;
    words[activeWord].classList.add("active-word");
    setInterval(() => {
      if (activeWord === -1) {
        words[words.length - 1].classList.remove("active-word");
        words[words.length - 1].classList.remove("keycode");
      } else {
        words[activeWord].classList.remove("active-word");
        words[words.length - 1].classList.remove("keycode");
      }
      activeWord += 1;
      words[activeWord].classList.add("active-word");
      if (activeWord === words.length - 1) {
        words[words.length - 1].classList.add("keycode");
        activeWord = -1;
      }
    }, 4000);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="area">
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
        <div className="kv-logo">
          <img src={kvLogo} className="kv-logo" alt="kv-logo" />
        </div>
        <div className="RowGroup">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={keyCode} className="App-logo App-text" alt="logo" />
        </div>
        <h1 id="animated-word">
          <div class="word">24 hours</div>
          <div class="word">25 teams</div>
          <div class="word">Neurons on fire!</div>
          <div class="word">Detonating Ideas!</div>
          <div class="word">Choosing 'Code' words!</div>
          <div class="word">A battle set to fight!</div>
          <div class="word">KeyCode 2022</div>
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
