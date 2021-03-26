import React from 'react';

import './styles.scss';

export interface AppointmentProps {
  appointment: any,
  deleteAppointment: Function
}

const Appointment: React.FC<AppointmentProps> = ({ appointment, deleteAppointment }) => (
    <div className="appointment">
        <h3>{appointment.title}</h3>
        <span>📅 {appointment.date} {appointment.time}</span>
        <p>Invitees: <span>{appointment.invitees}</span></p>
        <p>{appointment.description}</p>

        <button
          className="button delete u-full-width"
          onClick={() => deleteAppointment(appointment.id)}
        >Delete &times;</button>
    </div>
);

export default Appointment;