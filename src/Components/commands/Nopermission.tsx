import React from "react";
import { Fade } from "react-awesome-reveal";

import "../../styles/CommandUI.scss";
function NoPermission() {
  return (
    <div className='commandContent'>
      <Fade>
        <p className='commandDescText noPerm'>
          Sorry, you have no permission to run this command. Contact
          administrator Champa.
        </p>
      </Fade>
    </div>
  );
}

export default NoPermission;
