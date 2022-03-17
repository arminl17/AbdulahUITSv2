import React, { useState } from "react";
import CommandUI from "../Components/CommandUI";

import Navbar from "../Components/Navbar";

const Home = () => {
  const [activeCommand, setActiveCommand] = useState<string>("Ping");
  return (
    <>
      <Navbar
        activeCommand={activeCommand}
        setActiveCommand={setActiveCommand}
      />

      <div className='mainWrapper'>
        <h2 className='abdulahText'>ABDULAH UI - {activeCommand} </h2>
        <CommandUI activeCommand={activeCommand} />
      </div>
    </>
  );
};

export default Home;
