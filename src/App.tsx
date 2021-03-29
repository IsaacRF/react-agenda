import React, { Fragment, useState, useEffect } from "react";

import Form from "./components/Form";
import Appointment from "./components/Appointment";

const App = () => {
  const appointmentsStorageKey = "appointments";

  // Saved Appointments state
  let savedAppointments = JSON.parse(
    localStorage.getItem(appointmentsStorageKey) || "[]"
  );
  const [appointments, setAppointments] = useState<any>(savedAppointments);

  // Use Effect to react to state changes
  useEffect(() => {
    localStorage.setItem(appointmentsStorageKey, JSON.stringify(appointments));
  }, [appointments]);

  /**
   * Adds a new appointment to list
   * @param appointment Appointment to add
   */
  const createAppointment = (appointment: any) => {
    setAppointments([...appointments, appointment]);
  };

  /**
   * Deletes an appointment by ID
   * @param id ID of the appointment to delete
   */
  const deleteAppointment = (id: string) => {
    setAppointments(
      appointments.filter((appoint: any) => appoint.id !== id)
    );
  };

  return (
    <Fragment>
      <h1>React Agenda</h1>
      <div className="container">
        <div className="one-half column">
          <Form createAppointment={createAppointment} />
        </div>
        <div className="one-half column">
          <h2>Your appointments</h2>
          {appointments.length === 0 && (
            <p className="title">No scheduled appointments</p>
          )}
          {appointments.map((appointment: any) => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
              deleteAppointment={deleteAppointment}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default App;
