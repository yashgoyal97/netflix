import React from "react";
import { NETFLIX_LOGO } from "../utils/images";

const AppHeader = () => {
  return (
    <div>
      <img className="w-56" src={NETFLIX_LOGO} alt="logo" />
    </div>
  );
};

export default AppHeader;
