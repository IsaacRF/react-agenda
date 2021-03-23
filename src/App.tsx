import React, { Fragment, useState } from "react";

import Form from "./components/Form";

const App = () => {
  // Saved Appointments state
  const [appointments, setAppointments] = useState<any>([]);

  /**
   * Adds a new appointment to list
   * @param appointment Appointment to add
   */
  const createAppointment = (appointment: any) => {
    setAppointments([
      ...appointments,
      appointment
    ]);
  };

  return (
    <Fragment>
      <h1>React Agenda</h1>
      <div className="container">
        <div className="one-half column">
          <Form createAppointment={createAppointment} />
        </div>
        <div className="one-half column">2</div>
      </div>
    </Fragment>
  );
};

export default App;
