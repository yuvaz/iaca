import React, { useState, forwardRef, useEffect } from "react";
import './App.css';
import Calender from './calender';
import Footer from './footer';
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";



const DateButton = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  const handleCalendarClose = () => {
    document.getElementById(moment(startDate).format("MM/DD/YYYY"))?.scrollIntoView({behavior: 'smooth'})
  };
  
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
      onCalendarClose={handleCalendarClose}
    />
  );
}

function App() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const today = moment(new Date()).format("MM/DD/YYYY");
      console.log("Calendar closed ", today);
      document.getElementById(today)?.classList.add("today");
      document.getElementById(today)?.scrollIntoView({behavior: 'smooth'});
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="App">
      <div className="headeWrapper">
        <h1>IACA Summer Camp 2023</h1>
        <p className="selectDate">Select date </p>
        <DateButton />
      </div>
      <Calender />
      <Footer />
    </div>
  );
}

export default App;
