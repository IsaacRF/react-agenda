import React, { Fragment } from 'react';

export interface FormProps {

};

const Form: React.FC<FormProps> = () => (
    <Fragment>
        <h2>Create appointment</h2>

        <form>
            <label>Title</label>
            <input
                type="text"
                name="title"
                className="u-full-width"
                placeholder="Appointment title"
            />
            <label>Invitees</label>
            <input
                type="text"
                name="invitees"
                className="u-full-width"
                placeholder="Invitees separated by comma"
            />
            <label>Date</label>
            <input
                type="date"
                name="date"
                className="u-full-width"
            />
            <label>Time</label>
            <input
                type="time"
                name="time"
                className="u-full-width"
            />
            <label>Description</label>
            <textarea
                name="description"
                className="u-full-width"
                placeholder="Appointment description"
            />

            <button
                type="submit"
                className="u-full-width button-primary"
            >Schedule</button>
        </form>
    </Fragment>
);

export default Form;