import React from 'react';

import './vendors/bootstrap/css/bootstrap.min.css';

import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";

function App() {
  return (
      <div className="container">
        <HelloWorld/>
          <Labs/>
          <Tuiter/>

      </div>

  );
}
export default App;
