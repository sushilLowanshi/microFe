import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "host/store/hooks";
import { addBooking, selectBookingList } from "host/host-slice/bookingSlice";

function Reporting() {
  const dispatch = useAppDispatch();
  const bookings = useAppSelector(selectBookingList);

  const [customer, setCustomer] = React.useState("");
  const [date, setDate] = React.useState("");

  const handleAdd = () => {
    if (!customer || !date) return;

    dispatch(addBooking({
      id: Date.now().toString(),
      customer,
      date
    }));

    setCustomer("");
    setDate("");
  };

  return (
    <div>
      <h2>Booking Component</h2>

      <input
        type="text"
        placeholder="Customer"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleAdd}>Add Booking</button>

      <h3>Current Bookings:</h3>
      <ul>
        {bookings.map((b: any) => (
          <li key={b.id}>{b.customer} - {b.date}</li>
        ))}
      </ul>
    </div>
  );
}


export default Reporting