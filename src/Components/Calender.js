import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style/Calendar.css';
function OrdersCalendar() {
    const [date, setDate] = useState(new Date());

    const handleDateChange = date => {
        setDate(date);
    };

    return (
        <div className="container">
            <h2>Orders Calendar View</h2>
            <div className="calendar-container">
            <Calendar
                onChange={handleDateChange}
                value={date}
            />
        </div>
        </div>
    );
}

export default OrdersCalendar;