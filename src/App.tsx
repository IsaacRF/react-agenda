import React, { Fragment } from "react";

import Form from "./components/Form";

const App = () => (
  <Fragment>
    <h1>React Agenda</h1>
    <div className="container">
      <div className="one-half column">
        <Form />
      </div>
      <div className="one-half column">
        2
      </div>
    </div>
  </Fragment>
);

export default App;
