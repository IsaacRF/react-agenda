import React from 'react';

import './styles.scss';

export interface AppointmentProps {
  appointment: any
}

const Appointment: React.FC<AppointmentProps> = ({ appointment }) => (
    <div className="appointment">
        <h3>{appointment.title}</h3>
        <span>📅 {appointment.date} {appointment.time}</span>
        <p>Invitees: <span>{appointment.invitees}</span></p>
        <p>{appointment.description}</p>
    </div>
);

export default Appointment;