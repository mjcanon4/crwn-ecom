import React from "react";
import { useNavigate } from "react-router-dom";

import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";

let navigate = useNavigate();

const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
