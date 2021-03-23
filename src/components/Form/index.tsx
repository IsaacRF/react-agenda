import React, { Fragment, useState } from "react";
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";
import { v4 as uuid } from 'uuid';

export interface FormProps {
    createAppointment: any
}

/**
 * Appointments form component
 * @returns Fragment containing the form structure
 */
const Form: React.FC<FormProps> = ({createAppointment}) => {
  //Appointment state
  const [appointment, setAppointment] = useState({
    id: "",
    title: "",
    invitees: "",
    date: "",
    time: "",
    description: "",
  });

  const [error, setError] = useState(false);

  /**
   * Handle inputs changes
   * @param event
   */
  const handleChange = (event: any) => {
    setAppointment({
      ...appointment,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Form submit
   * @param event
   */
  const submitAppointment = (event: any) => {
    event.preventDefault();

    // Validation
    if (
      title.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      description.trim() === ""
    ) {
      setError(true);
      return;
    }

    // Update error
    setError(false);

    // Assign ID
    appointment.id = uuid();

    // Create appointment + state
    createAppointment(appointment);

    // Restart form
  };

  //Extract values
  const { title, invitees, date, time, description } = appointment;

  return (
    <Fragment>
      <h2>Create appointment</h2>

      { error ? <p className="alert-error">There is an error</p> : null }

      <form onSubmit={submitAppointment}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="u-full-width"
          placeholder="Appointment title"
          value={title}
          onChange={handleChange}
        />
        <label>Invitees</label>
        <input
          type="text"
          name="invitees"
          className="u-full-width"
          placeholder="Invitees separated by comma"
          value={invitees}
          onChange={handleChange}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          value={date}
          onChange={handleChange}
        />
        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          value={time}
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea
          name="description"
          className="u-full-width"
          placeholder="Appointment description"
          value={description}
          onChange={handleChange}
        />

        <button type="submit" className="u-full-width button-primary">
          Schedule
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
