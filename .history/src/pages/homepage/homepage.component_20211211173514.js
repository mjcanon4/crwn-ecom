import React from "react";

import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <div className="homepage">
    <Directory title={MENS} />
  </div>
);

export default HomePage;
