import './App.css';
import Navbar from "./components/Navbar";
import CallToAction from "./components/CallToAction";
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

ReactDOM.render(<SocialIcon url="https://twitter.com/jaketrent" />, document.body);

function App() {
  return (
    <body>
      <Navbar></Navbar>
      <CallToAction></CallToAction>
    </body>
  );
}

export default App;
