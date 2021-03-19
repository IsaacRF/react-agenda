import React, { Fragment, useState } from "react";

export interface FormProps {}

/**
 * Appointments form component
 * @returns Fragment containing the form structure
 */
const Form: React.FC<FormProps> = () => {
  //Appointment state
  const [appointment, setAppointment] = useState({
    title: "",
    invitees: "",
    date: "",
    time: "",
    description: "",
  });

  //Handle inputs changes
  const handleChange = (event: any) => {
    setAppointment({
      ...appointment,
      [event.target.name]: event.target.value,
    });
  };

  //Extract values
  const { title, invitees, date, time, description } = appointment;

  return (
    <Fragment>
      <h2>Create appointment</h2>

      <form>
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
