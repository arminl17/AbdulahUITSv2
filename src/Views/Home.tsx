import React, { useState } from "react";

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
        {activeCommand}
      </div>
    </>
  );
};

export default Home;
